import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Keypad from '../../components/Keypad/Keypad';

class KeypadContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Keypad />
    );
  }
}

export default KeypadContainer;