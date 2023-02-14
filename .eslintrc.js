module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        "plugin:i18next/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        "i18next"
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        'react/jsx-indent': [2, 4],
        'indent': [2, 4],
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx", "tsx", "ts"]}],
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "no-unused-vars": "warn",
        "import/prefer-default-export": "off",
        "react/require-default-props": "off",
        "react/function-component-definition": "off",
        "react/jsx-indent-props": "off",
        "no-shadow": "off",
        "import/no-extraneous-dependencies": "off",
        "react/jsx-props-no-spreading": "off",
        "no-undef": "off",
        "no-underscore-dangle": "off",
        "i18next/no-literal-string": ['error', { markupOnly: true }]
    }
}
