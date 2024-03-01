import React from 'react';
import { useParams } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import Image from '../../components/Elements/Image';
import img from "/images/man.jpg";
import Devider from '../../components/Elements/Devider';
import Images from './components/Images';
import Details from './components/Details';

const Product = () => {
    let { id } = useParams();

    let data = {
        img,
        // title,
        // articalNr,
        // price,
        // description
        // sizes
    }

    let sizes = ["s", "m", "l", "xl", "xxl", "3xl"];

    return (
        <Deafult>
            <div className='h-screen flex flex-col justify-center items-center mb-20'>
                <div className='grid grid-cols-2 gap-8 w-[80%] max-w-6xl mt-12'>

                    <Images img={img} />

                    <Details sizes={sizes} />

                </div>
            </div>
        </Deafult>
    );
}

export default Product;
