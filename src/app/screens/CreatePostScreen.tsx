import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TextInput, Button} from 'react-native';

function CreatePostScreen() {
  const [postText, setPostText] = React.useState('');
  const navigation = useNavigation();
  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'PostScreen',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </>
  );
}

export default CreatePostScreen;
