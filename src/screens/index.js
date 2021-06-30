import {Navigation} from 'react-native-navigation';

import InitScreen from './InitScreen';
import GameScreen from './GameScreen';
// import RankScreen from './RankScreen';

export function registerScreens() {
  Navigation.registerComponent('morefaster.InitScreen', () => InitScreen);
  Navigation.registerComponent('morefaster.GameScreen', () => GameScreen);
  // Navigation.registerComponent('morefaster.RankScreen', () => RankScreen);
}
