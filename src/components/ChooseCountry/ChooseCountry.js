import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import CountryList from '../../../config/CountryList';

class ChooseCountry extends Component {
  constructor(props) {
    super(props);
  }

  renderItem(item, index) {
    return (
      <View style={{ height: 50, backgroundColor: '#fff', justifyContent: 'center' }}>
        <View style={{marginHorizontal: 15}}>
          <TouchableOpacity
            onPress={() => this.props.navigate('SelectCountry',{ countryName: item.name, countryCode: item.dial_code })}
          >
            <Text>{item.name}({item.dial_code})</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    );
  }

  render() {
    return (
      <View>
        <Text>Choose Country</Text>
        <FlatList
          data={CountryList}
          renderItem={({ item, index }) => this.renderItem(item, index)}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => <View style={{height: 1,backgroundColor: '#ddd'}} />}
        />
      </View>
    );
  }
}

export default ChooseCountry;