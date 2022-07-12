const micromatch = require('micromatch');

module.exports = {
  '*.{js,jsx,ts,tsx}': (files) => {
    const match = micromatch(files, [
      '*',
      // ignore these files
      '!*babel.config*',
      '!*jest.config*',
      '!*jest.setup*',
      '!*eslintrc*',
      '!*lint-staged*',
      '!__jest__',
      '!__mocks__',
      '!.husky',
    ]);

    return `eslint --fix ${match.join(' ')}`;
  },
};
