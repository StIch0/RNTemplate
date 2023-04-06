import { createAsyncThunk } from '../helpers/createAsyncThunk';
import { SlicesName } from '../types';

import type { MockDataItem } from './types';

const getSuggestionsAction = createAsyncThunk<MockDataItem[]>(
  `${SlicesName.LIST}/getSuggestionsAction`,
  async (
    _,
    {
      extra: {
        exampleServices: { getSomeData },
      },
    },
  ) => {
    try {
      const list = await getSomeData();
      return list;
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export { getSuggestionsAction };
