import React from 'react';
import {Box, Button, Center, NativeBaseProvider, Text} from 'native-base';
// import Messi from '../../assets/images.jpeg';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../theme/index';
import Toast from 'react-native-toast-message';

function MessageScreen() {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Asssalomu Allaykum!',
      text2: 'Dasturlashga xush kelibsiz!!!',
    });
    console.log('bhu7efy6');
  };

  const showToastError = () => {
    Toast.show({
      type: 'error',
      text1: 'Asssalomu Allaykum!',
      text2: 'Dasturlashni!!!',
    });
    console.log('bhu7efy6');
  };

  return (
    <NativeBaseProvider theme={theme}>
      <Center>
        <Box>
          <Text>Profile</Text>
          <Button onPress={showToast}>Show Success</Button>
          <Button onPress={showToastError}>Show Error</Button>
          <Toast />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default MessageScreen;
