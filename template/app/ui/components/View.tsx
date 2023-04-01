import type { ViewProps } from 'react-native';
import { View as RNView } from 'react-native';

type OwnProps = Omit<ViewProps, 'id'>;

const View = ({ style, ...props }: OwnProps) => {
  return <RNView {...props} style={style} />;
};

export { View, OwnProps as ViewProps };
