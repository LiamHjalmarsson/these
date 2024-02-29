import React from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Banner from '../../components/Banner/Banner';
import bannerImg from "/images/banner.jpg";
import manImage from "/images/man.jpg";
import womanImage from "/images/woman.jpg";
import SeasonProduct from './components/Season/SeasonProducts';
import BestSellers from './components/Best/BestSellers';
import Newsletter from '../../components/Newsletter/Newsletter';


const Home = () => {
    let news = [
        {
            title: "Dam",
            path: "/dam",
            img: womanImage
        },
        {
            title: "Herr",
            path: "/herr",
            img: manImage
        },
    ];

    let items = [
        {
            title: "forSeason",
            img: manImage
        },
        {
            title: "forSeason",
            img: manImage
        },
        {
            title: "forSeason",
            img: manImage
        },
        {
            title: "forSeason",
            img: womanImage
        },
        {
            title: "forSeason",
            img: womanImage
        },
    ];

    return (
        <Deafult>
            <Banner img={bannerImg} heading="Home" />

            <SeasonProduct items={news} />

            <BestSellers heading="Woman" items={items} />
            <BestSellers heading="Man" items={items} />

            <Newsletter />
        </Deafult>
    );
}

export default Home;
