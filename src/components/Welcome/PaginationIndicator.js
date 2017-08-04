import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class PaginationIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem(index,selected) {
    let style = [styles.base]
    if (selected)
      style.push(styles.selected)
    return <View key={index} style={style} />
    
  }

  renderIndicators() {
    let { current, length } = this.props
    
    let indicator = []
    for (i = 0; i < length; i++){
      indicator.push(this.renderItem(i, i === current))
    }
    return indicator
  }
  
  render() {
    return (
      <View style={styles.container}>
        {this.renderIndicators()}
      </View>
    )
  }
}

let styles = {
  container: {
    flexDirection: 'row'
  },
  base: {
    height: 10,
    width: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginLeft: 5,
  },
  selected: {
    backgroundColor: '#15B4F1'
  }
}