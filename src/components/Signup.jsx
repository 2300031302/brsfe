import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // adjust path if needed
import "./Signup.css";
import emailjs from "emailjs-com";

emailjs.init("j2WdVyiwi3sQsH2Zp");

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // OTP flow state
  const [stage, setStage] = useState("form"); // 'form' | 'otp'
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [otpInput, setOtpInput] = useState("");
  const [otpError, setOtpError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);

  const sendOtpToMail = (email, otp) => {
    // send using emailjs template
    emailjs.send("service_65qu4pj", "template_3wjtowq", {
      passcode: otp,
      time: new Date(Date.now() + 15 * 60000).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }),
      email: email,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // helper to generate a 6-digit OTP
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // send OTP and start cooldown
  const sendOtp = (email) => {
    const otp = generateOtp();
    setGeneratedOtp(otp);
    try {
      sendOtpToMail(email, otp);
    } catch (err) {
      console.error("Failed to send OTP", err);
    }
    setStage("otp");
    setOtpError("");
    setResendDisabled(true);
    setResendCountdown(60);
  };

  // countdown timer for resend
  useEffect(() => {
    if (!resendDisabled) return;
    if (resendCountdown <= 0) {
      setResendDisabled(false);
      return;
    }
    const t = setInterval(() => {
      setResendCountdown((c) => c - 1);
    }, 1000);
    return () => clearInterval(t);
  }, [resendDisabled, resendCountdown]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.email) {
      alert("Please enter an email to receive OTP");
      return;
    }

    // Start OTP verification flow instead of calling signup immediately
    sendOtp(formData.email);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setOtpError("");
    if (!generatedOtp) {
      setOtpError("No OTP was generated. Please resend.");
      return;
    }
    if (otpInput.trim() === generatedOtp) {
      // OTP verified — proceed to call signup
      try {
        const result = await signup(
          formData.username,
          formData.email,
          formData.password,
          "9999999999"
        );
        if (result && result.success) {
          alert("Signup successful!");
          navigate('/');
        } else {
          const msg = (result && result.message) || "Signup failed";
          alert(msg);
        }
      } catch (err) {
        console.error(err);
        alert('Signup error');
      }
    } else {
      setOtpError("Incorrect OTP. Please try again or resend.");
    }
  };

  const handleResend = () => {
    if (resendDisabled) return;
    if (!formData.email) {
      alert('Please enter your email first');
      return;
    }
    sendOtp(formData.email);
  };

  return (
    <div>
      <div>
        {stage === 'form' && (
          <form className="signup-form" onSubmit={handleSubmit}>
            <h3>Create Account</h3>

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit">Send OTP & Verify</button>
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </form>
        )}

        {stage === 'otp' && (
          <div className="signup-otp">
            <h3>Verify your email</h3>
            <p>An OTP has been sent to <strong>{formData.email}</strong>. Enter it below to complete signup.</p>
            <form onSubmit={handleVerifyOtp}>
              <label htmlFor="otp">OTP:</label>
              <input
                type="text"
                name="otp"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                maxLength={6}
                placeholder="6-digit code"
              />
              {otpError && <div className="otp-error">{otpError}</div>}
              <div style={{ marginTop: 12 }}>
                <button type="submit">Verify & Sign Up</button>
                <button type="button" onClick={handleResend} disabled={resendDisabled} style={{ marginLeft: 8 }}>
                  {resendDisabled ? `Resend (${resendCountdown}s)` : 'Resend OTP'}
                </button>
              </div>
            </form>
            <div style={{ marginTop: 10 }}>
              <button type="button" onClick={() => setStage('form')}>Edit details</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;

