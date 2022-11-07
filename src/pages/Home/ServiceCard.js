import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, img, price, _id, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p className=''>{description.slice(0, 100)}...</p>
                <p className='text-2xl font-semibold'> Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary w-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;