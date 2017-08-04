import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import Favourite from '../../components/Favourites/Favourites';

class FavouriteContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Favourite />
    );
  }
}

export default FavouriteContainer;