import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import ReviewCard from './ReviewCard';


const ServiceDetails = () => {

    const { user } = useContext(AuthContext);
    const location = useLocation();

    const { id } = useParams();
    const [service, setService] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false)
            })

    }, [id]);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setLoading(false)
            })

    }, [id]);

    if (loading) {
        return <Loading></Loading>
    }

    const handleReviewSubmit = (event) => {
        event.preventDefault()
        const reviewText = event.target.reviewText.value;
        const rating = event.target.rating.value;
        const reviewObj = { email: user.email, username: user.displayName, userPhoto: user.photoURL, rating: rating, text: reviewText, serviceId: id, serviceName: service.name, date: Date.now() };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json', 'authorizartion': localStorage.getItem('amatory-token')
            },
            body: JSON.stringify(reviewObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset()
                setReviews([...reviews, reviewObj])
            })
        console.log(reviewText);
    }
    return (
        <div className=''>
            <h2 className='text-4xl text-center font-semibold my-2'>Service section</h2>

            <div className='p-5 w-full my-5'>
                <img className='w-96' src={service.img} alt="" />
                <h2 className='text-4xl font-bold'>{service.name} </h2>
                <h4 className='font-semibold text-2xl p-2 my-2 border '>Price: ${service.price}</h4>
                <p>{service.description}</p>
            </div>

            <div className='w-full my-3 px-5'>
                <h2 className='text-4xl text-center font-semibold my-2'>Review section</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                    {
                        reviews.map(review => <ReviewCard

                            key={review._id}
                            review={review}

                        ></ReviewCard>)
                    }
                </div>

                <div className='w-full lg:w-1/2 mx-auto'>
                    {user ? <form onSubmit={handleReviewSubmit} >
                        <div>
                            <label htmlFor="reviewText" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Review Text Here</label>
                            <textarea name="reviewText" id="reviewText" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Give review here" required="" ></textarea>
                        </div>
                        <div>
                            <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Rating</label>
                            <input type='number' min={0} max={5} name="rating" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="rating" required="" />
                        </div>


                        <button disabled={loading} type="submit" className=" mt-3 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading ? <Loading /> : `Submit Review`}</button>

                    </form> : <h2 className='text-2xl text-center font-semibold my-3'>Please <Link state={{ from: location }} className='text-blue-500' to='/login'>login</Link> to add a review.</h2>}

                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;