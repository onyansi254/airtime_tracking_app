import React from 'react';
import { View, Text, Button } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="View Usage" onPress={() => navigation.navigate('Usage')} />
      <Button title="Manage Disputes" onPress={() => navigation.navigate('Dispute')} />
    </View>
  );
};

export default Dashboard;
