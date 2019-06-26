import React from 'react';
import { StyleSheet, View } from 'react-native';

export default props => {
  return (
    <View style={styles.header}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: '#BBBBBB55',
    borderBottomWidth: 2,
    backgroundColor: '#EFEFEF55',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 10,
  }
})