import {Dimensions} from 'react-native';

const host_url = 'http://139.224.10.99:8080/ROOT_test/';  //'http://139.224.10.99:80/';  //'http://10.0.2.2:8000/';  //http:192.168.1.102:8000/;
const account_url = host_url + 'account/';
const static_url = host_url + 'static/';
const user_url = host_url + 'user/';
const customers_url = account_url + 'customers/';
const customers_table_by_date_url = account_url + 'customers_table_by_date/';

const login_url = user_url + 'login/';
const logout_url = user_url + 'logout/';

const static_dir_url = host_url + 'resource/';

const URL = {
  customers: customers_url,
  customers_table_by_date: customers_table_by_date_url,

  login: login_url,
  logout: logout_url,

  static_dir: static_dir_url,
};

export default URL;
export const EPSILON = 0.000000001;
export const ScreenSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
