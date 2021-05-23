/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Icon, Colors, Images } from '../../themes/index';
import { NavigationUtils } from '../../navigation/index';
import CEditInformation from '../../components/CEditInformation';

export default function EditInformation() {
  return (
    <View style={styles.page}>
      <View style={styles.headerPage}>
        <TouchableOpacity
          onPress={() => NavigationUtils.startRoot()}
          style={{ flexDirection: 'row' }}
        >
          <Image source={Icon.icon_back} style={styles.iconBack} />
          <Text style={styles.title}>Thông tin cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.logo} style={styles.logo} />
        </TouchableOpacity>
      </View>
      <View style={styles.backgroundUser}>
        <Image source={Images.interfaceUser} style={styles.imageUSer} />
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Image source={Icon.icon_camera} style={styles.iconCamera} />
        </TouchableOpacity>
        <Text style={{ fontSize: 11 }}>Thay đổi hình đại diện</Text>
      </View>
      <View style={styles.formInput}>
        <CEditInformation title={'Họ và tên'} defaultValue={'Nguyễn Văn A'} />
        <View style={styles.towInput}>
          <CEditInformation title={'Tuổi'} defaultValue={'20'} styleWidth={{ width: '20%' }} />
          <CEditInformation
            title={'Giới tính'}
            defaultValue={'Nam'}
            styleWidth={{ width: '30%' }}
          />
        </View>
        <CEditInformation title={'Chiều cao'} defaultValue={'1m70'} />
        <CEditInformation title={'Cân nặng'} defaultValue={'65Kg'} />
        <CEditInformation title={'Số điện thoại'} defaultValue={'0336 502 507'} />
        <CEditInformation title={'Email'} defaultValue={'azura.pham@gmail.com'} />
      </View>
      <View style={styles.functionSave}>
        <TouchableOpacity style={styles.buttonSave}>
          <Text style={styles.titleButton}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 25,
  },
  headerPage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBack: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 15,
  },
  logo: {
    width: 80,
    height: 31,
  },
  backgroundUser: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageUSer: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  iconCamera: {
    height: 35,
    width: 35,
  },
  formInput: {
    marginTop: 5,
    marginLeft: 25,
    marginRight: 25,
  },
  input: {
    backgroundColor: '#EBF7FF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  titleInput: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#525659',
  },
  textInput: {
    width: '60%',
    marginRight: 10,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  functionSave: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 5,
  },
  buttonSave: {
    height: 40,
    width: 340,
    backgroundColor: Colors.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleButton: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  towInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
