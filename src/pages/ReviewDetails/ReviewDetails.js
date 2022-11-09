import React from 'react';
import { toast } from 'react-toastify';
import EditReviewModal from './EditReviewModal';

const ReviewDetails = ({ review }) => {

    const { serviceName, rating, text, _id } = review;

    const handleDelete = () => {

        fetch(`https://amatory-review-server-side.vercel.app/reviews/${_id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('review successfully deleted');
            });
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        const updatedReview = { text: event.target.text.value }


        fetch(`https://amatory-review-server-side.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json', 'authorizartion': localStorage.getItem('amatory-token')

            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('review successfully updated');
            });
    }
    return (
        <div className='p-10'>

            <EditReviewModal review={review}
                handleUpdate={handleUpdate}
            ></EditReviewModal>
            <h2>Service Name: {serviceName}</h2>
            <p>Review: {text}</p>
            <p>Star: {rating}</p>
            <label htmlFor="editReviewModal" className="btn btn-warning mr-2 my-3">Edit Review</label>

            <button onClick={handleDelete} className="btn btn-error">Delete</button>
        </div>
    );
};

export default ReviewDetails;