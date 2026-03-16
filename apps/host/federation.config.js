const {withNativeFederation, shareAll} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'host',
  remotes: ['child-products', 'child-profile'],
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
