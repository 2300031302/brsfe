import React from 'react'
import './Login.css'
import { AuthContext } from '../context/AuthContext' // adjust path if needed
import { useNavigate } from 'react-router-dom'
import emailjs from "emailjs-com";

emailjs.init("j2WdVyiwi3sQsH2Zp");   // example: 3HshsaJ_sd2


const Login = () => {
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext); // ✅ get login from context
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const result = await login(formData.email, formData.password); // ✅ Call login function from AuthContext
      if (result && result.success) {
        alert("✅ Login successful!");
        navigate("/"); // redirect to homepage using React Router
      } else {
        const msg = (result && result.message) || "Login failed. Invalid credentials.";
        setError(msg);
        alert("❌ " + msg);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Please try again.");
      alert("❌ Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sendOtpToMail = (email, otp) => {
    emailjs.send("service_65qu4pj", "template_3wjtowq", {
      passcode: otp,
      time: new Date(Date.now() + 15 * 60000).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) ,
      email: email,
    });
  };



  return (
    <div>
      <form className='login-form' onSubmit={handleSubmit}>
        <h3>Login</h3>
        
        {error && <div className="login-error">⚠️ {error}</div>}
        
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          disabled={loading}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange}
          disabled={loading}
          required
        />
        
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
        <p>Forgot your password? <a href="#">Reset it</a></p>
      </form>

    </div>
  )
}

export default Login
