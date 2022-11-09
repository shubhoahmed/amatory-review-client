import React from 'react';

const ReviewCard = ({ review }) => {
    const { username, userPhoto, rating, text, date } = review;

    return (
        <div className='p-3 border my-2 shadow-lg'>

            <article>
                <div class="flex items-center mb-4 space-x-4">
                    <img class="w-10 h-10 rounded-full" src={userPhoto} alt="" />
                    <div class="space-y-1 font-medium dark:text-white">
                        <p>{username} </p>
                    </div>
                </div>
                <div class="flex items-center mb-1">
                    {[...new Array(+rating)].map((_, i) => <svg key={i} aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>)}

                </div>
                <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p><time datetime={date}>{date}</time></p></footer>
                <p class="mb-2 font-light text-gray-500 dark:text-gray-400">{text}</p>
            </article>

        </div>
    );
};

export default ReviewCard;