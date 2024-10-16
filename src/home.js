import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './signup';
import './home.css';

function Home() {
    const [isLoading, setIsLoading] = useState(true);  // Fixed camelCase naming
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            navigate('/signin'); 
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            {isLoading ? (
                <div className="home">
                    <div><h1 className="bungee-tint-regular animate__heartBeat">Netflix</h1></div>
                    <div className='loader mt'></div>        
                </div>
                
            ) : (
                <Signup />
            )}
        </div>
    );
}

export default Home;
