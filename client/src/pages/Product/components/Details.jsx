import React from 'react';
import Devider from '../../../components/Elements/Devider';
import { capitalizeFirstLetter } from '../../../utils/stringUtils';

// Clean up will be made when data is fixed
const Details = ({data, onAddToCart}) => {

    return (
        <div className='w-full h-full justify-center flex flex-col p-6'>

            <h3 className='text-5xl'>
                {
                    data.category
                }
            </h3>

            <div className='mt-4'>
                Artikel nummer
            </div>

            <div className='mt-2    '>
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

            <div className='flex gap-8 mt-4'>
                {
                    data.size.map(size => (
                        <button key={size}>
                            {
                                capitalizeFirstLetter(size)
                            }
                        </button>
                    ))
                }
            </div>

            <div className='mt-4 mb-4'>
                <button className='bg-primary p-4 text-white' onClick={() => onAddToCart({ id: data._id, name: data.name, price: data.price })}>
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
                Recensioner
            </div>

            <Devider />

            <div className='flex gap-8 mt-4'>
                {/* {
                    sizes.map(size => (
                        <button key={size}>
                            {
                                size
                            }
                        </button>
                    ))
                } */}
            </div>

        </div>
    );
}

export default Details;
