# GAS + TypeScript の開発環境

- GAS
- TypeScript
- ESlint
- Jest

ライブラリ
https://github.com/google/clasp

## インストール

インストールしない場合は、npx を使用してください

```
npm install -g @google/clasp
```

## Google アカウントにログイン

```
npx clasp login
```

## GAS プロジェクトを新規作成

```
npx clasp create --title "Hello World" --type standalone
```

## GAS プロジェクトをクローンする

```
npx clasp clone スクリプトID(GAS のプロジェクトの設定からコピペ)
```

## 初期設定

1 拡張子を ts に

2 アップするファイルは src 配下に移動

```
src/appsscript.json
src/コード.ts
```

3.clasp.json に追記

```
{
  // 追加
  "rootDir": "./src"
}
```

## デプロイ

```
npx clasp push
```

## ブラウザ立ち上げ

```
npx clasp open
```

スクリプト ID はプロジェクト担当者に確認してください。

```
{
  "scriptId": "xxxxxxxxxxxxxxxxxxxx",
  "rootDir": "./src"
}
```
