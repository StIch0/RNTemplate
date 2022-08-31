import type { EntityState } from '@reduxjs/toolkit';

import type { MockData } from '@app/common/types';

type ListState = {
  suggestions: EntityState<MockData>;
};

export type { ListState };
