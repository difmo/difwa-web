import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });
//fghjm,
import PaymentPage from "./components/PaymentPage";
// import PaymentPage from "./components/PaymentResult";
import Layout from "./components/Layout/Layout";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/payment-page" element={<PaymentPage />} />
{/*            <Route path="/payment-result" element={<PaymentResult />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
