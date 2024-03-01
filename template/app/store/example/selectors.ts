import { selectById } from '../helpers/selectById'
import { useAppSelector } from '../hooks'
import type { RootState } from '../types'

import { suggestionsAdapter } from './slice'
import type { MockDataItem } from './types'

export const selector = suggestionsAdapter.getSelectors<RootState>(
  ({ list: { suggestions } }) => suggestions,
)

const useSuggestionsTotal = () => useAppSelector(selector.selectTotal)

const useSuggestionsIds = () => useAppSelector(selector.selectIds)

const useSuggestionsById = (id: string) =>
  useAppSelector(selectById<MockDataItem, string>(id)(selector))

export { useSuggestionsById, useSuggestionsTotal, useSuggestionsIds }
