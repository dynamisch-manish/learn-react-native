import React from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  Button,
  FlatList,
  TextInput,
} from 'react-native';
import moment from 'moment';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const App = () => {
  const handleImageLibrary = async () => {
    try {
      const result = await launchCamera({mediaType: 'photo'});
      console.log(result?.assets[0]?.uri);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderWidth: 1,
        borderColor: 'red',
      }}>
      <Text>Hello react-native</Text>
      <Image
        source={{
          uri: 'https://miro.medium.com/v2/resize:fit:0/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        }}
        style={{
          width: 160,
          height: 160,
        }}
      />
      <TextInput placeholder="Enter" />
      <Button title="Select Image" onPress={handleImageLibrary} />
      <FlatList
        data={DATA}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
      {/* <ScrollView style={{borderWidth: 1, borderColor: 'red'}}>
        <Text>{moment().format('MMMM Do YYYY, h:mm:ss a')}</Text>

        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>

        {[].map()}
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
        <Text>Hello react-native</Text>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default App;
