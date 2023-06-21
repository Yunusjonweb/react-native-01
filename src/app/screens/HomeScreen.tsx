import * as React from 'react';
import Share from 'react-native-share';
import {
  NativeBaseProvider,
  Text,
  Box,
  HStack,
  Center,
  Button,
} from 'native-base';
import Loader from '../Loader/Loader';

function HomeScreen() {
  const [data, setData] = React.useState([]);
  const [loader, setLoader] = React.useState(false);

  React.useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => setData(json.movies))
      .catch(error => {
        console.error(error);
      });
  }, []);

  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Yunusbek Xabibullayev',
      url: 'https://docs.nativebase.io/design-tokens',
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NativeBaseProvider>
      <Center>
        <Text>Movie Name</Text>
        <Box>
          {data.length ? (
            data.map(item => (
              <HStack space={10} justifyContent="center" key={item.id}>
                <Text>Helllo</Text>
                <Button>OK</Button>
                <Text>Movie Issues Year {item?.releaseYear}</Text>
              </HStack>
            ))
          ) : (
            <Loader />
          )}
        </Box>
        <Button onPress={myCustomShare}>share</Button>
      </Center>
    </NativeBaseProvider>
  );
}

export default HomeScreen;
