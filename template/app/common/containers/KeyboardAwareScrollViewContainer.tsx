import { StyleSheet } from 'react-native'
import type { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Container } from '@app/ui/components/Container'

type OwnProps = KeyboardAwareScrollViewProps &
  Omit<Parameters<typeof Container>[0], 'component'>

const KeyboardAwareScrollViewContainer = (props: OwnProps) => {
  return (
    <Container
      extraHeight={100}
      component={KeyboardAwareScrollView}
      enableOnAndroid
      keyboardOpeningTime={0}
      scrollToOverflowEnabled
      scrollsToTop={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.contentContainerStyle}
      {...props}
    />
  )
}

export { KeyboardAwareScrollViewContainer }

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
})
