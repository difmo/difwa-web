import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
<<<<<<< HEAD
import "./App.css";
// import Phone from "./components/Phone";
// import Tablet from "./components/Tablet";
import PaymentPage from "./components/PaymentPage";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });
=======

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });
//fghjm,
import PaymentPage from "./components/PaymentPage";
import Layout from "./components/Layout/Layout";
import PrivacyPolicy from "./components/PrivacyPolicy";
>>>>>>> main

const App = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/payment-page" element={<PaymentPage />} />
=======
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/payment-page" element={<PaymentPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        </Route>
>>>>>>> main
      </Routes>
    </Router>
  );
};

export default App;

