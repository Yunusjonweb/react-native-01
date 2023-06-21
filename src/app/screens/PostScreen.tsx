import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function PostScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('TodoList' as never)}
      />
    </View>
  );
}

export default PostScreen;
