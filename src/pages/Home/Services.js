import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Loding from '../Shared/Loading/Loding';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/services?limit=3`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })

    }, []);

    if (loading) {
        return <Loding></Loding>
    }
    return (
        <div>
            {
                services.length
            }
        </div>
    );
};

export default Services;