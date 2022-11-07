import React from 'react';
import Services from './Services';
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Services limit={3}> </Services>
            <button onClick={() => navigate('/services')} className="btn btn-secondary">Show All</button>

        </div>
    );
};

export default Home;