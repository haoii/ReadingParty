/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import URL, {ScreenSize} from '../Config';

export default class BookScreen extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{height: ScreenSize.height - 70}}>
        <View style={styles.headerContainer}>
          <View style={styles.titleStyle}>
            <TouchableHighlight
              style={styles.backIcon}
              // onPress={() => this.props.navigation.goBack()}
              >
              <IconIonicons name="ios-arrow-back" size={25} color="gray" />
            </TouchableHighlight>
            <Text style={styles.headerTitleText}>深入理解计算机系统</Text>
          </View>

          <TouchableOpacity
            style={styles.editButton}
            // onPress={() => this._setModalVisible(true)}
            >
            <IconEntypo name="dots-three-horizontal" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <Text>ttt</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#c3c3c3',
    elevation: 2,
  },
  backIcon: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    width: 50,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: '#000',
  },
});
