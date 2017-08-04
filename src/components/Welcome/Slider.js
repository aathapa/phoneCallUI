import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView
} from 'react-native';
import SliderContent from './SliderContent';

const { height, width } = Dimensions.get('window');

export default class Slider extends React.Component {

  constructor(props) {
    super(props);
  }

  renderSlides() {
    return this.props.data.map((pageData, index) => {
      return (
        <View key={index} style={{ flex: 1, width: width }}>
          <SliderContent
            image={pageData.image}
            title={pageData.title}
            subTitle={pageData.subTitle}
          />
        </View>
      );
    })
  }

  onScrollEnd(e) {
    let contentOffset = e.nativeEvent.contentOffset.x;
    let viewSize = e.nativeEvent.layoutMeasurement.width;
    let pageNum = Math.floor(contentOffset / viewSize);
    if (this.props.onChange) {
      this.props.onChange(pageNum);
    }

  }

  render() {
    return (
      <ScrollView
        pagingEnabled
        horizontal
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => this.onScrollEnd(event)}
        showsHorizontalScrollIndicator={false}

      >
        {this.renderSlides()}
      </ScrollView>
    )
  }
}