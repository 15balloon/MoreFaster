import React, {Component} from 'react';

import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import CustomButton from '../components/CustomButton';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Block = props => {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
      }}>
      <CustomButton title={props.title} />
    </View>
  );
};

const GameScreen = () => {
  const _CreateBlockRow = () => {
    const elements = [];
    for (let i = 0; i < 4; i++) {
      elements.push(
        <View style={{flexDirection: 'row'}}>
          <_CreateBlocks num={4} />
        </View>,
      );
    }
    return <View style={{flexDirection: 'column'}}>{elements}</View>;
  };

  const _CreateBlocks = ({num}) => {
    const elements = [];
    const candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    for (let i = 0; i < num; i++) {
      elements.push(
        <Block
          idx={i}
          title={candidate.splice(Math.floor(Math.random() * (16 - i)), 1)[0]}
        />,
      );
    }
    return elements;
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="More Faster!"></Section>
        <_CreateBlockRow />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    marginTop: 50,
    fontSize: 36,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default GameScreen;
