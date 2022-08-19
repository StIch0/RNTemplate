import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from '@app/ui/components/Container';
import { Text } from '@app/ui/components/Text';

const WIPComponent = () => {
  return (
    <Container component={ScrollView}>
      <Text fontSize={14} fontWeight="thin">
        RNTemplate
      </Text>
    </Container>
  );
};

export { WIPComponent };
