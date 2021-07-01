import React, {useState, useEffect} from 'react';

import {Alert, Text} from 'react-native';

const Timer = ({ss, done, flag}) => {
  const [seconds, setSeconds] = useState(parseInt(ss));
  const [mili, setMili] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (flag) {
        clearInterval(countdown);
      } else if (parseInt(seconds) > 0) {
        if (parseInt(mili) > 0) {
          setMili(parseInt(mili) - 1);
        } else {
          setMili(9);
          setSeconds(parseInt(seconds) - 1);
        }
      } else if (parseInt(seconds) === 0) {
        if (parseInt(mili) === 0) {
          clearInterval(countdown);
        } else {
          setMili(parseInt(mili) - 1);
        }
      }
    }, 100);
    return () => clearInterval(countdown);
  }, [seconds, mili, flag]);

  return (
    <Text style={{fontSize: 32}}>
      {seconds === 0 && mili === 0
        ? (Alert.alert(done), `${seconds}.${mili}`)
        : flag
        ? (Alert.alert(
            '성공',
            `소요시간: ${15 - seconds - Math.ceil(mili / 10)}.${10 - mili}초`,
          ),
          `${seconds}.${mili}`)
        : `${seconds}.${mili}`}
    </Text>
  );
};

export default Timer;
