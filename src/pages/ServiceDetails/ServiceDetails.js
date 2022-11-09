import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Loading from '../Shared/Loading/Loading';

const ServiceDetails = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                setLoading(false)
            })

    }, [id]);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <img src={service.img} alt="" />

            <h2>{service.name} </h2>
            <h4>Price:${service.price}</h4>
            <p>{service.description}</p>

        </div>
    );
};

export default ServiceDetails;