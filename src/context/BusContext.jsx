import React, { createContext, useState } from "react";

export const BusContext = createContext();

export const BusProvider = ({ children }) => {
  const [busDetails, setBusDetails] = useState(null);
  const [busList,setBusList]=useState(null);
  /*
    busDetails Example:
    {
      busId: 101,
      busName: "Super Deluxe",
      source: "Hyderabad",
      destination: "Chennai",
      date: "2025-08-25",
      price: 1200,
      selectedSeats: ["A1", "A2"]
    }
  */

  const selectBus = (bus) => setBusDetails(bus);

  const getBusList = async (source, destination) => {
    try {
      // Example: GET http://localhost:7070/api/buss/?source=Hyderabad&destination=Chennai
      const res = await axios.get("http://localhost:7070/api/buss/", {
        params: { source, destination }
      });

      setBusList(res.data); // update state
      return res.data;      // return bus list to caller
    } catch (err) {
      console.error("Error fetching bus list:", err);
      return [];
    }
  };
  const updateSelectedSeats = (seats) => {
    setBusDetails((prev) => ({ ...prev, selectedSeats: seats }));
  };

  return (
    <BusContext.Provider value={{ busDetails, selectBus, updateSelectedSeats }}>
      {children}
    </BusContext.Provider>
  );
};
