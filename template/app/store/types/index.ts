import type {
  AnyAction,
  Dispatch,
  PayloadAction as ReduxPayloadAction,
  Reducer,
  SliceCaseReducers,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import type { ThunkMiddlewareFor } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import type { PersistPartial } from 'redux-persist/lib/persistReducer';

import type { exampleServices } from '@app/services/example';

import type { ListState } from '../example/types';
import type { ThemeState } from '../theme/types';

type PayloadAction<T> = ReduxPayloadAction<T>;

type SliceReducer<T> = SliceCaseReducers<T>;

type Dependencies = {
  exampleServices: typeof exampleServices;
};

type RootState = {
  list: ListState;
  theme: ThemeState;
} & PersistPartial;

type AppDispatch = Dispatch & ThunkDispatch<RootState, Dependencies, AnyAction>;

type ThunkAsyncConfig = {
  extra: Dependencies;
  state: RootState;
  dispatch: AppDispatch;
};

type ThunkMiddlewareOptions = {
  thunk: {
    extraArgument: Dependencies;
  };
};

type Middlewares = ThunkMiddlewareFor<RootState, ThunkMiddlewareOptions>[];

type MainState = Omit<RootState, '_persist'>;

type Reducers = { [K in keyof MainState]: Reducer<MainState[K], AnyAction> };

enum SlicesName {
  LIST = 'LIST',
  THEME = 'THEME',
}

export { SlicesName };
export type {
  ThunkAsyncConfig,
  SliceReducer,
  PayloadAction,
  RootState,
  Dependencies,
  Middlewares,
  Reducers,
  ThunkMiddlewareOptions,
  AppDispatch,
};
