import React, { useEffect, useState } from 'react'
import Deal from '../img/icon-deal.png'
import Property1 from '../img/property-1.jpg'
import Property2 from '../img/property-2.jpg'
import Property3 from '../img/property-3.jpg'
import Property4 from '../img/property-4.jpg'
import Property5 from '../img/property-6.jpg'
import Property6 from '../img/property-6.jpg'
import Header from '../img/header.jpg'
import { Link } from 'react-router-dom'
import Loading from '../img/icon-1.png'

const Contact = () => {
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
        return () => clearTimeout(timer); // Cleanup
      }, [setLoading]);
      
    return (
        <div className="container-xxl bg-white p-0">
            {/* Spinner Start */}
           {loading && (
            <div
             id="spinner"
             className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
            >
             <div
               className="spinner-border position-relative text-primary"
               style={{ width: "6rem", height: "6rem" }}
               role="status"
             />
             <img
               className="position-absolute top-50 start-50 translate-middle"
               src={Loading}
               alt="Icon"
             />
            </div>
           )}
            {/* Spinner End */}
            {/* Navbar Start */}
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
            {/* Navbar End */}
            {/* Header Start */}
            <div className="container-fluid header bg-white p-0">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">Contact Us</h1>
                        <nav aria-label="breadcrumb animated fadeIn">
                            <ol className="breadcrumb text-uppercase">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li
                                    className="breadcrumb-item text-body active"
                                    aria-current="page"
                                >
                                    Contact
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <img className="img-fluid" src={Header} alt="" />
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Search Start */}
            <div
                className="container-fluid bg-primary mb-5 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ padding: 35 }}
            >
                <div className="container">
                    <div className="row g-2">
                        <div className="col-md-10">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control border-0 py-3"
                                        placeholder="Search Keyword"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected="">Property Type</option>
                                        <option value={1}>Property Type 1</option>
                                        <option value={2}>Property Type 2</option>
                                        <option value={3}>Property Type 3</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-select border-0 py-3">
                                        <option selected="">Location</option>
                                        <option value={1}>Location 1</option>
                                        <option value={2}>Location 2</option>
                                        <option value={3}>Location 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Search End */}
            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <h1 className="mb-3">Contact Us</h1>
                        <p>
                            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
                            dolor duo.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-map-marker-alt text-primary" />
                                            </div>
                                            <span>123 Street, New York, USA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-envelope-open text-primary" />
                                            </div>
                                            <span>info@example.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="bg-light rounded p-3">
                                        <div
                                            className="d-flex align-items-center bg-white rounded p-3"
                                            style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                                        >
                                            <div className="icon me-3" style={{ width: 45, height: 45 }}>
                                                <i className="fa fa-phone-alt text-primary" />
                                            </div>
                                            <span>+012 345 6789</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <iframe
                                className="position-relative rounded w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder={0}
                                style={{ minHeight: 400, border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex={0}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.5s">
                                <p className="mb-4">
                                    The contact form is currently inactive. Get a functional and
                                    working contact form with Ajax &amp; PHP in a few minutes. Just
                                    copy and paste the files, add a little code and you're done.{" "}
                                    <a href="https://htmlcodex.com/contact-form">Download Now</a>.
                                </p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: 150 }}
                                                    defaultValue={""}
                                                />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
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

export default Contact
