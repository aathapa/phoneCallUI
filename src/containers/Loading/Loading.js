import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import { NavigationActions} from 'react-navigation'
import styles from './LoadingStyle';
import { Images } from '../../common';

const { height,width } = Dimensions.get('window')

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Welcome'})
        ]
      })
      this.props.navigation.dispatch(resetAction)
    },1000)
  }
  


  render() {
    return (
      <View style={styles.laodingMainScreen}>
        <View style={{flex: 1}}>
          <Image
            source={Images.loadingImage}
            style={{ height: height, width: width }}
            resizeMode='cover'
          />
        </View>
        <View style={{flex: 2,alignItems: 'center'}}>
          <Text style={{fontSize: 24,color: '#fff'}}>Phone Call UI</Text>
        </View>
      </View>
    );
  }
}

export default LoadingScreen;