import React from "react";
import "../Pages/Checkoutpage.css";

const Checkoutpage = () => {
  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <h1>ASOS</h1>
        <h2>CHECKOUT</h2>
      </header>

      <div className="checkout-content">
        <div className="left-section">
          <div className="shipping-country">
            <h3>SHIPPING COUNTRY:</h3>
            <button className="change-btn">Change</button>
          </div>

          <div className="promo-section">
            <h3>PROMO/STUDENT CODE OR VOUCHERS</h3>
          </div>

          <div className="email-section">
            <h3>EMAIL ADDRESS</h3>
            <p>jd@gmail.com</p>
          </div>

          <div className="delivery-section">
            <h3>DELIVERY ADDRESS</h3>
            <div className="address-box">
              <p>John Doe</p>
              <p>102 Lous Rd</p>
              <p>Ebensburg, Pennsylvania</p>
              <p>15931-4900, United States</p>
              <p>1112223334</p>
              <button className="change-btn">Change</button>
            </div>
          </div>

          <div className="premium-delivery">
            <h3>PREMIER DELIVERY USA</h3>
            <p>
              Enjoy unlimited Next-Day Delivery on all orders of $50+ and Express
              Shipping on all others for a whole year! T&Cs apply.
            </p>
          </div>
        </div>

        <div className="right-section">
          <h3>1 ITEM</h3>
          <div className="item-summary">
            <img
              src="https://via.placeholder.com/50"
              alt="ASOS DESIGN satin maxi dress"
            />
            <div>
              <p>ASOS DESIGN satin maxi dress</p>
              <p>Mustard, US 4</p>
              <p>Qty: 1</p>
              <p>$98.00</p>
            </div>
          </div>
          <div className="pricing-summary">
            <p>Subtotal: $98.00</p>
            <p>Shipping: Free</p>
            <p>Sales tax: $0.00</p>
            <h3>TOTAL TO PAY: $98.00</h3>
          </div>
          <div className="fast-delivery">
            <p>NEED IT FAST? GET IT IN 2 DAYS FOR ONLY $10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;
