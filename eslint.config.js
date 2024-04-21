const typescriptParser = require('@typescript-eslint/parser');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            ...typescriptPlugin.configs.recommended.rules,
            '@typescript-eslint/no-inferrable-types': 'off',
        },
    },
];
