import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const AllVillas = () => {
    const [property, setProperty] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        allProperty();
    }, []);

    const allProperty = async () => {
        try {
            const response = await axios.get('/api6/allVilla');
            console.log("Fetched Properties:", response.data);
            setProperty(response.data);
        } catch (error) {
            toast.error('Cannot fetch properties');
        } finally {
            setLoading(false); // Ensure loading is stopped after request
        }
    };

    const deleteProperty = async (id) => {
        try {
            console.log("Deleting property with ID:", id);
            await axios.delete(`/api6/deleteVilla/${id}`);
            setProperty(prev => prev.filter(item => item._id !== id));
            toast.success('Property deleted successfully');
        } catch (error) {
            toast.error('Error deleting property');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">All Properties</h2>

            {loading ? (
                <div id="spinner" className="d-flex justify-content-center align-items-center vh-100">
                    <div className="spinner-border text-primary" style={{ width: "4rem", height: "4rem" }} role="status"></div>
                </div>
            ) : (
                <div className="row g-4">
                    {property.length > 0 ? (
                        property.map((item, index) => (
                            <div key={item._id || index} className="col-md-4 mb-4">
                                <div className="card shadow-sm">
                                    {/* Swiper Image Slider */}
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        spaceBetween={10}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        className="swiper-container"
                                    >
                                        {/* Main Image */}
                                        {item.image && (
                                            <SwiperSlide key={`${item._id}-main`}>
                                                <img
                                                    src={`https:///${item.image}`} 
                                                    className="card-img-top"
                                                    alt="Main"
                                                    style={{ objectFit: "cover", maxWidth: "100%", height: "200px" }}
                                                />
                                            </SwiperSlide>
                                        )}

                                        {/* Additional Images */}
                                        {item.images && item.images.map((img, imgIndex) => (
                                            <SwiperSlide key={`${item._id}-img-${imgIndex}`}>
                                                <img
                                                    src={img}
                                                    className="card-img-top"
                                                    alt={`Slide ${imgIndex}`}
                                                    style={{ objectFit: "cover", maxWidth: "100%", height: "200px" }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

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
                        <p className="text-center">No properties found.</p>
                    )}
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default AllVillas;
