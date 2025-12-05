import React, { useRef } from "react";
import OfferCard from "./OfferCard"; // Import your customized card

const offers = [
  {
    imageUrl: "https://ik.imagekit.io/kxgarz/offerbus1.png",
    mainOffer: "100rs cashback",
    subOffer: "on axis credit card"
  },
  {
    imageUrl: "https://ik.imagekit.io/kxgarz/offerbus1.png",
    mainOffer: "Flat 50% OFF",
    subOffer: "on select styles"
  },
  // ...add more offers as needed
];

const Offers = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.85; // Scroll by almost one card
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div style={{ position: "relative", width: "90vw", maxWidth: 1080, margin: "auto" }}>
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        style={{
          position: "absolute",
          top: "50%",
          left: -30,
          zIndex: 2,
          background: "white",
          borderRadius: "50%",
          border: "none",
          boxShadow: "0 2px 8px #0002",
          width: 36, height: 36,
          transform: "translateY(-50%)"
        }}
        aria-label="Scroll left"
      >
        ◀
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        style={{
          overflowX: "auto",
          display: "flex",
          scrollBehavior: "smooth",
          gap: 16,
          padding: "8px 36px", // Leave space for arrows
        }}
      >
        {offers.map((offer, idx) => (
          <OfferCard  imageSrc={offer.imageUrl} alt={"busimage"} mainOffer={offer.mainOffer} description={offer.subOffer} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        style={{
          position: "absolute",
          top: "50%",
          right: -30,
          zIndex: 2,
          background: "white",
          borderRadius: "50%",
          border: "none",
          boxShadow: "0 2px 8px #0002",
          width: 36, height: 36,
          transform: "translateY(-50%)"
        }}
        aria-label="Scroll right"
      >
        ▶
      </button>
    </div>
  );
};

export default Offers;
