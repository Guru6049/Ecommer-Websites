import React, { useState } from 'react';
// import '../styles/login.css';

const Logins = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

   const handleSubmit = (e)=>{
        e.preventDefault();      

        if(!email.trim())
        {           
            setMessage("Please enter the valid email");
            return;
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {  

        method : 'POST',
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({email})
       })
       .then(response=>{
        if(!response.ok)
        {
            console.log(email);
            
            throw new (`HTTP error! Status: ${response.status}`)
        }
        return response.json();
       })
       .catch(error=>{
        console.log('Fetch error:', error);
        setMessage('Error sending OTP. Please try again later.');
        
       })
   }

    return (
        <div className="login-container">
            <h2 className="title">Analytics Dashboard</h2>
            <div className="login-box">
                <div className="left">
                    <h3>Sign In</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            required
                        />
                        <button type="submit">Send OTP</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
                <div className="right">
                    <p>Web Application with Analytics Dashboard</p>
                </div>
            </div>
            <footer>
                &copy; 2025, Greendzine Technologies Pvt. Ltd. All Rights Reserved.
            </footer>
        </div>
    );
};

export default Logins;
