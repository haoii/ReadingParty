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
  FlatList,
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

    this.book = this.props.navigation.getParam('book', null);

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

      hotQuestions: [
        {
          id: 101,
          userName: '王易',
          userAvatar: 'https://m.jianbihua.com/sites/default/files/styles/photo640x425/public/images/2018-03/韩风头像10.jpg',

          type: 'question',
          commentCnt: 122,

          title: '单核cpu环境下，多线程还有意义吗？',
          description: '单核cpu环境下，多线程除了在某些业务下提供编程便利性外，还有其他作用吗？是不是任何程序都可以像redis或者libuv那样使用单线程模型，既保证并发又保证性能？',
          img: 'http://images3.pianshen.com/674/d4/d47013b147ba287c847525fd551bfb6a.png',
        },
        {
          id: 102,
          userName: '程宁宁',
          userAvatar: 'http://img.wxcha.com/file/201807/13/9bbc369f6e.jpg',

          type: 'idea',
          commentCnt: 47,

          title: '这本书好棒',
          description: '强力推荐！',
          img: '',
        },
      ],
    };

  }

  componentDidMount() {
    this._fetchData();
  }

  _fetchData = () => {
    fetch(URL.questionsByBookId + this.book.id + '/', {credentials: 'same-origin'})
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.msg === 'success') {
          this.setState({hotQuestions: responseJson.data});
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

  _login_test2 = () => {

    let formData = new FormData();
    formData.append('username', 'hgf');
    formData.append('password', '1');

    fetch('http://localhost:8080/login', {
      method:'POST',
      body:formData,
    })
    .then((response) => response.json())
    .then((data) => alert(data.msg))
    .catch((error)=>{
      alert('服务器出错了');
    });
  }

  _renderHotQuestionsList = () => {
    return this.state.hotQuestions.map(question => (
      <View style={{padding: 15, borderBottomColor: '#f8f8f8', borderBottomWidth: 5}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', width: ScreenSize.width - 30, paddingBottom: 5}}>{question.title}</Text>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: 5}}>
          <Image source={{uri:question.userAvatar}} style={{width:16, height:16, borderRadius: 8}} />
          <Text style={{fontSize: 12, paddingLeft: 5}}>{question.userName}</Text>
        </View>

        <Text style={{fontSize: 14, width: ScreenSize.width - 30, paddingBottom: 5}}>{question.description}</Text>

        {question.img
          ? <View style={{alignItems: 'center', paddingBottom: 5}}>
              <Image source={{uri:question.img}} style={{width:100, height:100}} />
            </View>
          : null}

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
          <Text style={{fontSize: 13, color: 'gray', borderWidth: 0.5, borderColor: 'gray', borderRadius: 5, paddingHorizontal: 5}}
            >{question.type === 'question' ? '问题' : '想法'}</Text>
          <Text style={{fontSize: 13, color: 'gray'}}>  ·  </Text>
          <Text style={{fontSize: 13, color: 'gray'}}>{question.commentCnt} 讨论</Text>
        </View>

      </View>
    ));
  }

  render() {
    let book = this.book;
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

        <ScrollView>

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
          <ScrollableTabView renderTabBar={() => <BookTabBar/>} style={{height:600}}>

            {/* 热门讨论 */}
            <View tabLabel="热门" style={{}}>
              {this._renderHotQuestionsList()}
            </View>

            {/* 按章节排序的讨论 */}
            <View tabLabel="章节" style={{}}>
              <View style={{height: 200, width: 300}}>
                <Text>ttt</Text>
              </View>
            </View>

          </ScrollableTabView>

          <Text>ttt</Text>

        </ScrollView>
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
