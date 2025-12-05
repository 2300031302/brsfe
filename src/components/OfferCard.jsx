import React from "react";

const OfferCard = ({ imageUrl, mainOffer, subOffer }) => (
  <div style={{
    position: "relative",
    minWidth: "320px",
    width: "320px",
    height: "180px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
  }}>
    <img
      src={imageUrl}
      alt="Offer"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }}
    />
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      background: "rgba(255, 69, 0, 0.85)",
      color: "#fff",
      padding: "16px 20px 12px 16px",
      fontWeight: "bold",
      fontSize: "1.25rem",
      borderBottomRightRadius: "18px",
      minWidth: "50%"
    }}>
      <div style={{fontSize: "1.5rem", fontWeight: "bold", lineHeight: 1.1}}>
        {mainOffer}
      </div>
      <div style={{
        fontSize: "1rem",
        marginTop: "5px",
        opacity: 0.85,
        fontWeight: "500"
      }}>
        {subOffer}
      </div>
    </div>
  </div>
);

export default OfferCard;
