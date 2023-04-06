import type { ComponentType, PropsWithChildren, PropsWithRef } from 'react';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { useColors } from '../hooks/useColors';

type OwnProps<T> = PropsWithChildren<T> & {
  component: ComponentType<T>;
  loading?: boolean;
};

const Container = <T,>({
  component: Component,
  loading,
  ...props
}: OwnProps<T>) => {
  const { white, primary } = useColors();

  return (
    <Component
      {...(props as PropsWithRef<T> & PropsWithChildren<T>)}
      style={[styles.container, { backgroundColor: white }]}
    >
      {loading ? (
        <ActivityIndicator
          style={styles.spinner}
          color={primary}
          testID="loaderContainer"
          size={'large'}
        />
      ) : (
        props.children
      )}
    </Component>
  );
};

export { Container };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
});
