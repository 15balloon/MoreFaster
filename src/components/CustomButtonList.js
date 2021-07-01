import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const CustomButtonList = ({block, onPress}) => {
  const {id, checked} = block;

  return (
    <View style={styles.btn}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress(id);
        }}>
        <View style={{opacity: parseInt(checked)}}>
          <Text key={id} style={styles.title}>
            {id}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  title: {
    fontSize: 16,
  },
});

export default CustomButtonList;
