import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import BookingPage from './components/BookingPage'
import Home from './components/Home'
import Carousel from './components/Carousel';
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext'
import { PassengerProvider } from './context/PassengerContext'
import { ContactProvider } from './context/ContactContext'
import { BusProvider } from './context/BusContext'
import UserForm from './components/UserForm'
import OfferCard from './components/OfferCard'

function App() {

  const images = [
  'https://ik.imagekit.io/kxgarz/bus1.jpg',
  'https://ik.imagekit.io/kxgarz/bus2.jpg',
  'https://ik.imagekit.io/kxgarz/bus3.jpg',
  ];

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

  return (
    <AuthProvider>
      <PassengerProvider>
        <ContactProvider>
          <BusProvider>
            <Router>
              <div className='main-content-App'>
                <Header />
                <hr />
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/" element={ <Home /> } />
                  <Route path='/booking' element={ <BookingPage /> } />
                  <Route path='/userform' element={ <UserForm /> } />
                </Routes>
              </div >
              <Footer />
            </Router>
          </BusProvider>
        </ContactProvider>
      </PassengerProvider>
    </AuthProvider>
  )
}

export default App;



