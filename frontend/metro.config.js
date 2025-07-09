const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  '@': __dirname,
  '@/assets': __dirname + '/assets',
  '@/screens': __dirname + '/screens',
};

module.exports = config;
