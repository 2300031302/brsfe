import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingPage.css';
import BusSeats from './BusSeats';
import { getBusesRoute, getSeatsStatusByBusAndDate } from '../storage/Storagee';


// Sample cities and routes
const cities = ['Mumbai', 'Pune', 'Nashik', 'Aurangabad'];

// Example bus data with seat status (A = available, B = booked)



function BookingPage() {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [filteredBuses, setFilteredBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const busData = [
    {
      id: 1,
      name: "Elite Travels",
      route: ["hyderabad", "vijayawada", "rajahmundry", "kakinada", "visakhapatnam"],
      prices: [0, 299, 479, 519, 599],
      time: ["22:00", "04:30", "08:15", "09:45", "12:00"],
      seats: [
        [
          [
            { a1: true, b1: false, c1: false, d1: false, e1: false, f1: false, g1: true, h1: true },
            { a2: true, b2: true, c2: false, d2: false, e2: true, f2: true, g2: true, h2: true }
          ],
          [
            { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: false },
            { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
          ]
        ]
      ]
    },
    {
      id: 2,
      name: "Royal Coaches",
      route: ["mumbai", "pune", "solapur", "hyderabad"],
      prices: [0, 199, 349, 599],
      time: ["20:30", "23:45", "04:10", "09:30"],
      seats: [
        [
          [
            { a1: true, b1: true, c1: true, d1: false, e1: true, f1: true, g1: false, h1: false },
            { a2: false, b2: false, c2: true, d2: true, e2: false, f2: false, g2: true, h2: true }
          ],
          [
            { a3: true, b3: false, c3: false, d3: true, e3: false, f3: true, g3: false, h3: true },
            { a4: true, b4: true, c4: false, d4: true, e4: true, f4: false, g4: true, h4: false }
          ]
        ]
      ]
    },
    {
      id: 3,
      name: "Elite Travels",
      route: ["bangalore", "chennai", "pondicherry", "trichy"],
      prices: [0, 289, 456, 512],
      time: ["21:15", "04:00", "06:30", "09:45"],
      seats: [
        [
          [
            { a1: true, b1: true, c1: false, d1: true, e1: false, f1: true, g1: true, h1: false },
            { a2: false, b2: true, c2: true, d2: false, e2: true, f2: false, g2: false, h2: true }
          ],
          [
            { a3: true, b3: false, c3: true, d3: false, e3: true, f3: true, g3: false, h3: true },
            { a4: false, b4: true, c4: true, d4: false, e4: true, f4: true, g4: false, h4: true }
          ]
        ]
      ]
    },
    {
      id: 4,
      name: "Royal Coaches",
      route: ["delhi", "agra", "gwalior", "bhopal"],
      prices: [0, 349, 512, 789],
      time: ["19:00", "22:30", "02:15", "08:00"],
      seats: [
        [
          [
            { a1: false, b1: false, c1: true, d1: true, e1: false, f1: false, g1: true, h1: true },
            { a2: true, b2: false, c2: false, d2: true, e2: false, f2: true, g2: true, h2: false }
          ],
          [
            { a3: false, b3: true, c3: true, d3: false, e3: false, f3: true, g3: true, h3: false },
            { a4: true, b4: false, c4: true, d4: true, e4: false, f4: true, g4: false, h4: true }
          ]
        ]
      ]
    },
    {
      id: 5,
      name: "Elite Travels",
      route: ["hyderabad", "vijayawada", "rajahmundry", "kakinada", "visakhapatnam"],
      prices: [0, 279, 459, 499, 579],
      time: ["23:30", "05:45", "09:30", "11:00", "13:15"],
      seats: [
        [
          [
            { a1: true, b1: true, c1: false, d1: true, e1: true, f1: false, g1: false, h1: true },
            { a2: false, b2: true, c2: true, d2: false, e2: false, f2: true, g2: true, h2: false }
          ],
          [
            { a3: true, b3: false, c3: false, d3: true, e3: true, f3: false, g3: true, h3: true },
            { a4: false, b4: true, c4: true, d4: false, e4: true, f4: false, g4: true, h4: false }
          ]
        ]
      ]
    },
    {
      id: 6,
      name: "Royal Coaches",
      route: ["mumbai", "pune", "solapur", "hyderabad"],
      prices: [0, 219, 369, 619],
      time: ["21:45", "01:00", "05:30", "10:45"],
      seats: [
        [
          [
            { a1: false, b1: true, c1: false, d1: false, e1: true, f1: true, g1: false, h1: true },
            { a2: true, b2: false, c2: true, d2: true, e2: false, f2: false, g2: true, h2: false }
          ],
          [
            { a3: true, b3: true, c3: false, d3: true, e3: false, f3: true, g3: false, h3: true },
            { a4: false, b4: false, c4: true, d4: true, e4: false, f4: true, g4: true, h4: false }
          ]
        ]
      ]
    },
    {
      id: 7,
      name: "Elite Travels",
      route: ["kochi", "coimbatore", "salem", "bangalore"],
      prices: [0, 312, 478, 567],
      time: ["20:00", "23:30", "03:15", "07:00"],
      seats: [
        [
          [
            { a1: true, b1: false, c1: true, d1: false, e1: true, f1: false, g1: true, h1: true },
            { a2: false, b2: true, c2: false, d2: true, e2: true, f2: false, g2: false, h2: true }
          ],
          [
            { a3: true, b3: true, c3: true, d3: false, e3: false, f3: true, g3: true, h3: false },
            { a4: false, b4: true, c4: false, d4: true, e4: true, f4: false, g4: true, h4: true }
          ]
        ]
      ]
    },
    {
      id: 8,
      name: "Royal Coaches",
      route: ["delhi", "agra", "gwalior", "bhopal"],
      prices: [0, 329, 492, 769],
      time: ["22:15", "01:45", "05:30", "11:15"],
      seats: [
        [
          [
            { a1: true, b1: true, c1: false, d1: true, e1: false, f1: true, g1: false, h1: false },
            { a2: false, b2: false, c2: true, d2: false, e2: true, f2: true, g2: false, h2: true }
          ],
          [
            { a3: true, b3: false, c3: true, d3: true, e3: false, f3: false, g3: true, h3: true },
            { a4: false, b4: true, c4: false, d4: true, e4: true, f4: false, g4: false, h4: true }
          ]
        ]
      ]
    },
    {
      id: 9,
      name: "Elite Travels",
      route: ["chandigarh", "ambala", "karnal", "delhi"],
      prices: [0, 198, 287, 456],
      time: ["18:30", "19:45", "21:00", "23:59"],
      seats: [
        [
          [
            { a1: false, b1: true, c1: true, d1: false, e1: false, f1: true, g1: true, h1: false },
            { a2: true, b2: false, c2: false, d2: true, e2: false, f2: true, g2: true, h2: false }
          ],
          [
            { a3: false, b3: true, c3: true, d3: false, e3: true, f3: false, g3: false, h3: true },
            { a4: true, b4: false, c4: true, d4: false, e4: true, f4: true, g4: false, h4: true }
          ]
        ]
      ]
    },
    {
      id: 10,
      name: "Royal Coaches",
      route: ["bangalore", "chennai", "pondicherry", "trichy"],
      prices: [0, 269, 436, 492],
      time: ["21:00", "23:15", "01:30", "05:45", "12:00"],
      seats: [
        [
          [
            { a1: true, b1: false, c1: false, d1: true, e1: true, f1: false, g1: true, h1: false },
            { a2: false, b2: true, c2: true, d2: false, e2: false, f2: true, g2: false, h2: true }
          ],
          [
            { a3: true, b3: true, c3: false, d3: true, e3: false, f3: true, g3: true, h3: false },
            { a4: false, b4: false, c4: true, d4: false, e4: true, f4: true, g4: false, h4: true }
          ]
        ]
      ]
    },
    {
      id: 11,
      name: "Elite Travels",
      route: ["visakhapatnam", "kakinada", "rajahmundry", "vijayawada", "hyderabad"],
      prices: [0, 299, 479, 519, 599], // Original prices retained
      time: ["20:00", "01:30", "06:00", "10:30"],
      seats: [
        [
          [
            { a1: true, b1: false, c1: false, d1: false, e1: false, f1: false, g1: true, h1: true },
            { a2: true, b2: true, c2: false, d2: false, e2: true, f2: true, g2: true, h2: true }
          ],
          [
            { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: false },
            { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
          ]
        ]
      ]
    },
    {
      id: 12,
      name: "Royal Coaches",
      route: ["hyderabad", "solapur", "pune", "mumbai"],
      prices: [0, 199, 349, 599], // Original prices retained
      time: ["20:30", "23:45", "02:30", "09:00"],
      seats: [
        [
          [
            { a1: false, b1: true, c1: true, d1: false, e1: true, f1: true, g1: false, h1: false },
            { a2: false, b2: false, c2: true, d2: true, e2: false, f2: false, g2: true, h2: true }
          ],
          [
            { a3: true, b3: false, c3: false, d3: true, e3: false, f3: true, g3: false, h3: true },
            { a4: true, b4: true, c4: false, d4: true, e4: true, f4: false, g4: true, h4: false }
          ]
        ]
      ]
    },
    {
      id: 13,
      name: "Elite Travels",
      route: ["trichy", "pondicherry", "chennai", "bangalore"],
      prices: [0, 289, 456, 512], // Original prices retained
      time: ["20:30", "23:45", "02:30", "09:00"],
      seats: [
        [
          [
            { a1: true, b1: true, c1: false, d1: true, e1: false, f1: true, g1: true, h1: false },
            { a2: false, b2: true, c2: true, d2: false, e2: true, f2: false, g2: false, h2: true }
          ],
          [
            { a3: true, b3: false, c3: true, d3: false, e3: true, f3: true, g3: false, h3: true },
            { a4: false, b4: true, c4: true, d4: false, e4: true, f4: true, g4: false, h4: true }
          ]
        ]
      ]
    },
    {
      id: 14,
      name: "Royal Coaches",
      route: ["bhopal", "gwalior", "agra", "delhi"],
      prices: [0, 349, 512, 789], // Original prices retained
      time: ["19:45", "01:30", "05:15", "09:00"],
      seats: [
        [
          [
            { a1: false, b1: false, c1: true, d1: true, e1: false, f1: false, g1: true, h1: true },
            { a2: true, b2: false, c2: false, d2: true, e2: false, f2: true, g2: true, h2: false }
          ],
          [
            { a3: false, b3: true, c3: true, d3: false, e3: false, f3: true, g3: true, h3: false },
            { a4: true, b4: false, c4: true, d4: true, e4: false, f4: true, g4: false, h4: true }
          ]
        ]
      ]
    },
    {
      id: 15,
      name: "Elite Travels",
      route: ["visakhapatnam", "kakinada", "rajahmundry", "vijayawada", "hyderabad"],
      prices: [0, 279, 459, 499, 579], // Original prices retained
      time: ["22:30", "00:45", "03:00", "07:15", "13:30"],
      seats: [
        [
          [
            { a1: true, b1: true, c1: false, d1: true, e1: true, f1: false, g1: false, h1: true },
            { a2: false, b2: true, c2: true, d2: false, e2: false, f2: true, g2: true, h2: false }
          ],
          [
            { a3: true, b3: false, c3: false, d3: true, e3: true, f3: false, g3: true, h3: true },
            { a4: false, b4: true, c4: true, d4: false, e4: true, f4: false, g4: true, h4: false }
          ]
        ]
      ]
    },
    {
      id: 16,
      name: "Royal Coaches",
      route: ["hyderabad", "solapur", "pune", "mumbai"],
      prices: [0, 219, 369, 619], // Original prices retained
      time: ["21:30", "03:00", "07:30", "12:00"],
      seats: [
        [
          [
            { a1: false, b1: true, c1: false, d1: false, e1: true, f1: true, g1: false, h1: true },
            { a2: true, b2: false, c2: true, d2: true, e2: false, f2: false, g2: true, h2: false }
          ],
          [
            { a3: true, b3: true, c3: false, d3: true, e3: false, f3: true, g3: false, h3: true },
            { a4: false, b4: false, c4: true, d4: true, e4: false, f4: true, g4: true, h4: false }
          ]
        ]
      ]
    },
    {
      id: 17,
      name: "Elite Travels",
      route: ["bangalore", "salem", "coimbatore", "kochi"],
      prices: [0, 312, 478, 567], // Original prices retained
      time: ["20:15", "00:01", "03:45", "08:00"],
      seats: [
        [
          [
            { a1: true, b1: false, c1: true, d1: false, e1: true, f1: false, g1: true, h1: true },
            { a2: false, b2: true, c2: false, d2: true, e2: true, f2: false, g2: false, h2: true }
          ],
          [
            { a3: true, b3: true, c3: true, d3: false, e3: false, f3: true, g3: true, h3: false },
            { a4: false, b4: true, c4: false, d4: true, e4: true, f4: false, g4: true, h4: true }
          ]
        ]
      ]
    },
    {
      id: 18,
      name: "Royal Coaches",
      route: ["bhopal", "gwalior", "agra", "delhi"],
      prices: [0, 329, 492, 769], // Original prices retained
      time: ["21:00", "02:45", "06:30", "10:15"],
      seats: [
        [
          [
            { a1: true, b1: true, c1: false, d1: true, e1: false, f1: true, g1: false, h1: false },
            { a2: false, b2: false, c2: true, d2: false, e2: true, f2: true, g2: false, h2: true }
          ],
          [
            { a3: true, b3: false, c3: true, d3: true, e3: false, f3: false, g3: true, h3: true },
            { a4: false, b4: true, c4: false, d4: true, e4: true, f4: false, g4: false, h4: true }
          ]
        ]
      ]
    },
    {
      id: 19,
      name: "Elite Travels",
      route: ["delhi", "karnal", "ambala", "chandigarh"],
      prices: [0, 198, 287, 456], // Original prices retained
      time: ["20:00", "22:30", "23:45", "01:30"],
      seats: [
        [
          [
            { a1: false, b1: true, c1: true, d1: false, e1: false, f1: true, g1: true, h1: false },
            { a2: true, b2: false, c2: false, d2: true, e2: false, f2: true, g2: true, h2: false }
          ],
          [
            { a3: false, b3: true, c3: true, d3: false, e3: true, f3: false, g3: false, h3: true },
            { a4: true, b4: false, c4: true, d4: false, e4: true, f4: true, g4: false, h4: true }
          ]
        ]
      ]
    },
    {
      id: 20,
      name: "Royal Coaches",
      route: ["trichy", "pondicherry", "chennai", "bangalore"],
      prices: [0, 269, 436, 492], // Original prices retained
      time: ["21:45", "01:00", "03:45", "10:30"],
      seats: [
        [
          [
            { a1: true, b1: false, c1: false, d1: true, e1: true, f1: false, g1: true, h1: false },
            { a2: false, b2: true, c2: true, d2: false, e2: false, f2: true, g2: false, h2: true }
          ],
          [
            { a3: true, b3: true, c3: false, d3: true, e3: false, f3: true, g3: true, h3: false },
            { a4: false, b4: false, c4: true, d4: false, e4: true, f4: true, g4: false, h4: true }
          ]
        ]
      ]
    }

  ];

  const handleSeatToggle = (seatInfo) => {
    console.log("Seat clicked:", seatInfo);
  };

  const handleProceedBooking = () => {
    console.log("Proceeding to payment page...");
    navigate("/payment"); // React Router navigation
  };

  const handleSearch = async () => {
    // Get buses from storage using getBusesRoute
    const routes = await getBusesRoute(from.toLowerCase(), to.toLowerCase());
    
    // Sync seat status for each bus based on bookings
    const updatedBuses = await Promise.all(
      routes.map(bus => getSeatsStatusByBusAndDate(bus, startDate, from.toLowerCase(), to.toLowerCase()))
    );
    
    setFilteredBuses(updatedBuses);
    setSelectedBus(null);
    setSelectedSeats([]);
  };

  const getTiming = (bus) => {
    const startIndex = bus.route.indexOf(from.toLowerCase());
    return bus.time[startIndex]+" --- "+bus.time[bus.route.indexOf(to.toLowerCase())];
  }

  const getFair = (bus) => {
    const startIndex = bus.route.indexOf(from.toLowerCase());
    const destIndex = bus.route.indexOf(to.toLowerCase());
    return bus.prices[destIndex] - bus.prices[startIndex];
  };

  console.log(typeof getFair(busData[0]));

  const openBus = (busId) => {
    if (selectedBus === busId) {
      setSelectedBus(0);
      setSelectedSeats([]);
      return;
    }
    setSelectedBus(busId);
    setSelectedSeats([]);
  };

  const toggleSeat = (idx) => {
    if (selectedBus.seats[idx] === 'B') return; // can't select booked
    setSelectedSeats(seats =>
      seats.includes(idx)
        ? seats.filter(i => i !== idx)
        : [...seats, idx]
    );
  };

  return (
    <div>
      <h2 style={{ maxWidth: '900px', margin: '30px auto 20px auto', paddingLeft: '20px' }}>Book Your Bus Ticket</h2>
      <div className="form-container">
        <form id='busSearchForm'>
          <div className='form-grid'>
            <div className="form-field">
              <label htmlFor="from">From</label>
              <input type="text" id="from" name='from' placeholder='Depature City' value={from} onChange={e => setFrom(e.target.value)} required />
            </div>
            <div className='form-field'>
              <label htmlFor="to">To</label>
              <input type="text" id="to" name='to' placeholder='Destination City' value={to} onChange={e => setTo(e.target.value)} required />
            </div>
            <div className='form-field'>
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id='startDate'
                name='startDate'
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]} // Prevent selecting past dates
                required
              />
            </div>
            <div className='form-field'>
              <label htmlFor="returnDate">Return Date</label>
              <input
                type="date"
                id='returnDate'
                name='returnDate'
                placeholder='Return Date'
                value={returnDate}
                onChange={e => setReturnDate(e.target.value)}
                min={startDate} // Prevent selecting a return date before the start date
              />
            </div>
          </div>
          <div className='button-container'>
            <button type="button" onClick={handleSearch}>🔍 Search Buses</button>
          </div>
        </form>
      </div >

      {/* Bus List */}
      {filteredBuses.length > 0 && (
        <div className="bus-list">
          <h3 style={{ maxWidth: '900px', margin: '30px auto 15px auto', paddingLeft: '20px' }}>Available Buses:</h3>
          <ul>
            {filteredBuses.map(bus => (
              <div className="bus-single-info" key={bus.id}>
                <li key={bus.id}>
                  <span className="bus-left">{bus.name}</span>
                  <span className="bus-center">Fare: ₹{getFair(bus)} — {getTiming(bus)}</span>
                  <button onClick={() => openBus(bus.id)}>select seats</button>
                </li>
                {selectedBus === bus.id && (<BusSeats bus={bus} openBus={openBus} price={getFair(bus)} date={startDate} />)}
              </div>
            ))}
          </ul>
        </div>
      )}

      {/* Bus Info and Seats */}
      {/* {selectedBus && (
        <div>
          <h3>{selectedBus.name} - Seat Availability</h3>
          <div className='seat-layout' style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 200 }}>
            {selectedBus.seats.map((status, idx) => (
              <div
                className='seat'
                key={idx}
                onClick={() => toggleSeat(idx)}
                style={{
                  width: 30, height: 30, margin: 2, textAlign: 'center', lineHeight: '30px',
                  background: status === 'B' ? '#aaa' : selectedSeats.includes(idx) ? 'green' : '#fff',
                  border: '1px solid #000', cursor: status === 'B' ? 'not-allowed' : 'pointer'
                }}
                title={`Seat ${idx + 1} - ${status === 'B' ? 'Booked' : (selectedSeats.includes(idx) ? 'Selected' : 'Available')}`}
              >
                {idx + 1}
              </div>
            ))}
          </div>
          <div>
            Selected Seats: {selectedSeats.map(idx => idx + 1).join(', ') || 'None'}
          </div>
        </div>
      )} */}

      

    </div>
  );
}

export default BookingPage;
