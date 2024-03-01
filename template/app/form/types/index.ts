import type { FieldValues, useController } from 'react-hook-form'

type UseControllerParams<T extends FieldValues> = Parameters<
  typeof useController<T>
>[0]

export { UseControllerParams }
