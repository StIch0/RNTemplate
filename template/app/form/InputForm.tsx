import type { FieldValues } from 'react-hook-form'
import { useController } from 'react-hook-form'

import { Input } from '@app/ui/components/Input'

import type { UseControllerParams } from './types'

type InputParams = Omit<
  Parameters<typeof Input>[0],
  'value' | 'onChangeText' | 'onChange' | 'defaultValue'
>

type OwnProps<T extends FieldValues> = UseControllerParams<T> & InputParams

const InputForm = <T extends FieldValues>({
  name,
  control,
  defaultValue,
  disabled,
  rules,
  shouldUnregister,
  ...props
}: OwnProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
  })

  return <Input {...props} value={value} onChangeText={onChange} />
}

export { InputForm }
