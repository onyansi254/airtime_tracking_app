import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Usage = () => {
  const [usage, setUsage] = useState([]);

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const response = await axios.get('/api/usage');
        setUsage(response.data.usage);
      } catch (error) {
        console.error('Failed to fetch usage', error);
      }
    };
    fetchUsage();
  }, []);

  return (
    <div>
      <h1>Usage History</h1>
      <pre>{JSON.stringify(usage, null, 2)}</pre>
    </div>
  );
};

export default Usage;