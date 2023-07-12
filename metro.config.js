const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const sourceExts = require('metro-config/src/defaults/defaults').sourceExts;
const assetExts = require('metro-config/src/defaults/defaults').assetExts;

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-css-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg', 'css'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
