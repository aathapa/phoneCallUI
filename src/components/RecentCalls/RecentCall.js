import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import NavBar from '../NavBar/NavBar';
import RecentCallLogContent from './RecentCallLoglContent';
import Contacts from './Contacts';

class RecentCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'recentCalls'
    }
  }

  renderMargin() {
    if (this.state.selected === 'recentCalls') {
      return {
        marginLeft: 15
      }
    }
    else {
      return {
        marginRight: 15
      }
    }
  }

  renderScreen() {
    if (this.state.selected === 'recentCalls') {
      return <RecentCallLogContent />
    }
    return <Contacts />
  }

  render() {
    const recentColor = this.state.selected === 'recentCalls' ? { color: '#249CE5' } : { color: '#AFAFAF'}
    const contactColor = this.state.selected === 'contacts' ? { color: '#249CE5', } : { color: '#AFAFAF'}
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <NavBar />
        <View style={{flex: 1, marginTop: 15,flexDirection: 'row',marginHorizontal: 15}}>
          <TouchableOpacity
            onPress={()=> this.setState({selected: 'recentCalls'})}  
            style={{ flex: 1 }}
          >
            <Text style={recentColor}>RECENT CALLS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> this.setState({selected: 'contacts'})}  
            style={{ flex: 1, alignItems: 'flex-end' }}
          >
            <Text style={contactColor}>CONTACTS</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.cardStyles,this.renderMargin()]}>
          {this.renderScreen()}
        </View>
      </View>
    );
  }
}
const styles = {
  cardStyles: { 
    backgroundColor: '#fff', 
    flex: 11,
    shadowColor: '#000', 
    shadowOffset: { 
      width: 0, 
      height: 8
    }, 
    shadowOpacity: 0.2 
  }
}

export default RecentCall;