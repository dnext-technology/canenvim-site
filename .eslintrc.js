module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
  rules: {
    'no-console': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': ['error', 120],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'template-curly-spacing': 'off',
    'indent': ['error', 2, {
      'ignoredNodes': ['TemplateLiteral']
    }],
    'no-script-url': 'off',
    'react/forbid-prop-types': 'off',
    'no-nested-ternary': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-array-index-key': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-globals': 'off',
    'import/no-named-default': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-cycle': 'off',
    'eslint/use-at-your-own-risk': 0,
    'react/function-component-definition': 0,
    "arrow-body-style": 0,
    "default-param-last": 0,
    'no-use-before-define': 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "import/no-cycle": 0,
    "no-unused-vars": 0,
    "react/button-has-type": 0,
    "jsx-quotes": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/label-has-associated-control": 0,
    'no-case-declarations': 0,
    "react/jsx-tag-spacing": 0,
    "no-multiple-empty-lines": 0,
    "import/no-named-as-default-member": 0,
    "semi": 0,
    'react-hooks/exhaustive-deps': 'warn',
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  },
};
