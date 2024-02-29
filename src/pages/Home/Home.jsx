import React from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Banner from '../../components/Banner/Banner';
import bannerImg from "/images/banner.jpg";


const Home = () => {
    return (
        <Deafult>
            <Banner img={bannerImg} heading="Home" />
        </Deafult>
    );
}

export default Home;
