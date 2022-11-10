import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import Loading from '../Shared/Loading/Loading';

const MyReviews = () => {
    const { user, loading: userLoading } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState([]);

    useEffect(() => {

        if (user) {

            setLoading(true);
            fetch(`https://amatory-review-server-side.vercel.app/reviewsByEmail/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('amatory-token')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    setReviews(data)
                    setLoading(false)
                });
        }


    }, [user]);
    console.log(reviews);
    if (loading || userLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
            {reviews.length === 0 &&


                <div className='h-screen flex justify-center items-center'><h1 className='font-bold text-center text-xl'>No reviews were added</h1></div>

            }
            {
                reviews.map(review => <ReviewDetails
                    key={review._id}
                    review={review}

                ></ReviewDetails>)
            }
        </div>
    );
};

export default MyReviews;