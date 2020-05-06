import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const videoSource2 = ({ src }) => `
<html>
  <body>
    123
    <video id="video" width="320" height="240" controls>
      <source src="${src}" type="video/mp4" />
    </video>
    <audio
        controls
        src="${src}">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
    <iframe src="https://player.vimeo.com/video/410011254?title=0&byline=0&portrait=0&badge=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
<p><a href="https://vimeo.com/410011254">Conference</a> from <a href="https://vimeo.com/nickcavalier">Nick Cavalier</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
    <!-- <script>
      var video = document.getElementById('video');
      var source = document.createElement('source');

      source.setAttribute('src', 'http://www.tools4movies.com/trailers/1012/Kill%20Bill%20Vol.3.mp4');

      video.appendChild(source);
      video.play();

      setTimeout(function() {
          video.pause();

          source.setAttribute('src', 'http://www.tools4movies.com/trailers/1012/Despicable%20Me%202.mp4');

          video.load();
          video.play();
      }, 3000);
    </script> -->
  </body>
</html>
`;
const injectJavaScript = `
(function() {
var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', 'http://www.tools4movies.com/trailers/1012/Kill%20Bill%20Vol.3.mp4');

video.appendChild(source);
video.play();

setTimeout(function() {
    video.pause();

    source.setAttribute('src', 'http://www.tools4movies.com/trailers/1012/Despicable%20Me%202.mp4');

    video.load();
    video.play();
}, 3000);
})();
`;

export default function WebViewScreen({ src }) {
  return (
    <View style={{ width: 100, height: 500 }}>
      <WebView 
        allowsInlineMediaPlayback
        allowFileAccessFromFileURLs
        allowUniversalAccessFromFileURLs
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled
        ignoreSilentHardwareSwitch
        mixedContentMode="always"
        originWhitelist={['*']} 
        source={{ html: videoSource2({ src }) }} 
        injectJavaScript={injectJavaScript} 
        style={{ width: 100, height: 100 }} 
        onError={error => console.error(error)} 
      />
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
