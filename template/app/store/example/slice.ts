import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import type { MockData } from '@app/common/types';

import type { PayloadAction, RootState } from '../types';
import { SlicesName } from '../types';

import type { ListState } from './types';

export const selectId = ({ id }: { id: string }) => id;

const suggestionsAdapter = createEntityAdapter<MockData>({
  selectId,
});

export const listSelector = suggestionsAdapter.getSelectors<RootState>(
  ({ list }) => list.suggestions,
);

const initialState: ListState = {
  suggestions: suggestionsAdapter.getInitialState(),
};

const slice = createSlice({
  initialState,
  name: SlicesName.LIST,
  reducers: {
    setListSuggestion: (state, { payload }: PayloadAction<MockData[]>) => {
      suggestionsAdapter.addMany(state.suggestions, payload);
    },
  },
});

export const {
  actions: { setListSuggestion },
  reducer: listReducer,
} = slice;
