import React from 'react';
import type { NextPage } from 'next';
import { Text } from 'react-native';
import { Box, Stack, Button } from 'native-base';

const Home: NextPage = () => {
  return (
    <Stack space={[20, 40, 80]}>
      {/* <Text>hi</Text> */}
      <Button
      // bg={['red.900', 'light.200', 'lightBlue.100']}
      // _text={{ color: ['white', 'black', 'red.900'] }}
      >
        Text
      </Button>
      {/* <Box boxSize="20" bg="red.100"></Box> */}
    </Stack>
  );
};

export default Home;
