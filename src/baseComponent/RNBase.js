import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import URL, {ScreenSize} from '../Config';

export default class RNBase extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{height: ScreenSize.height - 70}}>
        <Text>ttt</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
