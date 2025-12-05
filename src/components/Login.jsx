import React from 'react'
import './Login.css'
import { AuthContext } from '../context/AuthContext' // adjust path if needed

const Login = () => {
  const { login } = React.useContext(AuthContext); // ✅ get login from context
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });  
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const result = login(formData.email, formData.password); // ✅ Call login function from AuthContext
    if (result.success) {
      alert("Login successful!");
      // redirect to homepage or dashboard
      window.location.href = "/"; // or use navigate from react-router
    } else {
      alert("Login failed: " + result.message);
    }
  };



  return (
    <div>
        <form action="" className='login-form' onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label  htmlFor="username">Username:</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            <button type="submit">Login</button>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
            <p>Forgot your password? <a href="#">Reset it</a></p>
        </form>
      
    </div>
  )
}

export default Login
