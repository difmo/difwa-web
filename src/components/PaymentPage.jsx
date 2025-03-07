import React, { useEffect, useState } from "react";
import { db, doc, getDoc, updateDoc } from "../config/config"; // Import Firestore methods

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

  const loadRazorpay = () => {
    return new Promise((resolve, reject) => {
      if (window.Razorpay) {
        resolve(window.Razorpay);
      } else {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve(window.Razorpay);
        script.onerror = (err) => reject(err);
        document.body.appendChild(script);
      }
    });
  };

  // Update wallet balance in Firebase after successful payment
  const updateWalletBalance = async (addedAmount) => {
    try {
      // Get the document reference of the current user
      const userDocRef = doc(db, "difwa-users", userId);

      // Fetch the current wallet balance
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const currentWalletBalance = userDoc.data().walletBalance || 0;

        // Ensure both the current balance and added amount are floating point values
        const newWalletBalance =
          parseFloat(currentWalletBalance) + parseFloat(addedAmount);

        // Update the Firestore document with the new balance
        await updateDoc(userDocRef, { walletBalance: newWalletBalance });
        console.log("Wallet balance updated successfully.");
      } else {
        console.log("User document not found.");
      }
    } catch (e) {
      console.error("Error updating wallet balance:", e);
    }
  };

  const openCheckout = async () => {
    try {
      if (!userId || amount <= 0) {
        throw new Error("Invalid payment details.");
      }

      setLoading(true);

      // Ensure Razorpay is loaded before attempting to use it
      const Razorpay = await loadRazorpay();

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
        handler: async function (response) {
          setLoading(false);
          alert(
            `✅ Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );

          // Call updateWalletBalance after payment success
          await updateWalletBalance(amount); // Add the amount to the wallet balance

          // Now, redirect the user back to the app
          const returnUrl = new URLSearchParams(window.location.search).get(
            "returnUrl"
          );
          if (returnUrl) {
            window.location.href = returnUrl; // This will redirect to app://payment-result
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            alert("❌ Payment was canceled.");
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
    <div className=" payment flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="payment-card">
        <div className="logo-container">
          <img
            src="img/logo.svg"
            alt="Watrify Logo"
            className="logo"
          />
        </div>
        <h2 className="heading">Payment Page</h2>

        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <>
            <div className="payment-details">
              <p className="detail-text">
                <strong>User ID:</strong> {userId}
              </p>
              <p className="detail-text">
                <strong>Amount to Pay:</strong> ₹ {amount.toFixed(2)}
              </p>
            </div>
            <div className="button-container">
              <button
                onClick={openCheckout}
                className="payment-button"
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay Now"}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
      .payment
      {
     height:600px;
     width:100%;
      background-image:url('img/payment.jpg');
      background-repeat:no-repeat;
      background-size:cover;
      padding-top:40px;
      
      }
        .payment-card {
          // background-color: white;
          padding:2rem ;
          border: 2px solid #11baf9;
          border-radius: 1rem;
          box-shadow: 0 18px 16px rgba(0, 0, 0, 0.74);
          max-width: 28rem;
          text-align: center;
             margin-left: 56rem;
             margin-top: 90px;
             width:100%;
             height:400px;
        
          
        }

        .logo-container {
        
          display:flex;
          align-item:center;
          margin-bottom: 1rem;
         
        }

        .logo {
          height: 15rem;
          width: 15rem;
           margin-left:3rem;
        }

        .heading {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .error-message {
          color: #f87171;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .payment-details {
          margin-bottom: 1.5rem;
    
       
        }

        .detail-text {
          font-size: 1.125rem;
          color: #4b5563;
        }

        .button-container {
          display: flex;
          justify-content: center;
        }

        .payment-button {
          background-color: #3b82f6;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 1rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .payment-button:hover {
          background-color: #2563eb;
        }

        .payment-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>




  );
};

export default PaymentPage;

