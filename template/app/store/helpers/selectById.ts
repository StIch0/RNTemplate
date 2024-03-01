import type { EntityId, EntitySelectors } from '@reduxjs/toolkit'

import type { RootState } from '../types'

const selectById =
  <T, ID extends EntityId>(id: ID) =>
  (selector: EntitySelectors<T, RootState, ID>) =>
  (state: RootState) =>
    selector.selectById(state, id)

export { selectById }
