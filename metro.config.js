const { getDefaultConfig } = require('metro-config');
const path = require('path');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  defaultConfig.resolver.extraNodeModules = {
    fs: path.resolve(__dirname, 'node_modules', 'react-native-fs'),
  };
  return defaultConfig;
})();
