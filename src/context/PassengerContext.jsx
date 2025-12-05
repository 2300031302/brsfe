import React, { createContext, useState } from "react";

export const PassengerContext = createContext();

export const PassengerProvider = ({ children }) => {
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [numberOfSeats, setNumberOfSeats] = useState(0);
  /*
    passengerDetails Example:
    [
      { seatNo: "A1", name: "John", age: 25, gender: "M" },
      { seatNo: "A2", name: "Sara", age: 22, gender: "F" }
    ]
  */

  const addPassenger = (seatNo, passengerObj) => {
    setPassengerDetails((prev) => [...prev, { seatNo, ...passengerObj }]);
  };

  const updatePassenger = (seatNo, passengerObj) => {
    setPassengerDetails((prev) =>
      prev.map((p) => (p.seatNo === seatNo ? { seatNo, ...passengerObj } : p))
    );
  };

  const removePassenger = (seatNo) => {
    setPassengerDetails((prev) => prev.filter((p) => p.seatNo !== seatNo));
  };

  const setSeatsCount = (count) => {
    setNumberOfSeats(count);
  };

  const clearPassengers = () => {
    setPassengerDetails([]);
    setNumberOfSeats(0);
  };

  return (
    <PassengerContext.Provider value={{
      passengerDetails,
      numberOfSeats,
      setSeatsCount,
      addPassenger,
      updatePassenger,
      removePassenger,
      clearPassengers
    }}>
      {children}
    </PassengerContext.Provider>
  );
};
