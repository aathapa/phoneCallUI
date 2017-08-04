import React, { Component } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import ButtonPlatform from '../../components/ButtonPlatform/Button';
 
class Verification extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={{ marginTop: 30, borderBottomWidth: 1, borderColor: '#ddd' }}>
          <TextInput
            style={{ height: 40, }}
            underlineColorAndroid='transparent'
            placeholder='Enter verification code '
          />
        </View>
        <View style={{ alignItems: 'center', height: 50, marginTop: 25 }}>
          <ButtonPlatform
            onPress={() => navigation.navigate('RecentCalls')}
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
              <Text style={{ color: '#fff' }}>Enter PhoneCall UI</Text>
            </View>

          </ButtonPlatform>
        </View>
        <View style={{marginTop: 20,alignItems: 'center'}}>
          <TouchableOpacity>
            <Text>No Code? Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
 
export default Verification;