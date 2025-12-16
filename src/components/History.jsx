import React, { useEffect, useState, useContext } from 'react';
import './History.css';
import { AuthContext } from '../context/AuthContext';
import { getBookingsByUserId, getBusById, Bookings } from '../storage/Storagee';

const History = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewModal, setReviewModal] = useState(null); // { bookingId, rating, comment }
  const [showReviewForm, setShowReviewForm] = useState(false);

  const loadBookings = async () => {
    setLoading(true);
    if (!user) {
      setBookings([]);
      setLoading(false);
      return;
    }
    try {
      const bs = await getBookingsByUserId(user.id);
      // enrich with bus info to display name/route and sort by date
      const enriched = await Promise.all(bs.map(async (b) => {
        const bus = await getBusById(b.busId);
        return { ...b, bus };
      }));
      // Sort by date in descending order (newest first)
      enriched.sort((a, b) => new Date(b.date) - new Date(a.date));
      setBookings(enriched);
    } catch (err) {
      console.error('Failed to load bookings', err);
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, [user]);

  const isTravelDate = (date) => {
    const bookingDate = new Date(date);
    const today = new Date();
    return bookingDate < today;
  };

  const handleCancel = (bookingId) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;
    
    const booking = Bookings.find(b => b.id === bookingId);
    if (booking) {
      booking.cancel = true;
      loadBookings(); // refresh list
    }
  };

  const handleReviewClick = (bookingId) => {
    setReviewModal({ bookingId, rating: 5, comment: '' });
    setShowReviewForm(true);
  };

  const submitReview = () => {
    if (!reviewModal.rating || !reviewModal.comment.trim()) {
      alert('Please fill in rating and comment');
      return;
    }

    const booking = Bookings.find(b => b.id === reviewModal.bookingId);
    if (booking) {
      booking.review = {
        rating: reviewModal.rating,
        comment: reviewModal.comment,
        date: new Date().toISOString().split('T')[0]
      };
      setShowReviewForm(false);
      setReviewModal(null);
      loadBookings();
    }
  };

  if (!user) {
    return (
      <div className="history-wrap">
        <div className="history-empty">Please log in to see your booking history.</div>
      </div>
    );
  }

  return (
    <div className="history-wrap">
      <div className="history-header">
        <h2>Your Bookings</h2>
        <div>
          <button className="refresh-btn" onClick={loadBookings}>🔄 Refresh</button>
        </div>
      </div>

      {loading && <div className="history-loading">Loading bookings…</div>}

      {!loading && bookings.length === 0 && (
        <div className="history-empty">You don't have any bookings yet.</div>
      )}

      <div className="history-grid">
        {bookings.map((bk) => (
          <div className={`history-card ${bk.cancel ? 'cancelled' : ''}`} key={bk.id}>
            <div className="card-left">
              <div className="bus-name">{bk.bus?.name || 'Unknown Bus'}</div>
              <div className="route">{bk.source} → {bk.destination}</div>
              <div className="date">📅 {bk.date}</div>
              {bk.cancel && <div className="cancelled-badge">❌ CANCELLED</div>}
            </div>

            <div className="card-right">
              <div className="seats">
                <span className="seats-label">Seats:</span>
                <div className="seat-list">
                  {(bk.seats || []).map((s) => (
                    <span className="seat-pill" key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="amount">💰 ₹{bk.totalAmount}</div>
              <div className="contact">📧 {bk.contact?.email || bk.contact?.phone || 'N/A'}</div>
            </div>

            {/* Action buttons */}
            <div className="card-actions">
              {!bk.cancel && !isTravelDate(bk.date) && (
                <button className="btn-cancel" onClick={() => handleCancel(bk.id)}>
                  ✕ Cancel
                </button>
              )}
              {!bk.cancel && isTravelDate(bk.date) && (
                <>
                  {bk.review ? (
                    <div className="review-display">
                      <div className="review-stars">⭐ {bk.review.rating}/5</div>
                      <div className="review-comment">"{bk.review.comment}"</div>
                    </div>
                  ) : (
                    <button className="btn-review" onClick={() => handleReviewClick(bk.id)}>
                      ⭐ Give Review
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Review Modal */}
      {showReviewForm && reviewModal && (
        <div className="modal-overlay" onClick={() => setShowReviewForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Rate Your Journey</h3>
            <div className="review-form">
              <label>Rating:</label>
              <div className="rating-input">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className={`star-btn ${reviewModal.rating >= num ? 'active' : ''}`}
                    onClick={() => setReviewModal({ ...reviewModal, rating: num })}
                  >
                    ⭐
                  </button>
                ))}
              </div>

              <label>Your Comment:</label>
              <textarea
                className="review-textarea"
                placeholder="Share your experience..."
                value={reviewModal.comment}
                onChange={(e) => setReviewModal({ ...reviewModal, comment: e.target.value })}
              />

              <div className="modal-actions">
                <button className="btn-submit" onClick={submitReview}>Submit Review</button>
                <button className="btn-cancel-modal" onClick={() => setShowReviewForm(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default History
