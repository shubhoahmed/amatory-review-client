import React from 'react';
import { toast } from 'react-toastify'
import useTitle from '../../Hocks/hockTitle/HockTitle';

const AddServices = () => {
    const handleAddService = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const img = event.target.img.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const serviceObj = { name, img, price, description };
        fetch('https://amatory-review-server-side.vercel.app/services', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json', 'authorization': `Bearer ${localStorage.getItem('amatory-token')}`
            },
            body: JSON.stringify(serviceObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset()
                toast.success('Service added successful.')
            })

    }
    useTitle('Add Service');
    return (
        <div className='container w-1/2 mx-auto'>
            <h2 className='text-center text-xl font-bold my-2'>Add a Service</h2>

            <form onSubmit={handleAddService}>
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Service Name</label>
                    <input type="text" name="name" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required="" />
                </div>
                <div>
                    <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Photo URL</label>
                    <input type="text" name="img" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required="" />
                </div>
                <div>
                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Service Price</label>
                    <input type="number" name="price" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price" required="" />
                </div>
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Description</label>
                    <textarea type="text" name="description" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required=""> </textarea>
                </div>
                <button className="btn mt-5">Add Service</button>
            </form>
        </div>
    );
};

export default AddServices;