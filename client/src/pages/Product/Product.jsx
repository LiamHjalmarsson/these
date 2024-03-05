import React from 'react';
import { useParams } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import img from "/images/man.jpg";
import Images from './components/Images';
import Details from './components/Details';
import useFetch from '../../hooks/useFetch';

const Product = () => {
    let { id } = useParams();

    let url = `https://fakestoreapi.com/products/${id}`

    let { data } = useFetch(url);

    // let data = {
    // img,
    // title,
    // articalNr,
    // price,
    // description
    // sizes
    // }

    let sizes = ["s", "m", "l", "xl", "xxl", "3xl"];

    return (
        <Deafult>
            <div className='h-screen flex flex-col justify-center items-center mb-20'>
                <div className='grid grid-cols-2 gap-8 w-[80%] max-w-6xl mt-12'>

                    {
                        data && (
                            <>
                                <Images img={data.image} />

                                <Details sizes={sizes} data={data} />
                            </>
                        )
                    }

                </div>
            </div>
        </Deafult>
    );
}

export default Product;
