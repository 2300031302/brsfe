import React, { createContext, useState } from "react";

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contactDetails, setContactDetails] = useState(null);
  /*
    contactDetails Example:
    {
      phone: "9876543210",
      email: "abc@gmail.com"
    }
  */

  const updateContact = (contactObj) => {
    setContactDetails(contactObj);
  };

  return (
    <ContactContext.Provider value={{ contactDetails, updateContact }}>
      {children}
    </ContactContext.Provider>
  );
};
