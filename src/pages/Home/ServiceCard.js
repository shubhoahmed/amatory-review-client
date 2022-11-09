import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();
    const { name, img, price, _id, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img} >
                        <img className='w-full h-[300px] object-cover' src={img} alt="Album" />
                    </PhotoView>
                </PhotoProvider>


            </figure>
            <div className="card-body text-left">
                <h2 className="card-title">{name}</h2>
                <p className=''>{description.slice(0, 100)}...</p>
                <p className='text-2xl font-semibold'> Price: ${price}</p>
                <div className="card-actions">
                    <button onClick={() => navigate(`/services/${_id}`)} className="btn w-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;