/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import CHeaderPage from '../../components/CHeaderPage';
import { Colors } from '../../themes/index';
import Dialog from "react-native-dialog";
import { useDispatch } from 'react-redux'
import  PaymentType  from '../../redux/Payment/actions';
//import googleFitType from '../../redux/GoogleFitRedux/actions'


export default function Upgrade() {
// const dataPack = useSelector((state) => state.payment);
const [visible, setVisible] = useState(false);
const [money, setMoney] = useState(0);
const [orderId, setOrderId] = useState('');
const dispatch = useDispatch();
const merchantcode = "MOMOIQXQ20210323";
const merchantname = "App Health+";
const merchantNameLabel = "Nhà cung cấp";
const billdescription = "Nâng cấp Gói MOMO";

// const connect=()=>{
//     dispatch(googleFitType.connectGoogleFit())
// }



const showDialog = (money) => {
  setVisible(true);
  setMoney(money);
};

const handleCancel = () => {
  setVisible(false);
};

const createOrderId = () =>{
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  var millisecond = Math.round((new Date()).getTime() / 1000);
  setOrderId(
    'Health+'+date + '' + month + '' + year 
    + '' + hours + '' + min + '' + sec + '' + millisecond
  );
}

const handleOk = () =>{
  createOrderId();
  let jsonData = {};
  jsonData.enviroment = "0"; //"0": SANBOX , "1": PRODUCTION
  jsonData.partner = "merchant";
  jsonData.action = "gettoken";
  jsonData.isDev = false; //SANBOX only , remove this key on PRODUCTION 
  jsonData.merchantname = merchantname;
  jsonData.merchantcode = merchantcode;
  jsonData.merchantnamelabel = merchantNameLabel;
  jsonData.description = billdescription;
  jsonData.amount = money;
  jsonData.orderId = orderId;
  jsonData.appScheme = "momoiqxq20210323";// iOS App Only , get from Info.plist > key URL types > URL Schemes. Check Readme
  jsonData.fee = 0;
  dispatch(PaymentType.confirmPaymentUser(jsonData))
  setVisible(false);
}

  return (
    <View>
      <CHeaderPage />
      <ScrollView style={{ marginBottom: 80 }}>
        <View style={styles.contentPageUpgraded}>
          <View style={styles.messenger}>
            <Text style={styles.textMessage}>
              Bạn đang dùng gói <Text style={{ fontWeight: 'bold' }}> Free </Text> nâng cấp ngay
              để sử dụng nhiều chức năng hữu ích và hiệu quả hơn!
            </Text>
          </View>
          <View style={styles.postUpgrade}>
            <View style={styles.contentPost}>
              <Image source={require('../../assets/image/medal.png')} style={styles.stylesIcon} />
              <View style={{ marginLeft: 7, marginRight: 90 }}>
                <Text style={styles.titleUpgrade}>CHĂM SÓC CHUYÊN SÂU</Text>
                <Text style={styles.hrpage} />
                <Text style={styles.subTitleUpgrade}>
                  Bạn sẽ được{' '}
                  <Text style={{ color: Colors.colorTextPageUpgrade, fontWeight: 'bold' }}>
                    cảnh báo tình trạng sức khỏe.
                  </Text>{' '}
                  Dịch vụ chăm sóc 1-1 qua email được kích hoạt.
                </Text>
              </View>
            </View>
            <View style={styles.functionPost}>
              <View>
                <Text style={styles.price}>200.000đ</Text>
                <Text style={styles.price}>/tháng</Text>
              </View>
              <TouchableOpacity style={styles.buttonSubmit} onPress={()=>showDialog(200000)} >
                <Text style={styles.titleButton}> Dùng ngay </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postUpgrade}>
            <View style={styles.contentPost}>
              <Image source={require('../../assets/image/diamond.png')} style={styles.stylesIcon} />
              <View style={{ marginLeft: 7, marginRight: 90 }}>
                <Text style={styles.titleUpgrade}>CHĂM SÓC ĐẶC BIỆT</Text>
                <Text style={styles.hrpage} />
                <Text style={styles.subTitleUpgrade}>
                  Gặp ngay các{' '}
                  <Text style={{ color: Colors.colorTextPageUpgrade, fontWeight: 'bold' }}>
                    bác sỹ chuyên nghiệp{' '}
                  </Text>
                  để được tư vấn đầy đủ và chính xác nhất.
                </Text>
              </View>
            </View>
            <View style={styles.functionPost}>
              <View>
                <Text style={styles.price}>500.000đ</Text>
                <Text style={styles.price}>/tháng</Text>
              </View>
              <TouchableOpacity style={styles.buttonSubmit} onPress={()=>showDialog(500000)}>
                <Text style={styles.titleButton}> Dùng ngay </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Dialog.Container visible={visible} 
                          contentStyle={{justifyContent: 'center', alignItems: 'center'}}>
          <Dialog.Title > Thanh Toán </Dialog.Title>
          <Dialog.Description>
            Mở ứng dụng MOMO  và Thanh toán thông qua ứng dụng MOMO
          </Dialog.Description>
          <Dialog.Button label="Tiếp Tục" onPress={()=>handleOk()} />
          <Dialog.Button label="Hủy Bỏ" onPress={()=>handleCancel()} />
        </Dialog.Container>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  contentPageUpgraded: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  messenger: {
    backgroundColor: Colors.blue,
    borderRadius: 10,
  },
  textMessage: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    fontSize: 15,
  },
  postUpgrade: {
    marginTop: 35,
    borderRadius: 10,
    backgroundColor: Colors.goldColor,
    marginBottom: 10,
  },
  contentPost: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
  },
  stylesIcon: {
    marginTop: 10,
    height: 100,
    width: 90,
    resizeMode: 'stretch',
  },
  titleUpgrade: {
    color: Colors.warning,
    fontWeight: 'bold',
    fontSize: 15,
  },
  hrpage: {
    marginTop: 12,
    width: 90,
    height: 4,
    borderWidth: 3,
    borderColor: Colors.white,
  },
  subTitleUpgrade: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 13,
  },
  functionPost: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    textAlign: 'center',
    marginLeft: 10,
    color: Colors.white,
    fontSize: 23,
    width: 145,
    fontWeight: 'bold',
  },
  buttonSubmit: {
    marginTop: 15,
    marginRight: 30,
    height: 40,
    width: 110,
    justifyContent: 'center',
    backgroundColor: Colors.info,
    borderRadius: 5,
  },
  titleButton: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
});
