import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Verification from '../../components/Verification/Verification';

export default class VerificationContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Verification navigation={this.props.navigation}/>
    );
  }
}