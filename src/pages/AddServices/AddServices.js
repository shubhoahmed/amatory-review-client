import React from 'react';

const AddServices = () => {
    return (
        <div className='container mx-auto'>
            <h2>This is add service page</h2>

            <form>
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Service Name</label>
                    <input type="text" name="email" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" />
                </div>
                <div>
                    <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Photo URL</label>
                    <input type="text" name="text" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required="" />
                </div>
                <div>
                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Service Price</label>
                    <input type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price" required="" />
                </div>
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Description</label>
                    <textarea type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required=""> </textarea>
                </div>
                <button className="btn mt-5">Add Service</button>
            </form>
        </div>
    );
};

export default AddServices;