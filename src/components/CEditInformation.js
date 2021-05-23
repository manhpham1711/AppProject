import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CEditInformation(props) {
  return (
    <View style={styles.input}>
      <Text style={styles.titleInput}>{props.title}:</Text>
      <TextInput
        defaultValue={props.defaultValue}
        style={[styles.textInput, props.styleWidth && props.styleWidth]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
