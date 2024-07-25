import React, { useState } from 'react';
import axios from 'axios';

const Dispute = () => {
  const [dispute, setDispute] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('/api/dispute', { dispute });
      alert('Dispute submitted');
    } catch (error) {
      console.error('Dispute submission failed', error);
    }
  };

  return (
    <div>
      <h1>Submit a Dispute</h1>
      <textarea value={dispute} onChange={(e) => setDispute(e.target.value)} />
      <button onClick={handleSubmit}>Submit Dispute</button>
    </div>
  );
};

export default Dispute;