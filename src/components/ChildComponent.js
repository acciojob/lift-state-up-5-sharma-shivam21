import React, { useState } from "react";

const ChildComponent = ({ isLoogedIn, onLogin }) => {
  const [username, setUsername] = useState('');
  const [userpassword, setUserPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // fixed typo
    if (username && userpassword) {
      onLogin(); // call the parent login function 
    }
  };

  return (
    <div>
      {!isLoogedIn && (
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '12px'
          }}
        >
          <div>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              User Name
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </label>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              Password
              <input
                type="password"
                value={userpassword}
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>
          </div>
          <button type="submit" style={{width:'12vw', marginLeft:'12px', marginBottom:'12px'}}>Log in</button>
        </form>
      )}
    </div>
  );
};

export default ChildComponent;