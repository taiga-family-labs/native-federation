const {withNativeFederation, shareAll} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'child-profile',
  exposes: {
    './Component': './apps/child-profile/src/app/profile-entry.component.ts',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
