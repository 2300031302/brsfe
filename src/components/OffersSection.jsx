import React, { useRef } from "react";
import OfferCard from "./OfferCard";

const carouselItems = [
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
  {
    imageUrl: "https://ik.imagekit.io/kxgarz/offerbus1.png",
    mainOffer: "Flat 50% OFF",
    subOffer: "on select styles"
  },
  {
    imageUrl: "https://ik.imagekit.io/kxgarz/offerbus1.png",
    mainOffer: "Flat 50% OFF",
    subOffer: "on select styles"
  },
  {
    imageUrl: "https://ik.imagekit.io/kxgarz/offerbus1.png",
    mainOffer: "Flat 50% OFF",
    subOffer: "on select styles"
  },
  {
    imageUrl: "https://ik.imagekit.io/kxgarz/offerbus1.png",
    mainOffer: "Flat 50% OFF",
    subOffer: "on select styles"
  },
  {
    imageUrl: "https://ik.imagekit.io/kxgarz/offerbus1.png",
    mainOffer: "Flat 50% OFF",
    subOffer: "on select styles"
  },
  // ...add more offers as needed
]; // You can customize this array

export default function Carousel() {
  const scrollContainer = useRef(null);

  const handleScroll = (delta) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      margin: '40px auto',
      background: '#fff',
    }}>
      <button
        aria-label="Scroll left"
        style={{
          background: '#1976d2',
          border: 'none',
          color: '#fff',
          fontSize: 24,
          padding: '10px 12px',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onClick={() => handleScroll(-90)}
        onMouseDown={e => e.target.style.background = '#135ba1'}
        onMouseUp={e => e.target.style.background = '#1976d2'}
      >
        &#8592;
      </button>
      <div
        ref={scrollContainer}
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",           
          overflowY: "hidden",           
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // Hide scrollbar in Firefox
          msOverflowStyle: "none", // Hide scrollbar in IE and Edge
          gap: "40px",
          width: "100%",
          margin: "0 12px",
        }}
      >
        {carouselItems.map((item, idx) => (
          <OfferCard
            key={idx}
            imageUrl={item.imageUrl}
            mainOffer={item.mainOffer}
            subOffer={item.subOffer}
          />
        ))}
      </div>

      <button
        aria-label="Scroll right"
        style={{
          background: '#1976d2',
          border: 'none',
          color: '#fff',
          fontSize: 24,
          padding: '10px 12px',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'background 0.2s'
        }}
        onClick={() => handleScroll(90)}
        onMouseDown={e => e.target.style.background = '#135ba1'}
        onMouseUp={e => e.target.style.background = '#1976d2'}
      >
        &#8594;
      </button>
    </div>
  );
}
