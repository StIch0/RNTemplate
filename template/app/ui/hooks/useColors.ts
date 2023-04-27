import { useMemo } from 'react';

import { useColorsScheme } from '@app/store/theme/selectors';

import { colorScheme } from '../constants';

const useColors = () => {
  const scheme = useColorsScheme() || 'light';

  const isLight = scheme === 'light';

  const { black, primary, secondary, white } = colorScheme;

  const colors: {
    [K in keyof typeof colorScheme]: string;
  } = useMemo(
    () => ({
      primary,
      white: isLight ? white : black,
      black: isLight ? black : white,
      secondary,
    }),
    [isLight],
  );

  return colors;
};

export { useColors };
