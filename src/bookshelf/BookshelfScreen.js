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

import URL, {ScreenSize} from '../Config';

export default class BookshelfScreen extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      bookList: [
        {
          name: 'APUE',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
        {
          name: 'csapp',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
        {
          name: 'APUE',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
        {
          name: 'csapp',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
        {
          name: 'APUE',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
        {
          name: 'csapp',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
        {
          name: 'APUE',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
        {
          name: 'csapp',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
        {
          name: 'APUE',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
        {
          name: 'csapp',
          cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        },
      ],
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData = () => {
    fetch(URL.allBooks, {credentials: 'same-origin'})
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.msg === 'success') {
          this.setState({bookList: responseJson.data});
        }
        // else if (responseJson.msg === 'not_logged_in') {
        //   this.setState({refreshing: false, got_no_data:true, no_data_hint: '您还没有登录~'});
        //   this.props.navigation.navigate('LoginScreen');
        // } else {
        //   this.setState({refreshing: false, got_no_data:true, no_data_hint: '出现未知错误'});
        // }

      }).catch((error) => {
        // this.setState({refreshing: false, got_no_data:true, no_data_hint: '服务器出错了'});
        alert(error);
      });
  }

  _renderBooks = () => {
    return [...Array(Math.round(this.state.bookList.length / 3) + 1).keys()].map(i => (
      <View style={{flexDirection: 'row', paddingTop: 25, paddingLeft: 25, justifyContent: 'flex-start'}}>
        {(() => this.state.bookList.slice(i * 3, i * 3 + 3).map(book => (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BookScreen', {book: book})}
            style={{paddingRight: (ScreenSize.width - 293) / 2}}
            >
            <View>
              <Image source={{uri:book.cover_url}} style={{width:81, height:115, borderWidth: 0.5, borderColor: 'lightgray'}} />
              <Text style={{width: 81, fontSize: 12}}>{book.name}</Text>
            </View>
          </TouchableOpacity>
        )))()}
      </View>
    ));
  }

  render() {
    return (
      <View style={{height: ScreenSize.height - 70}}>
        <View style={{alignItems: 'center', flexDirection: 'row', paddingHorizontal: 15}}>
          <Text style={{flex: 1}} />
          <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'center', paddingVertical: 17, flex: 1}}>
            关注
          </Text>
          <Text style={{fontSize: 16, color: 'gray', textAlign: 'right', paddingVertical: 10, flex: 1}}>
            编辑
          </Text>
        </View>

        <ScrollView>

          <TouchableOpacity style={styles.search}>
            <Text style={{paddingLeft: 10, color: '#8B8B8B'}}
            ><IconFontAwesome name="search" size={14} color="#8B8B8B" />  搜索</Text>
            <Text style={{paddingHorizontal: 10, borderLeftWidth: 0.5, borderLeftColor: '#8B8B8B', color: '#8B8B8B'}}>分类检索</Text>
          </TouchableOpacity>

          {this._renderBooks()}


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    height: 34,
    borderRadius: 17,
    marginHorizontal: 15,
  },
});
