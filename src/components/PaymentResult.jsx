// src/PaymentResult.js
import React from "react";
import { useLocation } from "react-router-dom";

const PaymentResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get("status");
  const paymentId = queryParams.get("payment_id");

  return (
    <div className="payment-result">
      {status === "success" ? (
        <h2>✅ Payment Successful!</h2>
      ) : (
        <h2>❌ Payment Failed</h2>
      )}

      {paymentId && <p>Payment ID: {paymentId}</p>}

      <a href="/">Go back to Home</a>

      {/* Styling */}
      <style jsx>{`
        .payment-result {
          text-align: center;
          padding: 50px;
        }
        h2 {
          color: ${status === "success" ? "green" : "red"};
        }
        a {
          color: #528FF0;
        }
      `}</style>
    </div>
  );
};

export default PaymentResult;
