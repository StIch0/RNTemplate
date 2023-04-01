import { createSlice } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

import type { PayloadAction } from '../types';
import { SlicesName } from '../types';

import type { ThemeState } from './types';

const initialState: ThemeState = {
  colorScheme: Appearance.getColorScheme(),
};

const slice = createSlice({
  name: SlicesName.THEME,
  initialState,
  reducers: {
    setColorSchemeAction: (
      state,
      { payload: scheme }: PayloadAction<ThemeState['colorScheme']>,
    ) => {
      state.colorScheme = scheme;
    },
  },
});

export const {
  reducer: themeReducer,
  actions: { setColorSchemeAction },
} = slice;
