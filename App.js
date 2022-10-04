import React from 'react';
import { TabNavigator } from 'react-navigation';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';

export default class App extends React.Component {

  handleClick() {
    Alert.alert('Hello !');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Click on the button : </Text>
        <Button onPress={this.handleClick.bind(this)} title="Go" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:"20%"
  },
});