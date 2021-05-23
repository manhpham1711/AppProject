/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Colors, Icon } from '../../themes/index';
import Feature from '../../components/Feature';
import { SVG } from '../../themes/Svg';
import Steps from '../../components/Steps';
import Sleep from '../../components/Sleep';


export default function Home() {
  const dispatch = useDispatch()
  const dataUserGoogle = useSelector((state) => state.login.dataUser);
  const steps=useSelector((state)=>state.googlefit.dailySteps)
  const [currentSteps, setCurrentSteps] = useState(0)
  useEffect(() => {
    if(steps){
      steps.length>0 && setCurrentSteps(steps[steps.length-1].value)
    }
  })

  return (
    <View style={{ height: '100%' }}>
      <View style={styles.header}>
      <SVG.Header/>
      </View>
      <View style={styles.content}>
        <View style={styles.headers}>
          {dataUserGoogle !== null ? (
            <>
              <View>
                <Text style={styles.textTitle}>Good morning!</Text>
                <Text style={styles.textTitle}>{dataUserGoogle.user.name}</Text>
              </View>
              <TouchableOpacity>
                <Image source={{ uri: dataUserGoogle.user.photo }} style={styles.ImageUser} />
              </TouchableOpacity>
            </>
          ) : (
            <Text style={{ color: Colors.white }}>
              Vui Lòng Đăng Nhập Để Sử Dụng Ứng Dụng
            </Text>
          )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.functionHeader}>
            <TouchableOpacity style={[styles.function, { backgroundColor: '#D3664E' }]}>
              <View style={styles.contentFunction}>
                <View style={styles.titlePage}>
                  <Image source={Icon.icon_heartbeat} style={styles.iconButton} />
                  <Text style={styles.titleButton}>Nhịp tim</Text>
                </View>
                <View style={styles.parameter}>
                  <Text style={styles.titleParameter}>66</Text>
                  <Text style={styles.unit}>bpm</Text>
                </View>
              </View>
            </TouchableOpacity>
          <TouchableOpacity style={[styles.function, { backgroundColor: '#F5B04A' }]}>
              <View style={styles.contentFunction}>
                <View style={styles.titlePage}>
                  <Image source={Icon.icon_dropWater} style={styles.iconButton} />
                  <Text style={styles.titleButton}>Nồng độ oxi</Text>
                </View>
                <View style={styles.parameter}>
                  <Text style={styles.titleParameter}>000/00</Text>
                  <Text style={styles.unit}>mmHg</Text>
                </View>
              </View>
            </TouchableOpacity>
        </View>
      <View style={styles.recommentSession}>
        <Text style={styles.titlePart}>ĐỀ XUẤT </Text>
        <ScrollView horizontal={true}>
          <Feature
          id="A"
          name="Theo dõi hoạt động"
          content="4 hoạt động"
          />
          <Feature
          id="H"
          name="Đo nhịp tim"
          content="Bắt đầu"
          />
          <Feature
          id="C"
          name="Chat cùng Mr.Heath+"
          content="Bắt đầu"
          />
          <Feature
          id="F"
          name="Kiểm tra chế độ dinh dưỡng"
          content="Bắt đầu"
          />
        </ScrollView>
      </View>
      
      <View style={styles.activityContainner}>
        <Text style={styles.titlePart}>HOẠT ĐỘNG</Text>
          <Steps
            title={'Đi bộ'}
            icon={Icon.icon_walk}
            completeLevels={currentSteps/5000}
            goal={ currentSteps+'/5000 bước'}
            color={'#87DCFA'}
          />
          <Sleep
            title={'Ngủ'}
            icon={Icon.icon_sleeping}
            completeLevels={null}
            goal={'120 phút'}
            color={'#F8EDD2'}
          />
      </View>
      </ScrollView>
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
  header:{
    flex: 1,
    marginTop:-40

  },
  activityContainner:{
    marginBottom:50

  },
  recommentSession:{
    marginBottom:-50

  },
  content: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 50,
  },
  headers: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 25,
    color: Colors.white,
    fontWeight: 'bold',
  },
  ImageUser: {
    marginTop: 10,
    borderRadius: 50,
    width: 60,
    height: 60,
  },

  functionHeader: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  function: {
    height: 150,
    width: 150,
    borderRadius: 15,
  },
  contentFunction: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  titlePage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    height: 40,
    width: 40,
  },
  titleButton: {
    marginTop: 5,
    color: Colors.white,
    fontSize: 12,
    textAlign: 'center',
  },
  parameter: {
    marginTop: 20,
    marginLeft: 15,
  },
  titleParameter: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: 'bold',
  },
  unit: {
    color: Colors.white,
    fontSize: 15,
    marginBottom: 10,
  },
  titlePart: {
    marginTop: 35,
    color: Colors.colorBlackBlue,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
