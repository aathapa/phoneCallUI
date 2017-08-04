import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import SelectCountry from '../../components/SelectCountry/SelectCountry';

class SelectCountryContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SelectCountry navigation = {this.props.navigation} />
    );
  }
}

export default SelectCountryContainer;