/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import URL, {ScreenSize} from '../Config';

export default class ComboBox extends Component {
  static defaultProps = {
    options: ['option1', 'option2']
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flexDirection: 'row', height: 40, alignItems: 'center', minWidth: 40}}>
        <Text style={{color: 'gray', fontSize: 13}}>{this.props.options[0]}</Text>
        <View style={{height: 40, width: 25, alignItems: 'center', justifyContent: 'center'}}>
          <IconMaterialCommunityIcons name="chevron-down" size={18} color="gray" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
