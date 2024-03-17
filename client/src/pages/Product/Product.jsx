import React from 'react';
import { useParams } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import Details from './components/Details';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../reducer/cartSlice.js';
import { toast } from 'react-toastify';
import Image from '../../components/Elements/Image.jsx';

const Product = () => {
    let { id } = useParams();
    let { data } = useFetch(`/api/clothing/${id}`);

    let dispatch = useDispatch();

    let handleAddToCart = (item) => {
        dispatch(addItemToCart(item));

        toast.success("Produkt tilllagd i varukorg");
    };

    return (
        <Deafult>
            <div className='min-h-[80vh] flex flex-col justify-center items-center'>
                <div className='h-[80%] w-[80%] gap-8 flex justify-center items-center flex-wrap max-lg:mt-10'>
                    {
                        data && (
                            <>
                                <div className='max-w-md overflow-hidden shadow-middle shadow-black rounded-md group my-10'>
                                    <Image img={data.clothing.image} custom='group-hover:scale-105 group-hover:opacity-90' />
                                </div>

                                <Details data={data.clothing} onAddToCart={handleAddToCart} />
                            </>
                        )
                    }
                </div>
            </div>
        </Deafult>
    );
}

export default Product;