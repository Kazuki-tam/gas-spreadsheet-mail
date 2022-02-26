# gas-spreadsheet-mail

This starter kit makes sending e-mails at once easier with Google sheets.

## Main dependencies

- [Google Sheets](https://www.google.com/intl/en/sheets/about/)
- [Google Apps Script](https://workspace.google.co.jp/intl/ja/products/apps-script/)
- [Clasp](https://github.com/google/clasp)
- [Webpack](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Yarn](https://yarnpkg.com/)

## Prerequisites

- [Node.js v16+ (v16.13.0)](https://nodejs.org/en/)
- [Clasp](https://github.com/google/clasp)

Install [Clasp](https://github.com/google/clasp) at the first if you haven't done it yet.

```shell
npm install -g @google/clasp
```

### Login google account

```shell
npx clasp login
```

## How to use

Clone this repository and install dependencies.

```shell
yarn install
```

### Connect to your exiting project

Create a `.clasp.json` at the root, and then Add these settings.
Open App script from your spreadsheet and check out a script Id at the setting page.

```json
{
  "scriptId": "<SCRIPT_ID>",
  "rootDir": "./src"
}
```

Deploy your code to the exiting project.

```shell
yarn deploy
```

## Available Commands

Build your project.

```shell
yarn build
```

Build your project files and force writes all local files to script.google.com.

```shell
yarn deploy
```

Open the current directory's clasp project on script.google.com.

```shell
yarn open
```

Test project's code

```shell
yarn test
```

```shell
yarn test:watch
```
