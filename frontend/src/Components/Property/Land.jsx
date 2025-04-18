import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../css/DetailProperty.css'
import { Link } from "react-router-dom";
import Deal from '../img/icon-deal.png'
import Loading from '../img/icon-1.png'
import Property1 from '../img/property-1.jpg'
import Property2 from '../img/property-2.jpg'
import Property3 from '../img/property-3.jpg'
import Property4 from '../img/property-4.jpg'
import Property5 from '../img/property-6.jpg'
import Property6 from '../img/property-6.jpg'
import { useLocation } from "react-router-dom";
const Land = () => {
     const location = useLocation();
     const BASE_URL=process.env.REACT_APP_BACKEND_URL;
          const category = location.state?.category;
          console.log("category",category)
          const [property, setProperty] = useState([]);
          const [loading, setLoading] = useState(true);
         useEffect(() => {
              // Scroll to the top when the component mounts
              window.scrollTo(0, 0);
            }, []);
        
          useEffect(() => {
            const fetchProperty = async () => {
              try {
                setLoading(true);
                const apiUrl= '/api/allLand'
                const response = await fetch(apiUrl);
                const result = await response.json();
                console.log(result);
                setProperty(result.data);
              } catch (error) {
                console.error("Error fetching properties:", error);
                toast.error("Error fetching properties!");
              } finally {
                setLoading(false);
              }
            };
        
            fetchProperty();
          }, [category]);
  return (
     <div className="detail-property-container">
          
             <div className="container-fluid nav-bar bg-transparent">
                 <nav className="navbar navbar-expand-lg bg-white navbar-light py-2 px-4">
          {/* Brand & Logo */}
          <a href="/" className="navbar-brand d-flex align-items-center">
            <div className="icon p-2 me-2">
              <img src={Deal} alt="Icon" className="img-fluid" style={{ width: 30, height: 30 }} />
            </div>
            <h1 className="m-0 text-primary brand-name">Anamikka Properties</h1>
          </a>
        
          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        
          {/* Navbar Menu Items */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto text-center w-100">
              <li className="nav-item">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
        
              {/* Property Dropdown */}
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                <ul className="dropdown-menu w-100">
                  <li><Link to="/property" className="dropdown-item">Property List</Link></li>
                  <li><Link to="/propertyType" className="dropdown-item">Property Type</Link></li>
                  <li><Link to="/propertyAgent" className="dropdown-item">Property Agent</Link></li>
                </ul>
              </li>
        
              {/* Pages Dropdown */}
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu w-100">
                  <li><Link to="/testimonial" className="dropdown-item">Testimonial</Link></li>
                  <li><Link to="/404" className="dropdown-item">404 Error</Link></li>
                </ul>
              </li>
        
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
        
            {/* Add Property Button */}
            <div className="text-center mt-2 mt-lg-0">
              <a href="#" className="btn btn-primary px-3">Add Property</a>
            </div>
          </div>
        </nav>
        
            </div>
            {/* <h2 className="text-center my-4">
      Land Properties
    </h2> */}
    
    {loading ? (
      <div
        id="spinner"
        className="d-flex justify-content-center align-items-center vh-100"
      >
        <div className="spinner-border text-primary" style={{ width: "4rem", height: "4rem" }} role="status" />
        <img
          src={Loading}
          alt="Loading Icon"
          className="position-absolute top-50 start-50 translate-middle"
          style={{ width: "3rem", height: "3rem" }}
        />
      </div>
    ) : (
      <div className="row g-4">
        {property.length > 0 ? (
          property.map((item, itemIndex) => (
            <div key={`${item.id}-${itemIndex}`} className="col-md-4 col-sm-6">
              <div className="card shadow-sm">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="swiper-container"
                >
                  <SwiperSlide key={`${item._id}`}>
                    <img src={item.image} className="card-img-top" alt="Main" />
                  </SwiperSlide>
                  {item.images.map((img, index) => (
                    <SwiperSlide key={`${item.id}-${img}-${index}`}>
                      <img src={img} className="card-img-top" alt={`Slide ${index}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
    
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text"><strong>Square Yards:</strong> {item.squareYards} sq. yards</p>
                  <p className="card-text"><strong>Size:</strong> {item.squareYards}</p>
                  <p className="card-text"><strong>Direction:</strong> {item.direction}</p>
                  <p className="card-text"><strong>Road Size:</strong> {item.roadSize}</p>
                  <p className="card-text"><strong>Type:</strong> {item.type}</p>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text text-success"><strong>Price:</strong> ₹{item.price.toLocaleString()}</p>
                  <p className="card-text">
                    <strong>Location:</strong>{" "}
                    <a href={item.location} target="_blank" rel="noopener noreferrer">
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No properties found.</p>
        )}
      </div>
    )}
    
          {/* Footer Start */}
              <div
                className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="container py-5">
                  <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                      <h5 className="text-white mb-4">Get In Touch</h5>
                      <p className="mb-2">
                        <i className="fa fa-map-marker-alt me-3" />
                        123 Street, New York, USA
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-phone-alt me-3" />
                        +012 345 67890
                      </p>
                      <p className="mb-2">
                        <i className="fa fa-envelope me-3" />
                        info@example.com
                      </p>
                      <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href="">
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-outline-light btn-social" href="">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-outline-light btn-social" href="">
                          <i className="fab fa-youtube" />
                        </a>
                        <a className="btn btn-outline-light btn-social" href="">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h5 className="text-white mb-4">Quick Links</h5>
                      <a className="btn btn-link text-white-50" href="">
                        About Us
                      </a>
                      <a className="btn btn-link text-white-50" href="">
                        Contact Us
                      </a>
                      <a className="btn btn-link text-white-50" href="">
                        Our Services
                      </a>
                      <a className="btn btn-link text-white-50" href="">
                        Privacy Policy
                      </a>
                      <a className="btn btn-link text-white-50" href="">
                        Terms &amp; Condition
                      </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h5 className="text-white mb-4">Photo Gallery</h5>
                      <div className="row g-2 pt-2">
                        <div className="col-4">
                          <img
                            className="img-fluid rounded bg-light p-1"
                            src={Property1}
                            alt=""
                          />
                        </div>
                        <div className="col-4">
                          <img
                            className="img-fluid rounded bg-light p-1"
                            src={Property2}
                            alt=""
                          />
                        </div>
                        <div className="col-4">
                          <img
                            className="img-fluid rounded bg-light p-1"
                            src={Property3}
                            alt=""
                          />
                        </div>
                        <div className="col-4">
                          <img
                            className="img-fluid rounded bg-light p-1"
                            src={Property4}
                            alt=""
                          />
                        </div>
                        <div className="col-4">
                          <img
                            className="img-fluid rounded bg-light p-1"
                            src={Property5}
                            alt=""
                          />
                        </div>
                        <div className="col-4">
                          <img
                            className="img-fluid rounded bg-light p-1"
                            src={Property6}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <h5 className="text-white mb-4">Newsletter</h5>
                      <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                      <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                        <input
                          className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                          type="text"
                          placeholder="Your email"
                        />
                        <button
                          type="button"
                          className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                        >
                          SignUp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="copyright">
                    <div className="row">
                      <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        ©{" "}
                        <a className="border-bottom" href="#">
                          Your Site Name
                        </a>
                        , All Right Reserved.
                        {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                        Designed By{" "}
                        <a className="border-bottom" href="https://htmlcodex.com">
                          HTML Codex
                        </a>
                      </div>
                      <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                          <a href="">Home</a>
                          <a href="">Cookies</a>
                          <a href="">Help</a>
                          <a href="">FQAs</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer End */}
              {/* Back to Top */}
              <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
              </a>
        </div>
  )
}

export default Land
