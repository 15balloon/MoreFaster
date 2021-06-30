import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text key={props.idx} style={styles.title}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default CustomButton;
