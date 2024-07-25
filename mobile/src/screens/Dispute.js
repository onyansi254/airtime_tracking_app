import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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
    <View>
      <Text>Submit a Dispute</Text>
      <TextInput value={dispute} onChangeText={setDispute} multiline />
      <Button title="Submit Dispute" onPress={handleSubmit} />
    </View>
  );
};

export default Dispute;