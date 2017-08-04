import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { 
  loadingScreen,
  welcomeScreen,
  selectCountry,
  chooseCountry,
  verification,
  recentCalls,
  keypad,
  favourite,
  more
} from './containers';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Icons } from './common';

const select_Country = StackNavigator({
  SelectCountry: {
    screen: selectCountry,
    navigationOptions: {
      title: 'Select Your Country',
      headerStyle: {
        backgroundColor: '#249CE5'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
})
const choose_country = StackNavigator({
  ChooseCountry: {
    screen: chooseCountry,
    navigationOptions: {
      title: 'Choose Country',
      headerStyle: {
        backgroundColor: '#249CE5'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
})

const Verification = StackNavigator({
  Verification: {
    screen: verification,
    navigationOptions: {
      title: 'Enter Verification Code',
      headerStyle: {
        backgroundColor: '#249CE5'
      },
      headerTitleStyle: {
        color: '#fff'
      }
    }
  }
})

const Tabs = TabNavigator({
  Home: {
    screen: recentCalls,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.home} size={25} color={tintColor} />
    }
  },
  Keypad: {
    screen: keypad,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.keypad} size={25} color={tintColor} />
    }
  },
  Favourite: {
    screen: favourite,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.favorites} size={25} color={tintColor} />
    }
  },
  More: {
    screen: more,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <IonIcons name={Icons.more} size={25} color={tintColor} />
    }
  },
})

const AppRouter = StackNavigator({
  
  Loaging: {
    screen: loadingScreen
  },
  Welcome: {
    screen: welcomeScreen
  },
  Verification: {
    screen: Verification
  },
  ChooseCountry: {
    screen: choose_country
  },
  SelectCountry: {
    screen: select_Country
  },
  RecentCalls: {
    screen: recentCalls
  },
  Tabs: {
    screen: Tabs
  }, 

},
  {
  headerMode: 'none'
})

export default AppRouter;