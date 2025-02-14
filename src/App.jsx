import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
<<<<<<< HEAD
<<<<<<< HEAD
import Phone from "./components/Phone";
=======
import Herosection from "./components/HeroSection";
>>>>>>> abhilasha

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
=======
import PaymentPage from "./components/PaymentPage";
>>>>>>> cf89c4cba04d49de5e907a924b4d7e70bf64f436

const App = () => {
  return (
<<<<<<< HEAD
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
<<<<<<< HEAD
      <Phone />
=======
      <Herosection />
>>>>>>> abhilasha
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
=======
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-page" element={<PaymentPage/>}/>
      </Routes>
    </Router>
>>>>>>> cf89c4cba04d49de5e907a924b4d7e70bf64f436
  );
};

export default App;
