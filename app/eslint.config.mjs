import astroPlugin from 'eslint-plugin-astro';

export default [
  ...astroPlugin.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
