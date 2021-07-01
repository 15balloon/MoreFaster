import React, {useCallback, useState, useRef} from 'react';

import {Alert, Button, View} from 'react-native';

import CustomButton from '../components/CustomButton';
import Timer from '../components/Timer';

const GameScreen = () => {
  const [blocks, setBlocks] = useState([
    {
      id: 0,
      checked: 1,
    },
    {
      id: 1,
      checked: 1,
    },
    {
      id: 2,
      checked: 1,
    },
    {
      id: 3,
      checked: 1,
    },
    {
      id: 4,
      checked: 1,
    },
    {
      id: 5,
      checked: 1,
    },
    {
      id: 6,
      checked: 1,
    },
    {
      id: 7,
      checked: 1,
    },
    {
      id: 8,
      checked: 1,
    },
    {
      id: 9,
      checked: 1,
    },
    {
      id: 10,
      checked: 1,
    },
    {
      id: 11,
      checked: 1,
    },
    {
      id: 12,
      checked: 1,
    },
    {
      id: 13,
      checked: 1,
    },
    {
      id: 14,
      checked: 1,
    },
    {
      id: 15,
      checked: 1,
    },
  ]);

  const [flag, setFlag] = useState(false);

  const currentNum = useRef(0);

  const [checkStart, setCheckStart] = useState(false);

  const GameStart = () => {
    setCheckStart(true);
  };

  const onPress = useCallback(id => {
    console.log('Click: ' + id);
    if (id === currentNum.current) {
      setBlocks(
        blocks.map(block => (block.id === id ? {...block, checked: 0} : block)),
      );
      currentNum.current += 1;
      console.log('current: ' + currentNum.current);
      if (currentNum.current === 16) {
        setFlag(true);
        Alert.alert('성공');
      }
    }
  });

  return (
    <View>
      {checkStart ? (
        <View style={{marginTop: 150, alignItems: 'center'}}>
          <Timer ss={15} done="Finish!" flag={flag} />
          <CustomButton blocks={blocks} onPress={onPress} />
        </View>
      ) : (
        <View
          style={{
            marginTop: 320,
            marginLeft: 30,
            marginRight: 30,
          }}>
          <Button color="green" title="Start" onPress={GameStart} />
        </View>
      )}
    </View>
  );
};

export default GameScreen;
