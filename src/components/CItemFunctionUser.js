import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Icon, Images, Colors } from '../themes/index';

export default function CItemFunctionUser(props) {
  return (
    <View style={styles.itemFunction} index={props.index}>
      <TouchableOpacity onPress={() => props.feature()}>
        <Image source={props.icon} style={styles.iconButton} />
      </TouchableOpacity>
      <Text style={styles.titleContent}> {props.title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemFunction: {
    marginTop: 25,
    flexDirection: 'row',
  },
  iconButton: {
    height: 35,
    width: 35,
  },
  titleContent: {
    marginLeft: 40,
    fontSize: 15,
  },
});
