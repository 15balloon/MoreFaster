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
            options: {
              topBar: {
                visible: false,
                animate: false,
              },
            },
          },
        },
      ],
    },
  },
});
