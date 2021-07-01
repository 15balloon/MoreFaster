import React from 'react';
import CustomButtonList from './CustomButtonList';
import {View} from 'react-native';

const candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const shuffle = [];
while (candidate.length > 0) {
  shuffle.push(
    candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0],
  );
}

console.log('shuff: ' + shuffle);

const CustomButton = ({blocks, onPress}) => {
  const elements = [];

  for (let i = 0; i < 4; i++) {
    elements.push(
      <View style={{flexDirection: 'row'}}>
        <CustomButtonList
          key={blocks[shuffle[0 + i * 4]].id}
          block={blocks[shuffle[0 + i * 4]]}
          onPress={onPress}
        />
        <CustomButtonList
          key={blocks[shuffle[1 + i * 4]].id}
          block={blocks[shuffle[1 + i * 4]]}
          onPress={onPress}
        />
        <CustomButtonList
          key={blocks[shuffle[2 + i * 4]].id}
          block={blocks[shuffle[2 + i * 4]]}
          onPress={onPress}
        />
        <CustomButtonList
          key={blocks[shuffle[3 + i * 4]].id}
          block={blocks[shuffle[3 + i * 4]]}
          onPress={onPress}
        />
      </View>,
    );
  }

  return (
    <View style={{flexDirection: 'column', alignItems: 'center'}}>
      {elements}
    </View>
  );
};

export default CustomButton;
