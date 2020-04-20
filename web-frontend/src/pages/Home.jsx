import React from 'react';
import Header from '../components/common/Header';
// import PageTemplate from '../components/template/PageTemplate';
import imgIntro from '../components/common/img/intro.jpg';


const Home = () => {
    return (
        <div>
            <Header />
            <img src={imgIntro} />
        </div>
    );
};

export default Home;