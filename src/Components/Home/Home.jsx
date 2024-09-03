import React from 'react';
import Banner from './Banner/Banner';
import Featured from './Featured/Featured';
import HomeCard from './HomeCard/HomeCard';
import HomeProduct from './HomeProduct/HomeProduct';
import NewArryval from './NewArruval/NewArryval';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <HomeProduct></HomeProduct>
            <HomeCard></HomeCard>
            <NewArryval></NewArryval>
            <HomeSlider></HomeSlider>
        </div>
    );
};

export default Home;