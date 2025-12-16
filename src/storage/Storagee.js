import { User } from "lucide-react";
import { use } from "react";

export const BE_URL = "http://localhost:6309";
export const BUSES_API = "http://localhost:6127/api/buses";

export const busData = [
    {
        id: 1,
        name: "Elite Travels",
        route: ["hyderabad", "vijayawada", "rajahmundry", "kakinada", "visakhapatnam"],
        prices: [0, 299, 479, 519, 599],
        time: ["22:00", "04:30", "08:15", "09:45", "12:00"],
        seats: [
            [
                [
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    {           b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    {           b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    {           b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true }
                ],
                [
                    {           b3: true, c3: true, d3: true, e3: true, f3: true, g3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true }
                ],
                [
                    {           b3: true, c3: true, d3: true, e3: true, f3: true, g3: true },
                    {           b4: true, c4: true, d4: true, e4: true, f4: true, g4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    {           b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    {           b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    {           b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    {                     c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    {           b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    {           b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    {           b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    {           b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true }
                ],
                [
                    {           b3: true, c3: true, d3: true, e3: true, f3: true, g3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true }
                ],
                [
                    {           b3: true, c3: true, d3: true, e3: true, f3: true, g3: true },
                    {           b4: true, c4: true, d4: true, e4: true, f4: true, g4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    {           b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    {           b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    {           b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
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
                    { a1: true, b1: true, c1: true, d1: true, e1: true, f1: true, g1: true, h1: true },
                    { a2: true, b2: true, c2: true, d2: true, e2: true, f2: true, g2: true, h2: true }
                ],
                [
                    {                     c3: true, d3: true, e3: true, f3: true, g3: true, h3: true },
                    {           b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
                ]
            ]
        ]
    }
];

export const Bookings = [
    {
        id: 1,
        busId: 2,
        userId: 1,
        date: "2025-12-10",
        source: "mumbai",
        destination: "hyderabad",
        seats: ["a1", "a2"],
        totalAmount: 1198,
        cancel: false,
        review: null,
        userDetails: [
            { name: "John Doe", age: 30, gender: "male" },
            { name: "Jane Smith", age: 28, gender: "female" }
        ],
        contact: { name: "John Doe", phone: "1234567890", email: "jane.smith@example.com" }
    },
    {
        id: 2,
        busId: 2,
        userId: 1,
        date: "2025-12-08",
        source: "mumbai",
        destination: "hyderabad",
        seats: ["a1", "a2"],
        totalAmount: 1198,
        cancel: false,
        review: null,
        userDetails: [
            { name: "John Doe", age: 30, gender: "male" },
            { name: "Jane Smith", age: 28, gender: "female" }
        ],
        contact: { name: "John Doe", phone: "1234567890", email: "jane.smith@example.com" }
    }
];

export const Users = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "123456",
        phone: "9876543210",
        bookings: [1,2]
    },
    {
        id: 2,
        name: "kottuko",
        email: "kxgarz@gmail.com",
        password: "123456",
        phone: "6309857875",
        bookings: []
    },
];





export const getBookingsByBusIdDate = async (busId, date) => {
    return Bookings.filter(booking => booking.busId === busId && booking.date === date);
};

export const isSeatNeeded = (source,destination, booking,bus) =>{
    const bookingDestIndex = bus.route.indexOf(booking.destination.toLowerCase());
    const srcIndex = bus.route.indexOf(source.toLowerCase());
    return bookingDestIndex > srcIndex;
};

export const getSeatsStatusByBusAndDate = async (bus,date,source,destination) => {
    const bookings = await getBookingsByBusIdDate(bus.id, date);
    const bookingsFiltered = bookings.filter(booking => {
        return isSeatNeeded(source,destination, booking,bus);
    });
    const bookedSea = bookingsFiltered.flatMap(booking => booking.seats);
    const bookedSeats = bookedSea.map(seat => seat.toLowerCase());

    bus.seats.forEach(outerGroup => {
        outerGroup.forEach(innerGroup => {
            innerGroup.forEach(row => {
                Object.keys(row).forEach(seatName => {
                    if (bookedSeats.includes(seatName.toLowerCase())) {
                        row[seatName] = false; // Mark seat as unavailable
                    }
                });
            });
        });
    });
    return bus;
    
};

export const getSingleBookingBusData = (bus,seats) => {
    bus.seats.forEach(outerGroup => {
        outerGroup.forEach(innerGroup => {
            innerGroup.forEach(row => {
                Object.keys(row).forEach(seatName => {
                    if (seats.includes(seatName.toLowerCase())|| seats.includes(seatName.toUpperCase())) {
                        row[seatName] = false; // Mark seat as unavailable
                    }
                });
            });
        });
    });
    
    return bus;
};

export const getBookingById = async (bookingId) => {
    return Bookings.find(booking => booking.id === bookingId);
};

export const getBusById = async (busId) => {
    const buses = await getAllBuses();
    return buses.find(bus => bus.id === busId);  
};

export const getBookingsByUserId = async (userId) => {
    return Bookings.filter(booking => booking.userId === userId);
};





export const getAllBuses = async () => {
    try {
        const response = await fetch(BUSES_API);
        if (!response.ok) {
            console.warn(`API returned status ${response.status}, falling back to local data`);
            return busData;
        }
        const buses = await response.json();
        if (Array.isArray(buses) && buses.length > 0) {
            console.log("✓ Buses fetched from backend API:", buses.length, "buses");
            return buses;
        } else {
            console.warn("API returned empty or invalid data, falling back to local data");
            return busData;
        }
    } catch (error) {
        console.error("Error fetching buses from API:", error.message);
        console.log("Falling back to local bus data");
        return busData;
    }
};

export const getBusesRoute = async (source, destination) => {
    const buses = await getAllBuses();
    const results = buses.filter(bus => {
        const srcIndex = bus.route.indexOf(source.toLowerCase());
        const destIndex = bus.route.indexOf(destination.toLowerCase());
        return srcIndex !== -1 && destIndex !== -1 && srcIndex < destIndex;
    });
    return results;
};



export const addUser = async (userData) => {
    Users.push(userData);
    return { success: true, message: "User added successfully", user: userData };
    // Future: Uncomment when backend API is ready
    // try {
    //     const response = await fetch(`${BE_URL}/users/signup`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(userData)
    //     });
    //     if (!response.ok) {
    //         throw new Error("Failed to add user");
    //     }
    // } catch (error) {
    //     console.error(error);
    // }
};

export const getUsers = async () => {
    return Users;

    try {
        const response = await fetch(`${BE_URL}/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
    } catch (error) {
        console.error(error);
    }
};


export const getUserByEmail = async (email) => {
    return Users.find(user => user.email === email);
};

export const addBooking = async (bookingData) => {
    Bookings.push(bookingData);
    return { success: true, message: "Booking added successfully", booking: bookingData };
    // Future: Uncomment when backend API is ready
    // try {
    //     const response = await fetch(`${BE_URL}/bookings/create`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(bookingData)
    //     });
    //     if (!response.ok) {
    //         throw new Error("Failed to add booking");
    //     }
    // } catch (error) {
    //     console.error(error);
    // }
};