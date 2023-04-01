import type { ComponentType, PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { useColors } from '../hooks/useColors';

type OwnProps<T> = PropsWithChildren<T> & {
  component: ComponentType<T>;
};

const Container = <T,>({ component: Component, ...props }: OwnProps<T>) => {
  const { white } = useColors();

  return (
    <Component
      {...(props as PropsWithChildren<T>)}
      style={[styles.container, { backgroundColor: white }]}
    />
  );
};

export { Container };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
