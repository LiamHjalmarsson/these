import React from 'react'
import Deafult from '../../components/Layouts/Deafult'
import Newsletter from '../../components/Newsletter/Newsletter';
import Banner from '../../components/Banner/Banner';
import bannerImg from "/images/man_section.jpg";
import manImage from "/images/man.jpg";
import Categories from './components/Categories';
import './Gender.css';

const Herr = () => {
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
            img: manImage
        },
        {
            title: "Jacka",
            img: manImage
        },
    ];
  return (
    <Deafult>
         <Banner img={bannerImg} heading="LD Kläder Herr" color="white" className="custom-banner"/>
         <Categories heading="Populära produkter Herr" items={items} />
       <Newsletter/>  
    </Deafult>

    
  ) 
}

export default Herr;
