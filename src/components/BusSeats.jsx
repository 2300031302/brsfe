import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BusContext } from "../context/BusContext";
import { PassengerContext } from "../context/PassengerContext";
import "./BusSeats.css";


export default function BusSeats({bus , openBus, price , date}) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [amount,setAmount]=useState(0);
  const navigate = useNavigate();
  const { selectBus } = useContext(BusContext);
  const { setSeatsCount } = useContext(PassengerContext);

  const handleSeatClick = (seatName, isAvailable) => {
    if (!isAvailable) return; // Prevent selecting unavailable seats

    setSelectedSeats((prevSelected) => {
      let updatedSeats;
      if (prevSelected.includes(seatName)) {
        // If seat is already selected, remove it
        setErrorMessage(""); // Clear error message when deselecting
        setAmount(amount- price);
        updatedSeats = prevSelected.filter((seat) => seat !== seatName);
      } else {
        // Check if adding a new seat exceeds the limit
        if (prevSelected.length >= 6) {
          setErrorMessage("You can only book a maximum of 6 seats.");
          return prevSelected;
        }
        // Add new seat to selection
        setErrorMessage(""); // Clear error message when adding a valid seat
        setAmount(amount+price);
        updatedSeats = [...prevSelected, seatName];
      }

      // Update bus context with selected seats and details
      if (updatedSeats.length > 0) {
        selectBus({
          busId: bus.id,
          busName: bus.name,
          source: bus.route[0],
          destination: bus.route[bus.route.length - 1],
          date: date,
          price: price,
          selectedSeats: updatedSeats,
          totalAmount: updatedSeats.length * price
        });
      }

      return updatedSeats;
    });
  };

  const seats = bus?.seats ?? [];
  // const seats = [
  //       [
  //         [
  //           { a1: true, b1: false, c1: false, d1: false, e1: false, f1: false, g1: true, h1: true },
  //           { a2: true, b2: true, c2: false, d2: false, e2: true, f2: true, g2: true, h2: true }
  //         ],
  //         [
  //           { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: false },
  //           { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
  //         ]
  //       ]
  //     ];
  

  const handlePayment = () => {
    // Set the number of seats in context
    setSeatsCount(selectedSeats.length);
    // Navigate to userform to fill passenger details
    navigate("/userform");
  };

  return (
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
                      className={`seat-box ${
                        isAvailable ? "available" : "unavailable"
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
        {selectedSeats.length>0&&<button onClick={handlePayment}> Next {amount}</button>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}