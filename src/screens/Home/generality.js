/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Colors, Icon, Images } from '../../themes/index';
import { useDispatch, useSelector } from 'react-redux';

export default function Generality() {
  //   const dataUserGoogle = useSelector((state) => state.login.dataUser);
  return (
    <View style={styles.contenPage}>
      <View style={styles.header}>
        <Text style={styles.titlePage}> Tổng quát </Text>
        {/* <Image source={{ uri: dataUserGoogle.user.photo }} style={styles.ImageUser} /> */}
        <Image source={Images.interfaceUser} style={styles.ImageUser} />
      </View>
      <Text style={styles.titlePart}>Nổi bật</Text>
      <Text style={styles.titlePart}>Các hoạt động</Text>
      <View style={styles.contenPart}>
        <View>
          <Image source={Icon.icon_night} style={styles.iconItem} />
          <Text style={styles.titleItem}> Giấc Ngủ</Text>
          <View style={styles.note}>
            <Text style={styles.value}>8</Text>
            <Text style={styles.unit}>h</Text>
            <Text style={styles.value}>55</Text>
            <Text style={styles.unit}>min</Text>
          </View>
        </View>
        <View style={styles.buttonNext}>
          <TouchableOpacity style={styles.button}>
            <Image source={Icon.icon_next} style={styles.iconButton} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contenPart}>
        <View>
          <Image source={Icon.icon_heart} style={styles.iconItem} />
          <Text style={styles.titleItem}> Nhịp tim</Text>
          <View style={styles.note}>
            <Text style={styles.value}>90</Text>
            <Text style={styles.unit}>BPM</Text>
          </View>
        </View>
        <View style={styles.buttonNext}>
          <TouchableOpacity style={styles.button}>
            <Image source={Icon.icon_next} style={styles.iconButton} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenPage: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titlePage: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  ImageUser: {
    borderRadius: 50,
    width: 40,
    height: 40,
  },
  titlePart: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 15,
  },
  contenPart: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconItem: {
    height: 25,
    width: 25,
  },
  titleItem: {
    color: '#FF9C8A',
    marginLeft: 20,
    marginBottom: 3,
    fontSize: 13,
    fontWeight: 'bold',
  },
  note: {
    flexDirection: 'row',
    marginTop: 5,
  },
  value: {
    marginLeft: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  unit: {
    marginTop: 5,
    marginLeft: 4,
    color: Colors.colorLightBlack,
    fontSize: 13,
  },
  buttonNext: {
    justifyContent: 'center',
  },
  button: {
    marginTop: 3,
    height: 30,
    alignItems: 'center',
    width: 30,
  },
  iconButton: {
    height: 25,
    width: 25,
  },
});
