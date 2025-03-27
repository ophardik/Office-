import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import "./Components/css/bootstrap.min.css";
import "./Components/css/style.css";
import "./Components/scss/bootstrap.scss";
import Property from "./Components/Pages/Property";
import PropertyType from "./Components/Pages/PropertyType";
import PropertyAgent from "./Components/Pages/PropertyAgent";
import Testimonal from "./Components/Pages/Testimonal";
import Error from "./Components/Pages/Error";
import Contact from "./Components/Pages/Contact";
import DetailProperty from "./Components/Property/DetaulProperty";
import AddHouses from "./Components/AdminDashboard/AddHouses";
import ShopDetail from "./Components/Property/ShopDetail";
import FarmHouse from "./Components/Property/FarmHouse";
import Villa from "./Components/Property/Villa";
import Land from "./Components/Property/Land";
import Building from "./Components/Property/Building";
import Dashboard from "./Components/AdminDashboard/DashBoard";
import AllHomes from "./Components/AdminDashboard/Listed/AllHomes";
import AllBuildings from "./Components/AdminDashboard/Listed/AllBuildings";
import AllLands from "./Components/AdminDashboard/Listed/AllLands";
import AllFarmHouse from "./Components/AdminDashboard/Listed/FarmHouses";
import AllVillas from "./Components/AdminDashboard/Listed/AllVillas";
import AllShops from "./Components/AdminDashboard/Listed/AllShops";
import AddVilla from "./Components/AdminDashboard/AddVilla";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("Route changed, reinitializing scripts...");

    setTimeout(() => {
      // ✅ Reinitialize WOW.js
      if (window.WOW) {
        new window.WOW().init();
      }

      // ✅ Reinitialize Owl Carousel
      if (window.$) {
        window.$(".header-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          items: 1,
          dots: true,
          loop: true,
          nav: true,
          navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>',
          ],
        });

        window.$(".testimonial-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          margin: 24,
          dots: false,
          loop: true,
          nav: true,
          navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>',
          ],
          responsive: {
            0: { items: 1 },
            992: { items: 2 },
          },
        });
      }
    }, 500); // Small delay for smooth transition
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/property" element={<Property />} />
      <Route path="/propertyType" element={<PropertyType />} />
      <Route path="/propertyAgent" element={<PropertyAgent />} />
      <Route path="/testimonial" element={<Testimonal />} />
      <Route path="/404" element={<Error />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/category/homes" element={<DetailProperty/>} />
      <Route path="/category/shop" element={<ShopDetail/>} />
      <Route path="/category/farmhouse" element={<FarmHouse/>} />
      <Route path="/category/villa" element={<Villa/>} />
      <Route path="/category/land" element={<Land/>} />
      <Route path="/category/building" element={<Building/>} />
      <Route path="/admin/addHouse" element={<AddHouses/>} />
      <Route path="/admin/addVilla" element={<AddVilla/>} />
      <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/admin/home" element={<AllHomes/>} />
      <Route path="/admin/building" element={<AllBuildings/>} />
      <Route path="/admin/lands" element={<AllLands/>} />
      <Route path="/admin/farmHouse" element={<AllFarmHouse/>} />
      <Route path="/admin/villa" element={<AllVillas/>} />
      <Route path="/admin/shops" element={<AllShops/>} />
    </Routes>
  );
}

export default App;
