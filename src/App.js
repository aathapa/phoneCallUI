import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import AppRouter from './Routes';

export default class App extends Component{
  render() {
    return (
      <AppRouter />
    );
  }
}