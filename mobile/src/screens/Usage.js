import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Usage = () => {
  const [usage, setUsage] = useState('');

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
    <View>
      <Text>Usage History</Text>
      <Text>{usage}</Text>
    </View>
  );
};

export default Usage; 
