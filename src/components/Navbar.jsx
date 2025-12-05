import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Booking", path: "/booking" },
  { label: "Cancel", path: "/cancel" },
  { label: "History", path: "/history" }
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      {navItems.map(({ label, path }) => {
        const isActive = pathname === path;
        return (
          <Link
            key={path}
            to={path}
            className="nav-link"
            style={{
              color: isActive ? "#5CE1E6" : "#000",
              borderBottom: isActive
                ? "2px solid #5CE1E6"
                : "2px solid transparent"
            }}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
