import React from 'react';
import { TabNavigator } from 'react-navigation';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';

export default TabNavigator({
  TabOne: { screen: TabOne },
  TabTwo: { screen: TabTwo },
});