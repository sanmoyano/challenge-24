module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier", "import"],
    rules: {
        "no-console": "warn",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/prop-types": "off",
        "prettier/prettier": [
            "warn",
            {
                printWidth: 100,
                trailingComma: "all",
                tabWidth: 4,
                semi: true,
                singleQuote: false,
                bracketSpacing: true,
                arrowParens: "always",
                endOfLine: "auto",
            },
        ],
        "no-unused-vars": [
            "warn",
            {
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_.*?$",
            },
        ],
        "import/order": [
            "warn",
            {
                groups: [
                    "type",
                    "builtin",
                    "object",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                ],
                pathGroups: [
                    {
                        pattern: "~/**",
                        group: "external",
                        position: "after",
                    },
                ],
                "newlines-between": "always",
            },
        ],
        "react/self-closing-comp": "warn",
        "react/jsx-sort-props": [
            "warn",
            {
                callbacksLast: true,
                shorthandFirst: true,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],
        "padding-line-between-statements": [
            "warn",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        ],
    },
};
