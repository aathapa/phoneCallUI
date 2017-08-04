import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import RecentCall from '../../components/RecentCalls/RecentCall';

class RecentCallsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RecentCall />
    );
  }
}

export default RecentCallsContainer;