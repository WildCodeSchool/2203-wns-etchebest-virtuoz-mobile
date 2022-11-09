import React from 'react';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default class TabOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Onglet un',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Tu es sur l'onglet 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});