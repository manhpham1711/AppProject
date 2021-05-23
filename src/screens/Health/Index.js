/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CHeaderPage from '../../components/CHeaderPage';
import listFunctionHealth from '../../dataFunction/dataFunctionHealth';
import { Colors } from '../../themes/index';
import CFunctionHealth from '../../components/CFunctionHealth';

export default function Health() {
  return (
    <View>
      <CHeaderPage />
      <ScrollView>
        <View style={styles.contentPageHealth}>
          <View style={styles.functionsContainer}>
            {listFunctionHealth.map((item) => (
              <CFunctionHealth
                index={item.id}
                title={item.title}
                icon={item.icon}
                colorBackground={item.backgroundColor}
              />
            ))}
          </View>
          <View style={styles.content}>
            <View style={styles.headerPost}>
              <Image
                source={require('../../assets/image/doctor.jpeg')}
                style={styles.imageBackgroundItem}
              />
              <Text style={styles.textImage}> Bắt đầu kiểm tra sức khỏe của bạn </Text>
            </View>
            <View style={styles.contentPost}>
              <View style={[styles.post, { borderRightWidth: 1 }]}>
                <Text style={styles.titlePost}>Kiểm tra tổng quát </Text>
                <Text style={styles.subTitlePost}>
                  Chủ động kiểm tra sức khỏe của bản thân nhờ việc phân tích, gợi ý của chatbot.
                </Text>
                <View style={{ alignItems: 'center', marginRight: 8 }}>
                  <TouchableOpacity style={styles.functionPost}>
                    <Text style={{ marginTop: 5, color: Colors.white }}> Bắt đầu </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.post, { marginLeft: 5 }]}>
                <Text style={styles.titlePost}>Kiểm tra triệu chứng </Text>
                <Text style={styles.subTitlePost}>
                  Dạo gần đây bạn cảm thấy không khỏe? Nhanh tay bấm nút bắt đầu để được tư vấn. 
                </Text>
                <View style={{ alignItems: 'center', marginRight: 8 }}>
                  <TouchableOpacity style={styles.functionPost}>
                    <Text style={{ marginTop: 5, color: Colors.white }}> Bắt đầu </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.content, { marginBottom: 100 }]}>
            <View style={styles.headerPost}>
              <Image
                source={require('../../assets/image/health.jpeg')}
                style={styles.imageBackgroundItem}
              />
              <Text style={styles.textImage}> Bắt đầu kiểm tra sức khỏe của bạn </Text>
            </View>
            <View style={styles.contentPost}>
              <View style={[styles.post, { borderRightWidth: 1 }]}>
                <Text style={styles.titlePost}>Kiểm tra tổng quát </Text>
                <Text style={styles.subTitlePost}>
                  Chủ động kiểm tra sức khỏe của bản thân nhờ việc phân tích, gợi ý của chatbot.
                </Text>
                <View style={{ alignItems: 'center', marginRight: 8 }}>
                  <TouchableOpacity style={styles.functionPost}>
                    <Text style={{ marginTop: 5, color: Colors.white }}> Bắt đầu </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.post, { marginLeft: 5 }]}>
                <Text style={styles.titlePost}>Kiểm tra triệu chứng </Text>
                <Text style={styles.subTitlePost}>
                  Dạo gần đây bạn cảm thấy không khỏe? Nhanh tay bấm nút bắt đầu để được tư vấn. 
                </Text>
                <View style={{ alignItems: 'center', marginRight: 8 }}>
                  <TouchableOpacity style={styles.functionPost}>
                    <Text style={{ marginTop: 5, color: Colors.white }}> Bắt đầu </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  contentPageHealth: {
    marginLeft: 15,
    marginRight: 15,
  },
  functionsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 20,
    backgroundColor: '#DEE9F0',
    borderRadius: 10,
  },
  headerPost: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  imageBackgroundItem: {
    height: 140,
    width: Dimensions.get('window').width - 50,
    borderRadius: 10,
  },
  textImage: {
    position: 'absolute',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    top: 50,
    left: 35,
    right: 35,
    height: 80,
    fontSize: 20,
    color: Colors.white,
  },
  contentPost: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  post: {
    width: Dimensions.get('window').width / 2 - 30,
  },
  titlePost: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.black,
  },
  subTitlePost: {
    marginTop: 10,
    fontSize: 13,
  },
  functionPost: {
    marginTop: 25,
    height: 35,
    width: 100,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
});
