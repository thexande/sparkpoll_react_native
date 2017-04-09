import { Platform } from 'react-native';
import { setCustomSourceTransformer } from 'react-native/Libraries/Image/resolveAssetSource';

setCustomSourceTransformer(function (resolver) {

  if (Platform.OS === 'android'
    && !resolver.serverUrl
    && !resolver.bundlePath
    && resolver.asset.type === 'html') {
    resolver.bundlePath = '/android_asset/';
  }

  return resolver.defaultAsset();
})

import React, { Component } from 'react';
import { WebView } from 'react-native';
const webapp = require('./test.html')

export class AnimationBackgroundWebComponent extends Component {
  
  render() {
    return (
      <WebView
        source={ {webapp }}
        style={{marginTop: 20, width: 320, height: 100}}
      />
    );
  }
}