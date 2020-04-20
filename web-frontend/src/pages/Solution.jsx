import React from 'react';
import Header from '../components/common/Header';
import imgNebula from '../components/common/img/nebula.jpg';

const Solution = () => {
    return (
        <div>
            <Header />
            <img src={imgNebula} />
        </div>
    );
};

export default Solution;