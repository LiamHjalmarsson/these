import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useFetch from '../../../hooks/useFetch';

const Clothings = () => {
    let [create, setCreate] = useState(false);
    let [all, setAll] = useState(false);

    let [formData, setFormData] = useState({
        name: "",
        brand: "",
        price: "",
        category: "",
        color: "",
        genderType: "",
        averageRating: "",
        totalRatings: "",
        image: ""
    });

    let { data } = useFetch("/api/clothing");


    let allHandler = () => {
        setAll(!all)
    }

    let createHandler = () => {
        setCreate(!create)
    }

    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('/api/clothing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to create item');
            }

            toast.success("Product tillagd");

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto my-10">

            <nav className='max-w-md mx-auto my-10'>
                <ul className='flex gap-8 items-center justify-center'>
                    <li onClick={allHandler}>
                        All
                    </li>
                    <li onClick={createHandler}>
                        Create
                    </li>
                </ul>
            </nav>

            {
                create && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="border p-2 w-full" />
                        <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" required className="border p-2 w-full" />
                        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required className="border p-2 w-full" />
                        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required className="border p-2 w-full" />
                        <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="Color" required className="border p-2 w-full" />
                        <input type="text" name="genderType" value={formData.genderType} onChange={handleChange} placeholder="Gender Type" required className="border p-2 w-full" />
                        <input type="number" name="averageRating" value={formData.averageRating} onChange={handleChange} placeholder="Average Rating" required className="border p-2 w-full" />
                        <input type="number" name="totalRatings" value={formData.totalRatings} onChange={handleChange} placeholder="Total Ratings" required className="border p-2 w-full" />
                        <input type="url" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" required className="border p-2 w-full" />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">Create Item</button>
                    </form>
                )
            }
        </div>
    );
}

export default Clothings;
