module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "semi": "off",
      "no-underscore-dangle": "off",
      "arrow-body-style": ["error", "as-needed"],
    }
};
