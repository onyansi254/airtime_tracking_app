import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => window.location.href = '/usage'}>View Usage</button>
      <button onClick={() => window.location.href = '/dispute'}>Manage Disputes</button>
    </div>
  );
};

export default Dashboard;