/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, Images, Colors } from '../../themes/index';
import DataInterface from '../../dataFunction/dataShowInfo';
import DataInformation from '../../dataFunction/dataInformation';
import CItemFunctionUser from '../../components/CItemFunctionUser';
import { NavigationUtils } from '../../navigation/index';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import googleFit from 'react-native-google-fit';

//loginEditInform
export default function User() {
  const dataUserGoogle = useSelector((state) => state.login.dataUser);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(true);
  const [information, setInformation] = useState(false);
  const [dataShow, setDataShow] = useState(DataInterface);

  const menu = () => {
    setCategory(true);
    setInformation(false);
    setDataShow(DataInterface);
  };
  const info = () => {
    setCategory(false);
    setInformation(true);
    setDataShow(DataInformation);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("USER_DATA")
    await AsyncStorage.removeItem("User_profile")
    googleFit.disconnect()
    await GoogleSignin.signOut()
    NavigationUtils.startLogin()
  };

  return (
    <View>
      <View style={styles.logo}>
        <Image source={Images.logo} style={styles.imageLogo} />
      </View>
      <View style={styles.user}>
        <Image source={{ uri: dataUserGoogle.user.photo }} style={styles.imageUser} />
        <View style={styles.username}>
          <Text style={styles.name}>{dataUserGoogle.user.name}</Text>
          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => NavigationUtils.startEditInformation()}
          >
            <Text style={styles.textButton}>Chỉnh sửa thông tin cá nhân</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.functionPage}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={
              category === true
                ? [styles.buttonTabBar, { backgroundColor: '#114EDC' }]
                : styles.buttonTabBar
            }
            onPress={() => menu()}
          >
            <Text style={styles.titleButton}> Danh mục </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              information === true
                ? [styles.buttonTabBar, { backgroundColor: '#114EDC' }]
                : styles.buttonTabBar
            }
            onPress={() => info()}
          >
            <Text style={styles.titleButton}> Thông tin cá nhân </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.content}>
            {dataShow.map((item, index) => (
              <CItemFunctionUser title={item.title} icon={item.icon} index={index} />
            ))}
            <CItemFunctionUser title={'Đăng xuất'} icon={Icon.icon_logout} feature={logout} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  imageLogo: {
    marginTop: 5,
    width: 100,
    height: 55,
  },
  user: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
  },
  imageUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    marginLeft: 20,
    marginTop: 13,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  functionPage: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  tabBar: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#4B7FFB',
    borderRadius: 25,
    justifyContent: 'space-evenly',
  },
  buttonTabBar: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  titleButton: {
    color: Colors.white,
  },
  content: {
    marginLeft: 25,
    marginTop: 10,
  },
});
