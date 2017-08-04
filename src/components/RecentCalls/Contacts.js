import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Icons } from '../../common';

class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F8F8F8'}}>
        <View style={{flex: 1,flexDirection: 'row',backgroundColor: '#fff'}}>
          <View style={{flex: 1,justifyContent: 'center'}}>
            <IonIcons name={Icons.search} color='#BEBEBE' size={25} />
          </View>
          <View style={{ flex: 7, justifyContent: 'center'}}>
            <TextInput
              placeholder='Search'
              style={{ backgroundColor: '#fff' }}
              placeholderTextColor='#BFBEBE'
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center'}}>
            <IonIcons name={Icons.add} size={40} color='#15B4F1' />
          </View>
        </View>
        <View style={{flex: 9}}>
          <View>
            <View>
              
            </View>
            <Text>A</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Contacts;