import React from 'react';
import Services from './Services';
import { useNavigate } from 'react-router-dom'
import Experience from './Experience/Experience';
import RandomCourse from './RandomCourse/RandomCourse';
import useTitle from '../../Hocks/hockTitle/HockTitle';
const Home = () => {
    useTitle('Home');
    const navigate = useNavigate();
    return (
        <div className='my-10'>
            <Services limit={3}> </Services>

            <div className='flex justify-center'>
                <button onClick={() => navigate('/services')} className="btn mt-3 ">See All</button>
            </div>

            <Experience></Experience>
            <RandomCourse></RandomCourse>

        </div>
    );
};

export default Home;