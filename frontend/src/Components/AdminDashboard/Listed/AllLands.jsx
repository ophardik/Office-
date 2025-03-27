import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from 'react-icons/fa';

const AllLands = () => {
    const [property, setProperty] = useState([]);

    useEffect(() => {
      allProperty();
    }, []);
  
    const allProperty = async () => {
      try {
        const response = await axios.get('/api/allLand');
        console.log("Fetched Properties:", response.data);
        setProperty(response.data.data);
      } catch (error) {
        toast.error('Cannot fetch all homes');
      }
    };
  
    const deleteProperty = async (id) => {
      try {
          console.log("Deleting property with ID:", id);
          await axios.delete(`/api/deleteLand/${id}`);
        setProperty(property.filter((item) => item._id !== id));
        toast.success('Property deleted successfully');
      } catch (error) {
        toast.error('Error deleting property');
      }
    };
    return (
     <div className="container mt-4">
            <h2 className="text-center mb-4">All Properties</h2>
            <div className="row">
            {Array.isArray(property) && property.length > 0 ? (
    property.map((item) => (
        <div key={item._id} className="col-md-4 mb-4">
            <div className="card">
                <img
                    src={item.image || 'https://via.placeholder.com/150'}
                    className="card-img-top"
                    alt="Property"
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><strong>Price:</strong> ${item.price}</p>
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteProperty(item._id)}
                    >
                        <FaTrashAlt /> Delete
                    </button>
                </div>
            </div>
        </div>
    ))
) : (
    <p>No properties available.</p>
)}

      
            </div>
            <ToastContainer />
          </div>
    );
}

export default AllLands
