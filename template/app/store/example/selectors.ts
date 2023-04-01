import type { RootState } from '../types';

import { suggestionsAdapter } from './slice';

export const listSelector = suggestionsAdapter.getSelectors<RootState>(
  ({ list }) => list.suggestions,
);

const getAllList = listSelector.selectAll;

const getListEntities = listSelector.selectEntities;

export { getListEntities, getAllList };
