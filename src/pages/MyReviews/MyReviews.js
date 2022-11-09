import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import Loading from '../Shared/Loading/Loading';

const MyReviews = () => {
    const { user, loading: userLoading } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState([]);

    useEffect(() => {

        if (user?.email) {
            setLoading(true);
            fetch(`http://localhost:5000/reviewsByEmail/${user.email}`)
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
        <div>
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