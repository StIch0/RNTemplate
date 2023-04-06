import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '../types';
import { SlicesName } from '../types';

import { getSuggestionsAction } from './actions';
import type { ListState, MockDataItem } from './types';

export const selectId = ({ id }: { id: string }) => id;

const suggestionsAdapter = createEntityAdapter<MockDataItem>({
  selectId,
});

const initialState: ListState = {
  suggestions: suggestionsAdapter.getInitialState(),
};

const slice = createSlice({
  initialState,
  name: SlicesName.LIST,
  reducers: {
    setListSuggestion: (state, { payload }: PayloadAction<MockDataItem[]>) => {
      suggestionsAdapter.addMany(state.suggestions, payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(getSuggestionsAction.fulfilled, (state, { payload }) => {
      suggestionsAdapter.addMany(state.suggestions, payload);
    });
  },
});

export const {
  actions: { setListSuggestion },
  reducer: listReducer,
} = slice;

export { suggestionsAdapter };
