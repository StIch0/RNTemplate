import React from 'react'
import { Text as RNText } from 'react-native'

import { font } from '@app/ui/constants'
import type { TextProps } from '@app/ui/types'

import { useColors } from '../hooks/useColors'

const Text = ({ fontWeight, fontSize, ...props }: TextProps) => {
  const { black } = useColors()

  return (
    <RNText
      {...props}
      style={[
        props,
        {
          fontSize,
        },
        {
          ...font[fontWeight],
        },
        {
          color: black,
        },
      ]}
    />
  )
}

export { Text }
