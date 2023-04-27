import debounce from 'lodash.debounce';
import React, { useCallback } from 'react';
import type { GestureResponderEvent, PressableProps } from 'react-native';
import { Pressable } from 'react-native';

import type { Merge } from '@app/common/types';

type OwnProps = Merge<
  Omit<PressableProps, 'onPress'> & {
    onPress: () => void;
    delay?: number;
  }
>;

const Button = ({ onPress, delay = 500, ...props }: OwnProps) => {
  const handler = useCallback(debounce(onPress, delay), [delay, onPress]);

  const onPressButton = (event: GestureResponderEvent) => {
    event.preventDefault();
    handler();
    event.persist();
  };

  return <Pressable {...props} onPress={onPressButton} />;
};

export { Button };
