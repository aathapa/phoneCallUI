import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import ChooseCountry from '../../components/ChooseCountry/ChooseCountry';

class ChooseCountryContainer extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ChooseCountry navigate={navigate} />
    );
  }
}

export default ChooseCountryContainer;