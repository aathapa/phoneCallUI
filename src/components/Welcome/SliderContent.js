import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

class SliderContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, title, subTitle } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center',}}>
        <View style={{flex: 10,marginTop: 100}}>
          <Image source={image} style={{ height: 250, width: width }} /> 
        </View>
        <View style={{ flex: 2}}> 
          <Text style={{fontSize: 18}}>{title}</Text>
        </View>
        <View style={{flex: 2,}}>
          <Text style={{ textAlign: 'center',fontSize: 12}}>{subTitle}</Text>
        </View>
      </View>
    );
  }
}

export default SliderContent;