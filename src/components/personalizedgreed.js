// src/components/PersonalizedGreeting.js
import React, { useState } from 'react';

const PersonalizedGreeting = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Enter Your Name:</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name"
      />
      {name && <h3>Hello, {name}!</h3>}
    </div>
  );
};

export default PersonalizedGreeting;
