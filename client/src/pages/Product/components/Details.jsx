import React, { useState } from 'react';
import Devider from '../../../components/Elements/Devider';
import SecondaryButton from '../../../components/Elements/SecondaryButton';
import { toast } from 'react-toastify';

const Details = ({data, onAddToCart}) => {
    let [selectedSize, setSelectedSize] = useState(null);

    let handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    let addToCart = () => {
        if (!selectedSize) {
            toast.error("Välj en storlek för attlägga till product");
        } else {
            onAddToCart({
                id: data._id,
                name: data.name,
                price: data.price, 
                image: data.image, 
                size: selectedSize
            })
        }
    }

    return (
        <div className='w-fit h-full justify-center flex flex-col p-6 mb-10'>

            <h3 className='text-5xl'>
                {
                    data.category.charAt(0).toUpperCase() + data.category.slice(1)
                }
            </h3>

            <div className='mt-4'>
                Artikel nummer
            </div>

            <div className='mt-2'>
                {
                    data.price + " kr"
                }
            </div>

            <Devider />

            <div className='mt-4'>
                Beskrivning
            </div>

            <div className='mt-4'>
                <p>
                    Storlek & måttning
                </p>
            </div>

            <div className='flex gap-8 my-4'>
                {
                    data.size.map(size => (
                        <SecondaryButton key={size}                         
                        custom={`border-primary text-primary hover:bg-primary hover:text-white ${selectedSize === size ? 'bg-primary text-white bg-opacity-85' : ''}`}
                        onClick={() => handleSizeSelection(size)}>
                            {
                                size.toUpperCase()
                            }
                        </SecondaryButton>
                    ))
                }
            </div>

            <div className='mt-4 mb-4'>
                <button className='text-xl px-6 py-3 border-2 flex-grow text-center rounded-md bg-primary hover:bg-opacity-90 transition duration-300 text-white' onClick={addToCart}>
                    Lägg till i varukorg
                </button>
            </div>

            <Devider />

            <div className='mt-4 mb-4'>
                Detaljer
            </div>

            <Devider />

            <div className='mt-4 mb-4'>
                Skötsel
            </div>

            <Devider />

            <div className='mt-4 mb-4'>
                    Recensioner {data.totalRatings}
            </div>

            <Devider />

        </div>
    );
}

export default Details;
