import React, { Component } from 'react';
import { 
  View,
  Text,
  StatusBar
} from 'react-native'
import Welcome from '../../components/Welcome/Welcome';
import { NavigationActions } from 'react-navigation';
 
class WelcomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  routeToSelect() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'SelectCountry' })
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Welcome navigate={navigate} routeToSelect={() => this.routeToSelect()} />
    );
  }
}
 
export default WelcomeContainer;