document.getElementById("razorpay-button").onclick = function () {
    var options = {
        key: "YOUR_RAZORPAY_KEY_ID",  // Replace with your Razorpay key ID
        amount: 240000,  // Amount in paise (₹2400)
        currency: "INR",
        name: "Ticket Booking",
        description: "Concert XYZ Tickets",
        image: "https://your-logo-url.com/logo.png",
        handler: function (response) {
            alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
            // You can redirect to a success page or perform other actions here
        },
        prefill: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            contact: document.getElementById('phone').value
        },
        notes: {
            address: "Note about the event or booking"
        },
        theme: {
            color: "#4CAF50"
        }
    };
    var rzp = new Razorpay(options);
    rzp.open();
};
