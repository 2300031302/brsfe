import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import ReactWhatsapp from 'react-whatsapp';
import "./UserForm.css";
import { PassengerContext } from "../context/PassengerContext";
import { ContactContext } from "../context/ContactContext";
import { BusContext } from "../context/BusContext";

const blankUser = () => ({ name: "", age: "", gender: "" });

const UserForm = () => {
  const navigate = useNavigate();
  const { addPassenger, numberOfSeats, passengerDetails, setSeatsCount, clearPassengers } = useContext(PassengerContext);
  const { updateContact } = useContext(ContactContext);
  const { busDetails, selectBus } = useContext(BusContext);
  const [users, setUsers] = useState([]);

  const [contactInfo, setContactInfo] = useState({
    nameNumber: "",
    whatsappNumber: "",
    email: "",
  });

  // Keep users array in sync if `numberOfSeats` changes
  useEffect(() => {
    setUsers((prev) => {
      if (numberOfSeats <= 0) return [];
      if (numberOfSeats > prev.length) {
        return [...prev, ...Array.from({ length: numberOfSeats - prev.length }, blankUser)];
      }
      return prev.slice(0, numberOfSeats);
    });
  }, [numberOfSeats]);

  const handleUserChange = (index, field, value) => {
    setUsers((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handleProceedToPayment = () => {
    // Validate all users have complete information
    const allUsersComplete = users.every(
      (user) => user.name && user.age && user.gender
    );

    const contactComplete =contactInfo.nameNumber && contactInfo.whatsappNumber && contactInfo.email;

    if (!allUsersComplete) {
      alert("❌ Please fill in all user details (Name, Age, Gender)");
      return;
    }

    if (!contactComplete) {
      alert("❌ Please fill in all contact information");
      return;
    }

    // Store contact info in ContactContext
    updateContact({
      phone: contactInfo.nameNumber,
      whatsappNumber: contactInfo.whatsappNumber,
      email: contactInfo.email,
    });

    // Store each passenger in PassengerContext
    users.forEach((user, index) => {
      addPassenger(`seat-${index + 1}`, {
        name: user.name,
        age: user.age,
        gender: user.gender,
      });
    });

    // Navigate to payment page
    const options = {
      key: "rzp_test_zRJkjDNEusOoIR", // Replace with your Razorpay Key ID
      amount: 59900, // in paise, e.g., 1200 * 100 = ₹1200
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      handler: function (response) {
        alert("Payment successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
        // after successful payment generate PDF, clear contexts and navigate home
        createPdfAndCleanup();
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
    };
    const rzp = new window.Razorpay(options);
    // ensure PDF is generated whether payment succeeds or fails
    rzp.open();
    createPdfAndCleanup();
    


  };

  // Generate a PDF ticket (uses jsPDF from CDN) and then clear contexts and navigate home
  const createPdfAndCleanup = async () => {
    try {
      // load jspdf if not available
      if (!window.jspdf) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
          s.onload = resolve;
          s.onerror = reject;
          document.body.appendChild(s);
        });
      }

      // pick jsPDF constructor robustly for different UMD builds
      const jsPDFCtor = (window.jspdf && (window.jspdf.jsPDF || window.jspdf.default || window.jspdf)) || window.jsPDF || null;
      if (!jsPDFCtor) throw new Error('jsPDF not available');
      const doc = new jsPDFCtor();

      const sanitize = (v) => {
        if (v === null || v === undefined) return 'N/A';
        return String(v)
          .replace(/→/g, '->')
          .replace(/—/g, '-')
          .replace(/&/g, 'and');
      };

      doc.setFontSize(16);
      doc.text('Booking Confirmation', 14, 20);

      // Bus details (if available)
      doc.setFontSize(12);
      const b = busDetails || {};
      doc.text(`Bus: ${sanitize(b.busName)} (ID: ${sanitize(b.busId)})`, 14, 36);
      doc.text(`Route: ${sanitize(b.source)} -> ${sanitize(b.destination)}`, 14, 46);
      doc.text(`Date: ${sanitize(b.date)}`, 14, 56);
      doc.text(`Price / seat: ₹${sanitize(b.price)}`, 14, 66);

      // Contact
      doc.text('Contact:', 14, 82);
      const contact = { phone: contactInfo.nameNumber, whatsappNumber: contactInfo.whatsappNumber, email: contactInfo.email };
      doc.text(`Phone: ${sanitize(contact.phone)}`, 14, 92);
      doc.text(`WhatsApp: ${sanitize(contact.whatsappNumber)}`, 14, 102);
      doc.text(`Email: ${sanitize(contact.email)}`, 14, 112);

      // Passengers
      doc.text('Passengers:', 14, 128);
      let y = 138;
      users.forEach((p, idx) => {
        doc.text(`${idx + 1}. ${sanitize(p.name)} - Age: ${sanitize(p.age)} - Gender: ${sanitize(p.gender)}`, 14, y);
        y += 8;
        if (y > 270) { doc.addPage(); y = 20; }
      });

      const totalPaid = b.totalAmount || ((users.length || 0) * (b.price || 0));
      // totalPaid might be in paise or rupees depending where set — try to print raw
      doc.text(`Total Paid: ₹${sanitize(totalPaid)}`, 14, y + 12);

      doc.save('booking-ticket.pdf');

    } catch (err) {
      console.error('Failed to generate PDF', err);
    } finally {
      // clear contexts
      try {
        clearPassengers && clearPassengers();
        setSeatsCount && setSeatsCount(0);
        updateContact && updateContact(null);
        selectBus && selectBus(null);
      } catch (e) {
        console.error('Cleanup error', e);
      }
      // navigate home
      navigate('/');
    }
  };

  if (numberOfSeats <= 0) {
    return <div className="uf-error">🚫 You can't proceed to this page</div>;
  }

  const num = '8688553153';
  const l = `https://wa.me/${num}?text=Hello%20this%20is%20a%20test%20message!`;

  return (
    <div className="uf-container">
      <h2 className="uf-title">Enter User Details</h2>

      {/* Users row — cards sit side-by-side and wrap */}
      <div className="uf-usersRow">
        {users.map((user, index) => (
          <div key={index} className="uf-userBox">
            <h3 className="uf-subTitle">User {index + 1}</h3>

            {/* Column layout inside each card */}
            <input
              type="text"
              placeholder="Name"
              value={user.name}
              onChange={(e) => handleUserChange(index, "name", e.target.value)}
              className="uf-input"
            />

            <input
              type="number"
              inputMode="numeric"
              placeholder="Age"
              value={user.age}
              onChange={(e) => {
                const val = e.target.value;
                if (val === '' || (Number(val) >= 1 && Number(val) <= 120)) {
                  handleUserChange(index, "age", val);
                }
              }}
              min="2"
              max="120"
              className="uf-input"
            />

            <div className="uf-genderBox">
              {['Male', 'Female', 'Other'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleUserChange(index, "gender", option)}
                  className={`uf-genderBtn ${user.gender === option ? 'active' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact info at the bottom */}
      <div className="uf-contactBox">
        <div className="uf-contactInner">
          <h3 className="uf-subTitle">Contact Information</h3>
          <input
            type="text"
            placeholder="Name Number"
            value={contactInfo.nameNumber}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, nameNumber: e.target.value })
            }
            className="uf-input"
          />
          <input
            type="text"
            placeholder="WhatsApp Number"
            value={contactInfo.whatsappNumber}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, whatsappNumber: e.target.value })
            }
            className="uf-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo({ ...contactInfo, email: e.target.value })
            }
            className="uf-input"
          />
        </div>
        <div className="uf-contactemoji">
          <div className="uf-emoji-icon">📞</div>
        </div>

      </div>

      {/* Proceed to Payment Button */}
      <div className="uf-buttonContainer">
        <button onClick={handleProceedToPayment} className="uf-proceedBtn">
          💳 Proceed to Payment
        </button>
      </div>

    </div>
  );
};

export default UserForm;
