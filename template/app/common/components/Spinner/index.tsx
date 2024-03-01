import React from 'react';
import type { ActivityIndicatorProps } from 'react-native';
import { ActivityIndicator, StyleSheet } from 'react-native';

type OwnProps = ActivityIndicatorProps;

const Spinner = (props: OwnProps) => {
  return (
    <ActivityIndicator {...props} style={[styles.container, props.style]} />
  );
};

export { Spinner };

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
});
