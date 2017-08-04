import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  loadingScreen,
  welcomeScreen,
  selectCountry,
  chooseCountry,
  verification,
  recentCalls
} from './containers';

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

const AppRouter = StackNavigator({

  RecentCalls: {
    screen: recentCalls
  },

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


},
  {
    headerMode: 'none'
  })

export default AppRouter;