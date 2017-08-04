import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class ButtonPlatform extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onPress, children, style } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={style}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

export default ButtonPlatform;
