import {Dimensions} from 'react-native';

const host_url = 'http://192.168.1.105:8080/'; //'http://139.224.10.99:80/';  //'http://10.0.2.2:8000/';  //http:192.168.1.102:8000/;
const allBooks_url = host_url + 'book/allBooks/';
const questionsByBookId_url = host_url + 'question/questionsByBookId/';

const URL = {
  allBooks: allBooks_url,
  questionsByBookId: questionsByBookId_url,
};

export default URL;
export const EPSILON = 0.000000001;
export const ScreenSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
