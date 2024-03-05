import React from 'react'
import Deafult from '../../components/Layouts/Deafult'
import Newsletter from '../../components/Newsletter/Newsletter';
import Banner from '../../components/Banner/Banner';
import bannerImg from "/images/dam_sektion.jpg";
import womanImage from "/images/woman.jpg";
import Categories from './components/Categories';



export default function Dam() {
    let items = [
        {
            title: "Kavaj",
            img: womanImage
        },
        {
            title: "Skjorta",
            img: womanImage
        },
        {
            title: "Slips",
            img: womanImage
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
         <Banner img={bannerImg} heading="LD Kläder Dam" color="white" />
         <Categories heading="Populära produkter Dam" items={items} />
       <Newsletter/>  
    </Deafult>

    
  )
}
