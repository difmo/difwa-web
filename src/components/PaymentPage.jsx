import React, { useEffect, useState } from "react";
import { db, doc, getDoc, updateDoc } from "../config/config";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 const navigate = useNavigate();
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userIdFromParams = urlParams.get("userId");
      const amountFromParams = parseFloat(urlParams.get("amount"));

      if (!userIdFromParams || isNaN(amountFromParams) || amountFromParams <= 0) {
        throw new Error("Invalid or missing parameters in the URL.");
      }

      setUserId(userIdFromParams);
      setAmount(amountFromParams);
    } catch (err) {
      console.error(err.message);
      setError("Invalid payment details. Please check your link.");
    }
  }, []);

  const loadRazorpay = () => {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) resolve(window.Razorpay);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(window.Razorpay);
      script.onerror = (err) => reject(err);
      document.body.appendChild(script);
    });
  };

  const updateWalletBalance = async (addedAmount) => {
    try {
          const userDocRef = doc(db, "difwa-users", userId);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const currentWalletBalance = userDoc.data().walletBalance || 0;
        const newWalletBalance = parseFloat(currentWalletBalance) + parseFloat(addedAmount);

        await updateDoc(userDocRef, { walletBalance: newWalletBalance });
        console.log("✅ Wallet balance updated successfully.");
      } else {
        console.log("❌ User document not found.");
      }
    } catch (e) {
      console.error("Error updating wallet balance:", e);
    }
  };

  const openCheckout = async () => {
    try {
      if (!userId || amount <= 0) throw new Error("Invalid payment details.");

      setLoading(true);

      const Razorpay = await loadRazorpay();

      const options = {
        key: "rzp_test_5JTg9I35AkiZMQ",
        amount: Math.round(amount * 100),
        currency: "INR",
        name: "Watrify Wallet",
        description: "Add money to your wallet",
        prefill: { contact: "7800730968", email: "test@example.com" },
        theme: { color: "#528FF0" },

        handler: async (response) => {
          setLoading(false);
          alert(`✅ Payment successful! Payment ID: ${response.razorpay_payment_id}`);

          await updateWalletBalance(amount);

          const returnUrl = `/payment-result?payment_id=${response.razorpay_payment_id}&status=success`;
          navigate(returnUrl);
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
            alert("❌ Payment was canceled.");
            const returnUrl = new URLSearchParams(window.location.search).get("returnUrl");
            window.location.href = `${returnUrl}&status=failed`;
          },
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (err) {
      setLoading(false);
      console.error("Payment error:", err.message);
      alert(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="heading">Payment Page</h2>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          <div className="payment-details">
            <p><strong>User ID:</strong> {userId}</p>
            <p><strong>Amount to Pay:</strong> ₹ {amount.toFixed(2)}</p>
          </div>
          <button onClick={openCheckout} className="payment-button" disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </>
      )}
    </div>
  );
};

export default PaymentPage;
