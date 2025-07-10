import React from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import StackNavigation from './Navigation/StackNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>
        <StatusBar />
        <StackNavigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;