import React, {useEffect, useState, useRef} from 'react';
import {
  NativeBaseProvider,
  Text,
  Box,
  Input,
  Button,
  HStack,
  ScrollView,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useMutation, useQuery} from '@apollo/client';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {ADD_TODO, DELETE_POST, GET_POSTS} from '../../GraphQL/Mutation';
import Bottom from './DataScreen';

function TodoList() {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('');

  const [addTodo, {data}] = useMutation(ADD_TODO);
  console.log(data);
  const handleAddPost = async () => {
    addTodo({variables: {input: {title, body}}});
  };

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentPress = () => bottomSheetModalRef?.current?.present();

  const [deletePost] = useMutation(DELETE_POST);
  const {
    data: posts,
    loading,
    error,
  } = useQuery(GET_POSTS, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 10,
        },
      },
    },
  });

  const handleDelete = async (id: string) => {
    console.log(id, 'DELETED');
    deletePost({
      variables: {
        id,
      },
      refetchQueries: ['GET_POSTS'],
    });
  };

  useEffect(() => {
    console.log(posts, 'DELETED');
  }, [posts]);

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text style={{fontSize: 22}}>Todo List!</Text>
          {posts?.posts?.data?.map(item => (
            <HStack space={2} justifyContent="center">
              <Text>{item.title}</Text>
              <Button>
                <Icon name="edit" />
              </Button>
              <Button onPress={() => handleDelete(item.id)}>
                <Icon name="trash" />
              </Button>
            </HStack>
          ))}
          <Box alignItems="center">
            <Input
              mx="3"
              placeholder="Title"
              w="80%"
              m="10px"
              onChangeText={text => setTitle(text)}
            />
            <Input
              mx="3"
              placeholder="Body"
              w="80%"
              m="10px"
              onChangeText={text => setBody(text)}
            />
            <Input
              mx="3"
              placeholder="Username"
              w="80%"
              m="10px"
              onChangeText={text => setUsername(text)}
            />
            <HStack space={2} justifyContent="center">
              <Button onPress={() => handleAddPost()}>Send</Button>
              <Button
                onPress={() => navigation.navigate('DataScreen' as never)}>
                <Icon color="#fff" name="arrow-right" />
              </Button>
            </HStack>
          </Box>
          {/* <Button onPress={handlePresentPress}>Present Sheet</Button> */}
          <Bottom />
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default TodoList;
