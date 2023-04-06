type Merge<T> = { [K in keyof T]: T[K] };

export type { Merge };
