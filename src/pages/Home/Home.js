import React from 'react';
import Services from './Services';
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='my-10'>
            <Services limit={3}> </Services>

            <div className='flex justify-center'>
                <button onClick={() => navigate('/services')} className="btn mt-3 ">See All</button>
            </div>

        </div>
    );
};

export default Home;