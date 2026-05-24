module.exports = {
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.+(ts)', '**/?(*.)+(test).+(ts)'],
    transform: {
        '^.+\\.ts$': '@swc/jest',
    },
}