import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyCardsScreen = ({isDarkTheme}) => {
  return (
    <View style={styles.container}>
      <Text>My Cards Screen</Text>
    </View>
  );
};

export default MyCardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})