import React from 'react';

const EditReviewModal = ({ review, handleUpdate }) => {
    return (
        <div>

            <input type="checkbox" id="editReviewModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Edit Review</label>
                            <input type="text" name="email" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={review.text} required="" />
                        </div>
                        <div className="modal-action">
                            <button>
                                <label htmlFor="editReviewModal" className="btn btn-success">Update</label>
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default EditReviewModal;