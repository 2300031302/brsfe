import React from 'react';
import './Footer.css';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin
} from "lucide-react";





const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Website Info */}
                <div className="footer-info">
                    <h2>Book Booking System</h2>
                    <p>A platform to explore, reserve, and enjoy your favorite books with ease.</p>
                </div>

                {/* Social Media Links */}
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook size={20} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Twitter size={20} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                </div>
            </div>
            <hr />

            <div className="footer-bottom">
                © {new Date().getFullYear()} Book Booking System. All rights reserved.
            </div>


            







        </footer>
    );
};

export default Footer;
