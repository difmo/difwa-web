import React, { useEffect, useState } from "react";

const PaymentPage = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ Added error handling state

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userIdFromParams = urlParams.get("userId");
      const amountFromParams = parseFloat(urlParams.get("amount"));

      if (
        !userIdFromParams ||
        isNaN(amountFromParams) ||
        amountFromParams <= 0
      ) {
        throw new Error("Invalid or missing parameters in the URL.");
      }

      setUserId(userIdFromParams);
      setAmount(amountFromParams);
    } catch (err) {
      console.error(err.message);
      setError("Invalid payment details. Please check your link.");
    }
  }, []);

  const openCheckout = async () => {
    try {
      if (!userId || amount <= 0) {
        throw new Error("Invalid payment details.");
      }

      setLoading(true);

      const options = {
        key: "rzp_test_5JTg9I35AkiZMQ", // Replace with your Razorpay Key ID
        amount: Math.round(amount * 100), // ✅ Fixed conversion to paise
        currency: "INR",
        name: "Watrify Wallet",
        description: "Add money to your wallet",
        prefill: {
          contact: "7800730968",
          email: "test@example.com",
        },
        theme: {
          color: "#528FF0",
        },
        handler: function (response) {
          setLoading(false);
          alert(
            `✅ Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            alert("❌ Payment was canceled.");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      setLoading(false);
      console.error("Payment error:", err.message);
      alert(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="https://your-logo-url.com/logo.png"
            alt="Watrify Logo"
            className="h-16 w-16"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Payment Page
        </h2>

        {error ? (
          <p className="text-red-500 text-center font-semibold">{error}</p>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-lg text-gray-600">
                <strong>User ID:</strong> {userId}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Amount to Pay:</strong> ₹ {amount.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={openCheckout}
                className="bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-600 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
