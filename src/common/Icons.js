import {
  Platform
} from 'react-native';

export default Icons = {
  ...Platform.select({
    ios: {
      arrowDropdown: 'ios-arrow-forward',
      add: 'md-add-circle',
      home: 'ios-home-outline',
      keypad: 'ios-keypad-outline',
      favorites: 'ios-star-outline',
      more: 'ios-more-outline',
      search: 'ios-search',
      add: 'ios-add'
    },
    android: {
      arrowDropdown: 'md-arrow-forward',
      add: 'md-add-circle',
      home: 'ios-home',
      keypad: 'md-keypad',
      favorites: 'md-star',
      more: 'md-more',
      search: 'md-search',
      add: 'md-add'
    }
  })
}