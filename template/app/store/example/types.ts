import type { EntityState } from '@reduxjs/toolkit'

type MockDataItem = {
  id: string
  text: string
  completed: boolean
}

type ListState = {
  suggestions: EntityState<MockDataItem, string>
}

export type { ListState, MockDataItem }
