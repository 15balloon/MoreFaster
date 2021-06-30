import React from 'react';
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

import {Navigation} from 'react-native-navigation';

import {Colors} from 'react-native/Libraries/NewAppScreen';

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

const InitScreen = props => {
  const GameRank = () => {
    //   Alert.alert('Game Rank!');
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
        {/* <GameHomeScreen /> */}
        <Section title="More Faster!"></Section>
        <View
          style={{
            marginTop: 300,
            marginLeft: 30,
            marginRight: 30,
          }}>
          <Button
            color="green"
            title="Game Start"
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'morefaster.GameScreen',
                  options: {
                    topBar: {
                      title: {
                        text: 'Game',
                      },
                    },
                  },
                },
              })
            }></Button>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 30,
            marginRight: 30,
          }}>
          <Button color="green" title="Ranking" onPress={GameRank}></Button>
        </View>
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

export default InitScreen;
