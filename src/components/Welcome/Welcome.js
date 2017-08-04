import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { Images } from '../../common';
import PaginationIndicator from './PaginationIndicator';
import Slider from './Slider';
import ButtonPlatform from '../../components/ButtonPlatform/Button';
import  DATA  from '../../../config/Data';


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  changeIndex(index) {
    this.setState({ index })
  }


  render() {
    const { navigate, routeToSelect } = this.props;
    return (
      <View style={styles.welcomeContainer}>
        <View style={{flex: 1}}>
          <Slider
            onChange={(index) => this.changeIndex(index)}
            data={DATA}
          />
        </View>
        <View style={{flex: 0.1,}}> 
          <PaginationIndicator length={3} current={this.state.index} />
        </View>
        <View style={{flex: 0.2,}}>
          <ButtonPlatform
            onPress={() => routeToSelect()}
          >
            <View style={styles.buttonStyle}>
              <Text style={styles.whiteColor}>Get Started</Text>
            </View>
          </ButtonPlatform>
        </View>
      </View>
    );
  }
}

const styles = {
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  buttonStyle: {
    borderRadius: 25,
    height: 50,
    width: 200,
    backgroundColor: '#15B4F1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteColor: {
    color: '#fff'
  }
}

export default Welcome