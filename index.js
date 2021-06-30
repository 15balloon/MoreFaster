import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './src/screens';
import {registerComponents} from './src/components';

registerScreens();
registerComponents();

Navigation.setRoot({
  root: {
    stack: {
      id: 'Init',
      children: [
        {
          component: {
            name: 'morefaster.InitScreen',
          },
        },
      ],
    },
  },
});
