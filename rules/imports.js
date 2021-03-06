module.exports = {
  env: {
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['import'],
  settings: {
    'import/core-modules': [],
    'import/extensions': ['.js'],
    'import/ignore': ['node_modules', /\.(css|svg|json)$/],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  },
  rules: {
    'import/default': 'error',
    'import/dynamic-import-chunkname': [
      'error',
      {
        webpackChunknameFormat: '[a-zA-Z]+'
      }
    ],
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        js: 'never'
      }
    ],
    'import/first': ['error', 'absolute-first'],
    'import/group-exports': 'error',
    'import/max-dependencies': [
      'error',
      {
        max: 10
      }
    ],
    'import/named': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: false
      }
    ],
    'import/newline-after-import': [
      'error',
      {
        count: 1
      }
    ],
    'import/no-absolute-path': [
      'error',
      {
        amd: true,
        commonjs: true,
        esmodule: true
      }
    ],
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': [
      'error',
      {
        amd: true,
        commonjs: true
      }
    ],
    'import/no-default-export': 'error',
    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js'],
        optionalDependencies: false,
        peerDependencies: true
      }
    ],
    'import/no-internal-modules': [
      'off',
      {
        allow: []
      }
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unused-modules': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true
      }
    ],
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css']
      }
    ],
    'import/no-unresolved': [
      'error',
      {
        amd: true,
        caseSensitive: true,
        commonjs: true
      }
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off'
  }
};
