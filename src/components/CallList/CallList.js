import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

class CallList extends Component {
  constructor(props) {
    super(props);
  }

  renderCallList(item, index) {
    return (
      <View style={{flex: 1,height: 80,marginTop: 10}}>
        <TouchableOpacity
          style={{ flex: 1,flexDirection: 'row',}}
        >
          <View style={{ flex: 1, justifyContent: 'center'}}>
            <Image
              source={item.image} 
              style={{height: 50,width: 50,borderRadius: 25}}
            />
          </View>
          <View style={{ flex: 2, justifyContent: 'center'}}>
            <View>
              <Text>{item.name}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, color: '#858585'}}>{item.phNum}</Text>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'center'}}>
            <View>
              <Text>
                {item.duration}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12, color: '#858585' }}>{item.cost}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => this.renderCallList(item, index)}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#EBEBEB'}} /> }
      />
    );
  }
}

export default CallList;