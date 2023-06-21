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
import {FlatList, Image, StyleSheet} from 'react-native';

const BASE_URL = 'https://source.unsplash.com/random?sig=';

function HomeScreen() {
  const [data, setData] = React.useState([]);
  const [datas, setDatas] = React.useState([]);

  React.useEffect(() => {
    fetchMore();
  }, []);

  const fetchMore = () => {
    setDatas(prevState => [
      ...prevState,
      ...Array.from({length: 20}).map((_, i) => i + 1 + prevState.length),
    ]);
  };
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
      <Button>OK</Button>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: 'black',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});

export default HomeScreen;
