/* eslint-disable react-native/no-inline-styles */
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
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import URL, {ScreenSize} from '../Config';
import ComboBox from '../baseComponent/ComboBox';
import BookTabBar from './BookTabBar';

export default class BookScreen extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {
        name: '深入理解计算机系统',
        cover_url: 'https://www.linuxprobe.com/wp-content/uploads/2018/04/s1470003.jpg',
        author: ' Randal E.Bryant, David O\'Hallaron',
        press: '机械工业出版社',
        translator: '龚奕利, 贺莲',
        publishDate: '2016-11',
        ISBN: '9787111544937',

        questionCnt: 273,
        ideaCnt: 142,
        commentCnt: 502,
      },
    };
  }

  render() {
    let book = this.state.bookInfo;
    let bookBaseInfo = book.author + ' / ' + book.press + ' / ' + book.publishDate;
    if (book.translator) {
      bookBaseInfo = bookBaseInfo + ' / ' + book.translator + '译';
    }

    return (
      <View style={{height: ScreenSize.height - 70}}>

        {/* 标题栏 */}
        <View style={styles.headerContainer}>
          <View style={styles.titleStyle}>
            <TouchableHighlight
              style={styles.backIcon}
              onPress={() => this.props.navigation.goBack()}
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

        {/* 书本信息，“关注、提问、写想法”入口。 */}
        <View style={{flexDirection: 'row', padding: 10, borderBottomColor: '#f8f8f8', borderBottomWidth: 10}}>
          <View style={{margin:5, elevation: 5, borderRadius: 5, backgroundColor:'red'}}>
            <Image source={{uri:book.cover_url}} style={{width:100, height:142, borderRadius: 5}} />
          </View>

          <View style={{flex:1, paddingLeft: 10, paddingTop: 10, paddingRight: 5, paddingBottom: 5, justifyContent:'space-between'}}>
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold', width: ScreenSize.width - 160}}>{book.name}</Text>
              <Text style={{fontSize:11, width: ScreenSize.width - 145}}>{bookBaseInfo}</Text>
              {/* <Text style={{fontSize:11, width: ScreenSize.width - 145}}>{book.press}</Text> */}
            </View>

            <View>
              <View style={{flexDirection: 'row', width: ScreenSize.width - 145}}>
                <Text style={{fontSize:12}}>{book.questionCnt}</Text>
                <Text style={{fontSize:12, color: 'gray'}}>个问题  </Text>
                <Text style={{fontSize:12}}>{book.ideaCnt}</Text>
                <Text style={{fontSize:12, color: 'gray'}}>个想法  </Text>
                <Text style={{fontSize:12}}>{book.commentCnt}</Text>
                <Text style={{fontSize:12, color: 'gray'}}>条评论  </Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop:5, justifyContent: 'space-between'}}>
                <TouchableHighlight style={[styles.operateButtonView, {borderWidth: 0, backgroundColor: '#039BE5'}]}>
                  <Text style={{color: 'white'}}>关注</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.operateButtonView}>
                  <Text>提问题</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.operateButtonView}>
                  <Text>写想法</Text>
                </TouchableHighlight>
              </View>
            </View>

          </View>
        </View>

        {/* 范围选择 */}
        <ScrollableTabView renderTabBar={() => <BookTabBar/>}>
          <View tabLabel="热门" style={{}}>
            <View style={{height: 200, width: 300}}>
              <Text>ttt</Text>
            </View>
          </View>
          <View tabLabel="章节" style={{}}>
            <View style={{height: 200, width: 300}}>
              <Text>ttt</Text>
            </View>
          </View>

        </ScrollableTabView>

        <Text>ttt</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  operateButtonView: {
    width: (ScreenSize.width - 165) / 3,
    height: 30,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

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
    // fontWeight: 'bold',
    // color: '#000',
  },
});
