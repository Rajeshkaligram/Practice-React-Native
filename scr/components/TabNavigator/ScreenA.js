import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const ScreenA = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('ScreenB');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
});
