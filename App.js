import React from 'react';
import { Video, Audio } from 'expo-av';
import { StyleSheet, Text, View } from 'react-native';

Audio.setAudioModeAsync({
  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  playsInSilentModeIOS: true,
  shouldDuckAndroid: true,
  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Video shouldPlay style={{ width: 200, height: 200 }} source={{ uri: 'https://player.vimeo.com/play/1783259612?s=414482682_1588800293_60fa9f24998a1e77fcaf8a12dc4dfeb0&loc=external&context=Vimeo%5CController%5CApi%5CResources%5CUser%5CVideoController.&download=1&filename=Untitled165.mp4' }} />
      <Video shouldPlay style={{ width: 200, height: 200 }} source={{ uri: 'https://user.api.staging.heyou.app/video-stream?url=https%3A%2F%2Fvod-progressive.akamaized.net%2Fexp%3D1588763153~acl%3D%252A%252F1783259612.mp4%252A~hmac%3D6fc103bb7cd0f179d050940ed13d8da244446b30c9dcb0fb1436ad91e4196ca9%2Fvimeo-prod-skyfire-std-us%2F01%2F2896%2F16%2F414482682%2F1783259612.mp4' }} />
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
