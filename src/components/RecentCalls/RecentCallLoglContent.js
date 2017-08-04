import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import CallData from '../../../config/CallData';
import CallList from '../../components/CallList/CallList';

class RecentCallLogContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, marginLeft: 15,}}> 
        <View style={{flex: 1,justifyContent: 'center'}}>
          <Text style={{ color: '#C8C7C7'}}>Today</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#EBEBEB', }} />
        <View style={{ flex: 9}}>
          <CallList data={CallData} />
        </View>
      </View>
    );
  }
}

export default RecentCallLogContent;