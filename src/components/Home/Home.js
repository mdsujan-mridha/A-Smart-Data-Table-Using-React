import React from 'react';
import Datas from '../Datas/Datas';
import './Home.css'

const Home = () => {
    return (
        <div className='user-table'>
             <h1> Data Table </h1>
            <Datas />
        </div>
    );
};

export default Home;