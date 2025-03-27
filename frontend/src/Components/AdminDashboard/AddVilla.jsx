import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVilla = () => {
    const [name, setName] = useState('');
    const [squareYards, setSquareYards] = useState('');
    const [direction, setDirection] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [bhk, setBhk] = useState('');
    const [amenities, setAmenities] = useState('');
    const [roadSize, setRoadSize] = useState('');
    const [size, setSize] = useState('');
    const [category, setCategory] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [additionalImages, setAdditionalImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !squareYards || !direction || !location || !price || !profileImage || !additionalImages.length || !description || !type || !bhk || !amenities || !roadSize || !size || !category) {
            toast.error('Please fill all the fields');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('squareYards', squareYards);
        formData.append('direction', direction);
        formData.append('location', location);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('type', type);
        formData.append('bhk', bhk);
        formData.append('amenities', amenities);
        formData.append('roadSize', roadSize);
        formData.append('size', size);
        formData.append('category', category);
        formData.append('profileImage', profileImage);

        additionalImages.forEach((img) => formData.append('images', img));

        try {
            await axios.post('/api6/addVilla', formData);
            toast.success('Villa added successfully!');

            // Resetting form fields
            setName('');
            setSquareYards('');
            setDirection('');
            setLocation('');
            setPrice('');
            setDescription('');
            setType('');
            setBhk('');
            setAmenities('');
            setRoadSize('');
            setSize('');
            setCategory('');
            setProfileImage(null);
            setAdditionalImages([]);
        } catch (error) {
            toast.error('Error adding home. Please try again.');
            console.error('Error:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded">
                <h2 className="text-center mb-4">Add Home</h2>
                <input className="form-control mb-3" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="form-control mb-3" type="number" placeholder="Square Yards" value={squareYards} onChange={(e) => setSquareYards(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Direction" value={direction} onChange={(e) => setDirection(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                <input className="form-control mb-3" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
                <input className="form-control mb-3" type="number" placeholder="BHK" value={bhk} onChange={(e) => setBhk(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Amenities" value={amenities} onChange={(e) => setAmenities(e.target.value)} />
                <input className="form-control mb-3" type="number" placeholder="Road Size" value={roadSize} onChange={(e) => setRoadSize(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Size" value={size} onChange={(e) => setSize(e.target.value)} />
                <input className="form-control mb-3" type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input className="form-control mb-3" type="file" onChange={(e) => setProfileImage(e.target.files[0])} accept="image/*" />
                <input className="form-control mb-3" type="file" multiple onChange={(e) => setAdditionalImages([...e.target.files])} accept="image/*" />
                <button className="btn btn-success w-100 mt-2" type="submit">Add Villa</button>
            </form>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
        </>
    );
};

export default AddVilla;
