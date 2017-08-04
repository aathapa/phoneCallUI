import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Icons } from '../../common';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ height: 90, backgroundColor: '#249CE5', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3}}>
        <View style={{ flex: 1, flexDirection: 'row',marginTop: 10 }}>
          <View style={{ flex: 5, justifyContent: 'center', marginLeft: 15 }}>
            <View>
              <Text style={{color: '#fff',fontSize: 12}}>Current Balance</Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={{color: '#fff',fontSize: 18}}>$201.345 USD</Text>
            </View>
          </View>
          
          <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <IonIcons name={Icons.add} color='#fff' size={30} />
          </TouchableOpacity>
          <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#0288D1',padding: 10,paddingRight: 15,borderRadius: 5}}>
              <Text style={{color: '#fff',fontSize: 12}}>Bonus Minutes</Text>
              <Text style={{ color: '#fff',fontSize: 16 }}>15 min 12 sec</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default NavBar;