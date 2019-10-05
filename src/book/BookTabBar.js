/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import ComboBox from '../baseComponent/ComboBox';

export default class BookTabBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.tabs, this.props.style]}>
        <View style={{flexDirection: 'row'}}>
          {this.props.tabs.map((tab, i) => (
            <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
              <Text style={{
                fontSize: 14,
                height: 40,
                textAlignVertical: 'center',
                color: this.props.activeTab === i ? 'black' : 'gray',
                borderBottomWidth: this.props.activeTab === i ? 2 : 0,
                borderBottomColor: 'black',
                }}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <ComboBox options={['全部']} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 30,
  },
  tabs: {
    paddingHorizontal: 15,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f8f8f8',
  },
});
