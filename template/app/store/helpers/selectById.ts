import type { EntityId, EntitySelectors } from '@reduxjs/toolkit';

import type { RootState } from '../types';

const selectById =
  <T>(id: EntityId) =>
  (selector: EntitySelectors<T, RootState>) =>
  (state: RootState) =>
    selector.selectById(state, id);

export { selectById };
