import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../css/Admin.css'
const Dashboard = () => {
          const logout=async ()=>{
            sessionStorage.clear();
            window.location.reload()
           }
  return (
    <div>
    {/* ======= Header ======= */}
    <header
  id="header"
  className="header fixed-top d-flex align-items-center"
  style={{ backgroundColor: "#f8f9fa", padding: "10px 20px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
>
  <div
    className="d-flex align-items-center justify-content-between"
    style={{ flex: "1" }}
  >
    <a
      href="index.html"
      className="logo d-flex align-items-center"
      style={{ textDecoration: "none", color: "#333", fontWeight: "bold", fontSize: "18px" }}
    >
      <span className="d-none d-lg-block">Admin</span>
    </a>
    <i className="bi bi-list toggle-sidebar-btn" style={{ fontSize: "24px", cursor: "pointer" }} />
  </div>

  <div className="search-bar" style={{ flex: "2", marginLeft: "20px" }}>
    <form
      className="search-form d-flex align-items-center"
      method="POST"
      action="/"
      style={{ width: "100%" }}
    >
      <input
        type="text"
        name="query"
        placeholder="Search"
        title="Enter search keyword"
        style={{
          flex: "1",
          padding: "5px 10px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          outline: "none",
          marginRight: "10px",
        }}
      />
      <button
        type="submit"
        title="Search"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#333",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        <i className="bi bi-search" />
      </button>
    </form>
  </div>

  <nav className="header-nav ms-auto" style={{ display: "flex", alignItems: "center" }}>
    <ul className="d-flex align-items-center" style={{ listStyle: "none", margin: "0", padding: "0" }}>
      <li className="nav-item d-block d-lg-none">
        <a className="nav-link nav-icon search-bar-toggle" href="/" style={{ color: "#333" }}>
          <i className="bi bi-search" style={{ fontSize: "18px" }} />
        </a>
      </li>

      <li className="nav-item dropdown" style={{ margin: "0 15px" }}>
        <a
          className="nav-link nav-icon"
          href="/"
          data-bs-toggle="dropdown"
          style={{ position: "relative", color: "#333" }}
        >
          <i className="bi bi-bell" style={{ fontSize: "18px" }} />
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "50%",
              padding: "3px 6px",
              fontSize: "10px",
            }}
          >
            4
          </span>
        </a>
      </li>

      <li className="nav-item dropdown" style={{ margin: "0 15px" }}>
        <a
          className="nav-link nav-icon"
          href="/"
          data-bs-toggle="dropdown"
          style={{ position: "relative", color: "#333" }}
        >
          <i className="bi bi-chat-left-text" style={{ fontSize: "18px" }} />
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "#28a745",
              color: "#fff",
              borderRadius: "50%",
              padding: "3px 6px",
              fontSize: "10px",
            }}
          >
            3
          </span>
        </a>
      </li>

      <li className="nav-item dropdown pe-3" style={{ margin: "0 15px" }}>
        <a
          className="nav-link nav-profile d-flex align-items-center pe-0"
          href="/"
          data-bs-toggle="dropdown"
          style={{ color: "#333", textDecoration: "none" }}
        >
          <img
            alt="Profile"
            className="rounded-circle"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <span className="d-none d-md-block dropdown-toggle ps-2" style={{ fontWeight: "500" }}>
            K. Anderson
          </span>
        </a>
      </li>
    </ul>
  </nav>
</header>


<aside 
  id="sidebar" 
  className="sidebar"
  style={{
    width: '250px',
    height: '100vh',
    backgroundColor: '#343a40',
    color: '#fff',
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    overflowY: 'auto',
    boxShadow: '2px 0px 10px rgba(0,0,0,0.1)'
  }}
>
  <ul 
    className="sidebar-nav" 
    id="sidebar-nav"
    style={{
      listStyleType: 'none',
      padding: '0',
      margin: '0'
    }}
  >
    <li 
      className="nav-item"
      style={{
        marginBottom: '15px'
      }}
    >
      <a 
        className="nav-link" 
        href="index.html"
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#fff',
          textDecoration: 'none',
          fontSize: '1.1rem',
          marginBottom: '10px',
          transition: 'color 0.3s'
        }}
      >
        <i 
          className="bi bi-grid" 
          style={{
            marginRight: '10px',
            fontSize: '1.3rem'
          }}
        />
        <span>Dashboard</span>
      </a>
    </li>

    <div 
      className="dropdown"
      style={{ marginBottom: '15px' }}
    >
      <button 
        className="btn btn-secondary dropdown-toggle" 
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        style={{
          width: '100%',
          backgroundColor: '#495057',
          border: 'none',
          color: '#fff',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '10px'
        }}
      >
        All Listed Properties
      </button>
      <ul 
        className="dropdown-menu"
        style={{
          backgroundColor: '#495057',
          borderRadius: '5px',
          // boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
          padding: '10px'
        }}
      >
        <li>
        <Link 
  to="/admin/lands" 
  className="dropdown-item"
  style={{
    color: '#fff',
    textDecoration: 'none',
    padding: '5px 0',
    display: 'block',
    transition: 'color 0.3s'
  }}
  onMouseEnter={(e) => e.target.style.color = 'red'}
  onMouseLeave={(e) => e.target.style.color = '#fff'}
