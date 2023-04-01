import { useEffect } from 'react';
import { Appearance } from 'react-native';

import { useAppDispatch } from '@app/store/hooks';
import { setColorSchemeAction } from '@app/store/theme/slice';

const useColorScheme = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      dispatch(setColorSchemeAction(colorScheme));
    });

    return () => {
      listener.remove();
    };
  }, []);
};

export { useColorScheme };
