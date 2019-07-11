module.exports = {
    extends: ['scratch/react', 'scratch/es6'],
    env: {
        browser: true,
        jest: true
    },
    globals: {
        jsdom: true
    },
    rules: {
        'react/prop-types': 0
    }
};