>
  Lands
</Link>


          <Link 
            to="/admin/home" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
  onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
            
           Homes
          </Link>
          <Link 
            to="/admin/farmHouse" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
  onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
           FarmHouses
          </Link>
          <Link 
            to="/admin/villa" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
  onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
           Villas
          </Link>
          <Link 
            to="/admin/building" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
  onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
           Buildings
          </Link>
          <Link 
            to="/admin/shops" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              // transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
  onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
           Shops
          </Link>
          
        </li>
      </ul>
    </div>

    <div 
      className="dropdown"
      style={{ marginBottom: '15px' }}
    >
      <button 
        className="btn btn-secondary dropdown-toggle" 
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        style={{
          width: '100%',
          backgroundColor: '#495057',
          border: 'none',
          color: '#fff',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '10px'
        }}
      >
        Add New Properties
      </button>
      <ul 
        className="dropdown-menu"
        style={{
          backgroundColor: '#495057',
          borderRadius: '5px',
          boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
          padding: '10px'
        }}
      >
          <Link 
            to="/admin/addHouse" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
            onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
            
           Homes
          </Link>
          <Link 
            to="/admin/addVilla" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
            onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
            
           Villas
          </Link>
  
          <Link 
            to="/addProduct" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
            onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
          Lands
          </Link>

  
          <Link 
            to="/addProduct" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
            onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
          FarmHouses
          </Link>
      
   
          <Link 
            to="/addProduct" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
            onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
          Buildings
          </Link>
      
    
          <Link 
            to="/addProduct" 
            className="dropdown-item"
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '5px 0',
              display: 'block',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'red'}
            onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
          Shops
          </Link>
      
        <li 
          className="dropdown-item"
          onClick={logout}
          style={{
            color: '#fff',
            cursor: 'pointer',
            padding: '5px 0',
            display: 'block',
            transition: 'color 0.3s'
        
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  </ul>
</aside>


      <button className="btn-getstarted" href="index.html/about" onClick={logout}>
      Logout
    </button>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            {/* Left side columns */}
            <div style={{ width: '66.66%' }}>
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    
  </div>
            </div>

            {/* End Left side columns */}
            {/* Right side columns */}
            {/* <div className="col-lg-4">
           
              <div 
  className="card" 
  style={{
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    position: 'relative'
  }}
>
  <div 
    className="filter" 
    style={{ position: 'absolute', top: '15px', right: '15px' }}
  >
    <a className="icon" href="/" data-bs-toggle="dropdown" style={{ color: '#6c757d', fontSize: '1.2rem' }}>
      <i className="bi bi-three-dots" />
    </a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="/">Today</a></li>
      <li><a className="dropdown-item" href="/">This Month</a></li>
      <li><a className="dropdown-item" href="/">This Year</a></li>
    </ul>
  </div>

  <div className="card-body" style={{ padding: '20px' }}>
    <h5 
      className="card-title" 
      style={{ fontWeight: '600', marginBottom: '20px', color: '#343a40' }}
    >
      Recent Activity <span style={{ color: '#6c757d' }}>| Today</span>
    </h5>
    <div 
      className="activity" 
      style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '10px' }}
    >
      <div className="activity-item d-flex" style={{ alignItems: 'center', marginBottom: '15px' }}>
        <div className="activite-label" style={{ minWidth: '70px', color: '#6c757d', fontWeight: '500' }}>32 min</div>
        <i className="bi bi-circle-fill activity-badge text-success align-self-start" style={{ marginRight: '10px' }} />
        <div className="activity-content" style={{ color: '#495057' }}>
          Quia quae rerum <a href="/" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>

      <div className="activity-item d-flex" style={{ alignItems: 'center', marginBottom: '15px' }}>
        <div className="activite-label" style={{ minWidth: '70px', color: '#6c757d', fontWeight: '500' }}>56 min</div>
        <i className="bi bi-circle-fill activity-badge text-danger align-self-start" style={{ marginRight: '10px' }} />
        <div className="activity-content" style={{ color: '#495057' }}>
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>

      <div className="activity-item d-flex" style={{ alignItems: 'center', marginBottom: '15px' }}>
        <div className="activite-label" style={{ minWidth: '70px', color: '#6c757d', fontWeight: '500' }}>2 hrs</div>
        <i className="bi bi-circle-fill activity-badge text-primary align-self-start" style={{ marginRight: '10px' }} />
        <div className="activity-content" style={{ color: '#495057' }}>
          Voluptates corrupti molestias voluptatem
        </div>
      </div>

      <div className="activity-item d-flex" style={{ alignItems: 'center', marginBottom: '15px' }}>
        <div className="activite-label" style={{ minWidth: '70px', color: '#6c757d', fontWeight: '500' }}>1 day</div>
        <i className="bi bi-circle-fill activity-badge text-info align-self-start" style={{ marginRight: '10px' }} />
        <div className="activity-content" style={{ color: '#495057' }}>
          Tempore autem saepe <a href="/" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>
    </div>
  </div>
              </div>

             
              <div 
  className="card" 
  style={{
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    position: 'relative'
  }}
>
  <div 
    className="filter" 
    style={{ position: 'absolute', top: '15px', right: '15px' }}
  >
    <a className="icon" href="/" data-bs-toggle="dropdown" style={{ color: '#6c757d', fontSize: '1.2rem' }}>
      <i className="bi bi-three-dots" />
    </a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="/">Today</a></li>
      <li><a className="dropdown-item" href="/">This Month</a></li>
      <li><a className="dropdown-item" href="/">This Year</a></li>
    </ul>
  </div>

  <div 
    className="card-body pb-0 text-center" 
    style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <h5 
      className="card-title" 
      style={{ fontWeight: '600', marginBottom: '15px', color: '#343a40' }}
    >
      Budget Report <span style={{ color: '#6c757d' }}>| This Month</span>
    </h5>
    
    <a href="/" style={{ marginBottom: '10px' }}>
    </a>

    <div 
      id="budgetChart" 
      className="echart"
      style={{
        minHeight: '50px',
        width: '100%',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px'
      }}
    />
  </div>
             </div>



             
              <div 
  className="card"
  style={{
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    position: 'relative'
  }}
>
  <div 
    className="filter"
    style={{ position: 'absolute', top: '15px', right: '15px' }}
  >
    <a 
      className="icon"
      href="/"
      data-bs-toggle="dropdown"
      style={{ color: '#6c757d', fontSize: '1.2rem' }}
    >
      <i className="bi bi-three-dots" />
    </a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="/">Today</a></li>
      <li><a className="dropdown-item" href="/">This Month</a></li>
      <li><a className="dropdown-item" href="/">This Year</a></li>
    </ul>
  </div>

  <div 
    className="card-body pb-0"
    style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <h5 
      className="card-title"
      style={{ fontWeight: '600', marginBottom: '15px', color: '#343a40' }}
    >
      Website Traffic <span style={{ color: '#6c757d' }}>| Today</span>
    </h5>
    
    <a href="/" style={{ marginBottom: '10px' }}>
    </a>

    <div 
      id="trafficChart"
      className="echart"
      style={{
        minHeight: '50px',
        width: '100%',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px'
      }}
    />
  </div>
</div>

           
              <div 
  className="card"
  style={{
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    position: 'relative',
    padding: '20px'
  }}
>
  <div 
    className="filter"
    style={{
      position: 'absolute',
      top: '15px',
      right: '15px'
    }}
  >
    <a 
      className="icon"
      href="/"
      data-bs-toggle="dropdown"
      style={{
        color: '#6c757d',
        fontSize: '1.2rem'
      }}
    >
      <i className="bi bi-three-dots" />
    </a>
    <ul 
      className="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
      style={{
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px'
      }}
    >
      <li className="dropdown-header text-start" style={{ padding: '10px' }}>
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="/">Today</a></li>
      <li><a className="dropdown-item" href="/">This Month</a></li>
      <li><a className="dropdown-item" href="/">This Year</a></li>
    </ul>
  </div>

  <div 
    className="card-body pb-0"
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}
  >
    <h5 
      className="card-title"
      style={{
        fontWeight: '600',
        marginBottom: '15px',
        color: '#343a40'
      }}
    >
      News & Updates <span style={{ color: '#6c757d' }}>| Today</span>
    </h5>

    <div className="news">
      {[
        {
          title: "Nihil blanditiis at in nihil autem",
          description: "Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum..."
        },
        {
          title: "Quidem autem et impedit",
          description: "Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande..."
        },
        {
          title: "Id quia et et ut maxime similique occaecati ut",
          description: "Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam..."
        },
        {
          title: "Laborum corporis quo dara net para",
          description: "Qui enim quia optio. Eligendi aut asperiores enim repellendus vel rerum cuder..."
        },
        {
          title: "Et dolores corrupti quae illo quod dolor",
          description: "Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius..."
        }
      ].map((post, index) => (
        <div 
          key={index}
          className="post-item clearfix"
          style={{
            marginBottom: '10px',
            padding: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
          }}
        >
          <h4 style={{ marginBottom: '5px', fontWeight: '500' }}>
            <a href="/" style={{ color: '#007bff', textDecoration: 'none' }}>
              {post.title}
            </a>
          </h4>
          <p style={{ marginBottom: '0', color: '#6c757d' }}>{post.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

            </div> */}
          </div>
        </section>
      </main>
      {/* End /main */}
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>NiceAdmin</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </footer>
      </div>
  )
}

export default Dashboard;


