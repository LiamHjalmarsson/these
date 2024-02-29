import React from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Banner from '../../components/Banner/Banner';
import bannerImg from "/images/banner.jpg";
import manImage from "/images/man.jpg";
import womanImage from "/images/woman.jpg";
import SeasonProduct from './components/Season/SeasonProducts';
import BestSellers from './components/Best/BestSellers';
import Newsletter from '../../components/Newsletter/Newsletter';
import SecondaryButton from '../../components/Elements/SecondaryButton';
import LinkButton from '../../components/Elements/LinkButton';


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
            title: "Kavaj",
            img: manImage
        },
        {
            title: "Skjorta",
            img: manImage
        },
        {
            title: "Slips",
            img: manImage
        },
        {
            title: "Mösa",
            img: womanImage
        },
        {
            title: "Jacka",
            img: womanImage
        },
    ];

    return (
        <Deafult>
            <Banner img={bannerImg} heading="Home">
                <div className='text-white mt-4'>
                    Kvalititets kläder för Herr & Dam
                </div>
                <div className='w-96 p-4 flex justify-center items-center gap-8 mt-4'>
                    <LinkButton to="/" title="Herr" />
                    <LinkButton to="/" title="Dam" />
                </div>
            </Banner>

            <SeasonProduct items={news} />

            <BestSellers heading="Populära Produkter Dam" items={items} />
            <BestSellers heading="Populära Produkter Herr" items={items} />

            <Newsletter />
        </Deafult>
    );
}

export default Home;
