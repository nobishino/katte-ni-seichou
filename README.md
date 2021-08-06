# katte-ni-seichou

[勝手に成長™️コミュニティ公式Webサイト](https://nobishino.github.io/katte-ni-seichou/)のリポジトリです。

## 編集するには

* pull-requestを送ってください。
* docs/以下がWebサイトとして公開されます。HTMLとJavaScriptとCSSなどが使えます。

## 編集要望やTodoを管理する

* Issueを書いてください。

## ローカルでの動作確認

* `npm run start` を実行して`localhost:3000`にアクセスしてください。

## デプロイ

`master`ブランチに`push`するとGitHub Actionsでデプロイが行われます。

## 勝成会に参加する
1. 以下を /data/profiles.jsonのコピーして、"profiles": []の末尾に追加して自分のプロフィールに編集して追加してください。

```  
  {
    "id": "1",  //前の人のIDに+1して一意な値になるようにしてください。
    "image": "https://pbs.twimg.com/profile_images/1405161654971637760/eYQycmiW_400x400.jpg",  //web上にアップロードされた画像を使ってください。設定してなくてもOKです。
    "name": "Tarokov",  //自分の名前を入れてください
    "interests": [
      "減量","バドミントン","投信・株" //興味のあることを入れてください
    ],
    "wannado": [
      "ブログ投稿","美味しいもの食べたい" //勝成会でやってみたいことを入れてください
    ]
  }
```
2. PRを出して、マージされたら完了です。
