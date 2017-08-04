import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { Icons } from '../../common';
import ButtonPlatform from '../../components/ButtonPlatform/Button';
 
class SelectCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: 'Choose Your Country',

    }
  }

  render() {
    const { navigation } = this.props;
    const { state } = navigation;
    return (
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{}}>
            <View style={{ marginTop: 30, }}>
              <Text style={{ fontSize: 18, textAlign: 'center', color: '#249CE5' }}>Enter Your Phone Num</Text>
            </View>
            <View style={{ margin: 10, }}>
              <Text style={{ textAlign: 'center' }}>Make sure you enter valid phone number so that we can send you code</Text>
            </View>

          </View>
          <View style={{ marginHorizontal: 15, }}>
            <View style={{ borderBottomWidth: 1, borderColor: '#ddd', height: 40 }}>
              <TouchableWithoutFeedback onPress={() => alert('ywahh')}>
                <View style={{ marginTop: 15, flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 5 }}>
                    <Text style={{ color: 'black' }}>Nepal(+977)</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <IonIcons name={Icons.arrowDropdown} size={20} />
                  </View>
                </View>

              </TouchableWithoutFeedback>
            </View>
            <View style={{ marginTop: 30, borderBottomWidth: 1, borderColor: '#ddd' }}>
              <TextInput
                style={{ height: 40, }}
                underlineColorAndroid='transparent'
                keyboardType='numeric'
              />
            </View>
          </View>
          <View style={{ alignItems: 'center', height: 50, marginTop: 25 }}>
            <ButtonPlatform
              onPress={() => navigation.navigate('Verification')}
            >
              <View
                style={{
                  borderRadius: 25,
                  height: 50,
                  width: 150,
                  backgroundColor: '#15B4F1',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text style={{ color: '#fff' }}>Continue</Text>
              </View>

            </ButtonPlatform>
          </View>
        </View>
      </TouchableWithoutFeedback>
      
    );
  }
}

export default SelectCountry;