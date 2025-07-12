const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
// const { withReanimated } = require('react-native-reanimated/plugin');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
