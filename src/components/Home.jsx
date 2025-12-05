// components/Carousel.jsx
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import './Home.css';
import bus1 from '../assets/bus1.jpg';
import bus2 from '../assets/bus2.jpg';
import bus3 from '../assets/bus3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserForm from "./UserForm";
import Carousel from './Carousel';
import OfferCard from './OfferCard';
import Offers from './Offers';
import OffersSection from "./OffersSection";
import ExpandableComponent from "./ExpandableComponent";
import BusSeats from "./BusSeats";

const highlights = [
  {
    icon: "⭐",
    title: "User Rating",
    desc: "Rated 4.4 by our users"
  },
  {
    icon: "👥",
    title: "15k+ Users",
    desc: "Visited last month"
  },
  {
    icon: "🎁",
    title: "Super Offers",
    desc: "Exclusive deals every day"
  },
  {
    icon: "⚡",
    title: "Fast Booking",
    desc: "Book in just 30 seconds"
  }
];

function Home() {
  const navigate = useNavigate();

  const slidesData = [
    {
      image: 'https://ik.imagekit.io/kxgarz/bus1.jpg',
      text: 'Unleash your imagination 💡',
      url: '/cancel',
      buttonLabel: 'Start Exploring',
    },
    {
      image: 'https://ik.imagekit.io/kxgarz/bus3.jpg',
      text: 'Find your next getaway 🌄',
      url: '/history',
      buttonLabel: 'See Places',
    },
    {
      image: 'https://ik.imagekit.io/kxgarz/bus3.jpg',
      text: 'Book smarter, ride smoother 🚌',
      url: '/booking',
      buttonLabel: 'Book Now',
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* <div className="home-header">
        <h1>Welcome to Our Travel Booking App</h1>
        <p>Plan your next adventure with ease!</p>
      </div>
      <Carousel slides={slidesData} />
      <h3>Offers!</h3> 
      
      <OffersSection /> */}

      <UserForm />

      

    {/* <ExpandableComponent /> */}
    {/* <BusSeats /> */}
    




      {/* <section className="highlights-section">
        <h2 className="highlights-title">Why Book With Us?</h2>
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section> */}



    </div>
  );
}

export default Home;