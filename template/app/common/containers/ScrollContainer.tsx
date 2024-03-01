import type { ScrollViewProps } from 'react-native'
import { ScrollView, StyleSheet } from 'react-native'

import { Container } from '@app/ui/components/Container'

type OwnProps = ScrollViewProps &
  Omit<Parameters<typeof Container>[0], 'component'>

const ScrollContainer = ({ ...props }: OwnProps) => {
  return (
    <Container
      component={ScrollView}
      contentContainerStyle={styles.contentContainerStyle}
      {...props}
      keyboardShouldPersistTaps="handled"
    />
  )
}

export { ScrollContainer }

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingVertical: 20,
  },
})
