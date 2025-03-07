// eslint.config.js
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

export default [
    js.configs.recommended,
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: "./tsconfig.app.json",
                tsconfigRootDir: "./",
            },
        },
        plugins: {
            "@typescript-eslint": tseslint,
            import: importPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            "prettier/prettier": "error",
            "import/extensions": [
                "error",
                "ignorePackages",
                { ts: "never", js: "never" },
            ],
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],
            "no-console":
                process.env.NODE_ENV === "production" ? "warn" : "off",
            "max-len": ["error", { code: 120 }],
            "no-var": "error",
            "prefer-const": "error",
            "object-curly-spacing": ["error", "always"],
            "arrow-body-style": ["error", "as-needed"],
            "no-unused-expressions": ["error", { allowTernary: true }],
            "consistent-return": "error",
            "no-param-reassign": ["error", { props: false }],
            "import/order": [
                "error",
                {
                    groups: [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    "newlines-between": "always",
                    alphabetize: { order: "asc", caseInsensitive: true },
                },
            ],
            "no-shadow": "error",
            "prefer-arrow-callback": "error",
            "no-duplicate-imports": "error",
            "padding-line-between-statements": [
                "error",
                { blankLine: "always", prev: "*", next: "return" },
            ],
            "prefer-destructuring": [
                "error",
                {
                    VariableDeclarator: {
                        array: false,
                        object: true,
                    },
                    AssignmentExpression: {
                        array: false,
                        object: false,
                    },
                },
                {
                    enforceForRenamedProperties: false,
                },
            ],
        },
        settings: {
            "import/resolver": {
                node: {
                    extensions: [".js", ".ts"],
                },
                typescript: {},
            },
        },
        globals: {
            document: false,
            window: false,
        },
    },
];
