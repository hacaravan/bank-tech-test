module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jasmine": true
    },
    "root": true,
    "plugins": ["jasmine"],
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "script"
    },
    "rules": {
    },
    "ignorePatterns": ["/lib/*", ".eslintrc.js"]
};
