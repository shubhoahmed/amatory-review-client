import React from 'react';
import useTitle from '../../Hocks/hockTitle/HockTitle';
import Services from '../Home/Services';

const AllServices = () => {
    useTitle('Servives')
    return (
        <Services></Services>
    );
};

export default AllServices;