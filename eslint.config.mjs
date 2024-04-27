export default {
  files: ["**/*.js"],
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    globals: {
      $: "readonly",
    },
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
  },
};
