import React from 'react';
import { Video, Audio } from 'expo-av';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ReactNativeVideo from 'react-native-video';
import Stripe from 'tipsi-stripe';
import WebViewScreen from './WebViewScreen';
Stripe.setOptions({});

Audio.setAudioModeAsync({
  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  playsInSilentModeIOS: true,
  shouldDuckAndroid: true,
  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
});

const videos = {
  VIMEO: 'https://player.vimeo.com/play/1783259612?s=414482682_1588800293_60fa9f24998a1e77fcaf8a12dc4dfeb0&loc=external&context=Vimeo%5CController%5CApi%5CResources%5CUser%5CVideoController.&download=1&filename=Untitled165.mp4',
  AKAMAI_PROXIED: `https://user.api.staging.heyou.app/video-stream?url=${encodeURIComponent('https://vod-progressive.akamaized.net/exp=1588782617~acl=%2A%2F1783259599.mp4%2A~hmac=267fb550077d079d3e17bbd299dd1ac798732026c5ecd438bf7f1863c12a8363/vimeo-prod-skyfire-std-us/01/2896/16/414482682/1783259599.mp4?download=1&filename=Untitled.mp4')}`,
};

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <WebViewScreen src={videos.VIMEO} /> */}
      <WebViewScreen src="https://www.w3schools.com/html/mov_bbb.mp4" />
      <Video shouldPlay style={{ width: 200, height: 200 }} source={{ uri: videos.VIMEO }} />
      <Video shouldPlay style={{ width: 200, height: 200 }} source={{ uri: videos.AKAMAI_PROXIED }} />
      <ReactNativeVideo controls style={{ width: 200, height: 200 }} source={{ uri: videos.VIMEO }} />
      <ReactNativeVideo controls style={{ width: 200, height: 200 }} source={{ uri: videos.AKAMAI_PROXIED }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
