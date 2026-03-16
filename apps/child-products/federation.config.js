const {withNativeFederation, shareAll} = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'child-products',
  exposes: {
    './Component': './apps/child-products/src/app/products-entry.component.ts',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
