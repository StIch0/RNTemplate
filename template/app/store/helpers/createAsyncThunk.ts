import { createAsyncThunk as reduxCreateAsyncThunk } from '@reduxjs/toolkit';

import type { ThunkAsyncConfig } from '../types';

const createAsyncThunk = <Returned, ThunkArg = void>(
  ...args: Parameters<
    typeof reduxCreateAsyncThunk<Returned, ThunkArg, ThunkAsyncConfig>
  >
) => reduxCreateAsyncThunk<Returned, ThunkArg, ThunkAsyncConfig>(...args);

export { createAsyncThunk };
