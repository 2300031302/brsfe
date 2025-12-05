import React, { useState } from 'react';
import './ExpandableComponent.css';
import BusSeats from './BusSeats';

const seats = [
  [
    [
      { a1: [true,450], b1: [false,450], c1: [false,450], d1: [false,450], e1: [false,450], f1: [false,450], g1: [true,450], h1: [true,450] },
      { a2: true, b2: true, c2: [false,450], d2: [false,450], e2: true, f2: true, g2: true, h2: true }
    ],
    [
      { b3: [true,450], c3: [true,450], d3: [true,450], e3: [true,450], f3: [true,450], g3: [true,450], h3: [false,450] },
      { a4: [true,450], b4: [true,450], c4: [true,450], d4: [true,450], e4: [true,450], f4: [true,450], g4: [true,450], h4: [true,450] }
    ]
  ]
];

const ExpandableComponent = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSeatClick = (seatName, isAvailable) => {
        if (!isAvailable[0]) return; // Prevent selecting unavailable seats

        setSelectedSeats((prevSelected) => {
            if (prevSelected.includes(seatName)) {
                // If seat is already selected, remove it
                setErrorMessage(""); // Clear error message when deselecting
                setAmount(amount - isAvailable[1]);
                return prevSelected.filter((seat) => seat !== seatName);
            } else {
                // Check if adding a new seat exceeds the limit
                if (prevSelected.length >= 6) {
                    setErrorMessage("You can only book a maximum of 6 seats.");
                    return prevSelected;
                }
                // Add new seat to selection
                setErrorMessage(""); // Clear error message when adding a valid seat
                setAmount(amount + isAvailable[1]);
                return [...prevSelected, seatName];
            }
        });
    };

    

    const handlePayment = () => {
        const options = {
            key: "rzp_test_zRJkjDNEusOoIR", // Replace with your Razorpay Key ID
            amount: amount, // in paise, e.g., 1200 * 100 = ₹1200
            currency: "INR",
            name: "Test Company",
            description: "Test Transaction",
            handler: function (response) {
                alert("Payment successful!");
                console.log("Payment ID:", response.razorpay_payment_id);
            },
            prefill: {
                name: "Test User",
                email: "test@example.com",
                contact: "9999999999"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };



    const initialWidth = window.innerWidth < 768 ? '100%' : '80%';
    const expandedWidth = window.innerWidth < 768 ? '100%' : '80%';
    const initialHeight = '60px';
    const expandedHeight = parseInt(initialHeight.replace('px', '')) * 3 + 'px';

    return (
        <div style={{ width: isExpanded ? expandedWidth : initialWidth, margin: '0 auto', }}>
            <div className="travel-banner">
                <div className="banner-content">
                    <div className="logo"></div>
                    <div>
                        <h2>Elite Travels</h2>
                        <p>hyd → vjy</p>
                    </div>
                </div>
                <button onClick={toggleExpand}>
                    {isExpanded ? 'close booking' : 'show tickets'}
                </button>
            </div>
            {isExpanded && (
                // <div className="outer-container">
                //     {seats.map((outerGroup, i) => (
                //         <div className="outer-group" key={i}>
                //             {outerGroup.map((innerGroup, j) => (
                //                 <div className="inner-group" key={j}>
                //                     {innerGroup.map((row, k) => (
                //                         <div className="seat-row" key={k}>
                //                             {Object.entries(row).map(([seatName, isAvailable]) => (
                //                                 <div
                //                                     key={seatName}
                //                                     className={`seat-box ${isAvailable ? "available" : "unavailable"
                //                                         } ${selectedSeats.includes(seatName) ? "selected" : ""}`}
                //                                     onClick={() => handleSeatClick(seatName, isAvailable)}
                //                                 >
                //                                     {seatName}
                //                                 </div>
                //                             ))}
                //                         </div>
                //                     ))}
                //                 </div>
                //             ))}
                //         </div>
                //     ))}
                //     <div className="selected-seats">
                //         <h3>Selected Seats: {selectedSeats.join(", ") || "None"}</h3>
                //         {errorMessage && <p className="error-message">{errorMessage}</p>}
                //     </div>
                // </div>
                <div className="outer-container">
                    {seats.map((outerGroup, i) => (
                        <div className="outer-group" key={i}>
                            {outerGroup.map((innerGroup, j) => (
                                <div className="inner-group" key={j}>
                                    {innerGroup.map((row, k) => (
                                        <div className="seat-row" key={k}>
                                            {Object.entries(row).map(([seatName, isAvailable]) => (
                                                <div
                                                    key={seatName}
                                                    className={`seat-box ${isAvailable[0] ? "available" : "unavailable"
                                                        } ${selectedSeats.includes(seatName) ? "selected" : ""}`}
                                                    onClick={() => handleSeatClick(seatName, isAvailable)}
                                                >
                                                    {seatName}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="selected-seats">
                        {/* <h3>Selected Seats: {selectedSeats.join(", ") || "None"},${amount}</h3> */}
                        {selectedSeats.length > 0 && <button onClick={handlePayment}>pay {amount}</button>}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExpandableComponent;