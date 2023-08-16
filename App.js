import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const App = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissions?.granted) {
       let result = await ImagePicker.launchImageLibraryAsync({mediaTypes: ImagePicker.MediaTypeOptions.Images});

      if (!result.canceled) setImage(result.assets[0]);
      else setImage(null)
    }
  }

  return (
    <View style={styles.container}>
      {image &&
  <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
}
      <TouchableOpacity
        title= "Pick an image from the library"
        onPress={pickImage}
      />
      <TouchableOpacity
      title= "Take a photo"
      onPress={() => {}}
      />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;