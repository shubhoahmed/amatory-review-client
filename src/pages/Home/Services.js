
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import ServiceCard from './ServiceCard';

const Services = ({ limit }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`https://amatory-review-server-side.vercel.app/services${limit ? `?limit=${limit}` : ""}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })

    }, [limit]);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default Services;