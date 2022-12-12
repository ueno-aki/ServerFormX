# ServerFormX

# リリース済み機能(masterブランチ)
* 地図投票
* containerMenu
* KITメニュー(*動的に画像を変更したいため改良予定*)

# 開発予定,開発中 (developブランチ以下)
* パイメニュー

# ContainerMenu

### Script API

1. [ContainerMenuフォルダ](https://github.com/ueno-aki/ServerFormX/tree/main/ContainerMenu)をアドオン内に入れる

2. [*Register.js*](https://github.com/ueno-aki/ServerFormX/blob/main/ContainerMenu/Register.js)で、[ID](#idの求め方)とキーワードを登録する
```js
export const itemIdAuxs = {
    "emerald/*区別できるキーワード*/" : 512,/*←ID今回はエメラルドのID*/
    "u-pa-": 369,
    //...
}
```

3. あとはコード書くだけ。  
[***ここ***](https://github.com/ueno-aki/ServerFormX/tree/main/ContainerMenu)を参照してね。


### IDの求め方  
***以下のサイトから調べられる.ただしアドオンでアイテムを追加したりするとずれる場合あり***
* https://learn.microsoft.com/en-us/minecraft/creator/reference/content/addonsreference/examples/addonitems (マイクロソフト様)
* https://lukaspah.github.io/item_aux_calculator/ (海外の有志の方)

***IDがずれている場合は手探りで求める.以下の方法***
1. [idAuxSearchToolフォルダ](https://github.com/ueno-aki/ServerFormX/tree/main/idAuxSearchTool)のエンチャント台のUIを適用させる.
2. エンチャント台をワールドで開いて左のスロットに調べたいアイテムを入れる
3. 出てきたIDAux(まだIDではない)をメモ
4. IDAux(以降aux)から計算してIDを求める
> ID = (aux - (データ値) - (エンチャントしてる場合32768)) / 65536

# 地図投票
* [*ActionFormData*](https://learn.microsoft.com/ja-jp/minecraft/creator/scriptapi/minecraft/server-ui/actionformdata)にて、タイトルに```§m§a§p§r```が含まれていたら表示する。
* ```<ActionFormData>.button(text: string, iconPath?: string)```にて*iconPath*で指定されたテクスチャが表示される画像

# KITメニュー
* [*ActionFormData*](https://learn.microsoft.com/ja-jp/minecraft/creator/scriptapi/minecraft/server-ui/actionformdata)にて、タイトルに```§k§i§t§r```が含まれていたら表示する。

# Note
* マップのテクスチャは正方形じゃないとずれる可能性あり
* 職業選択フォームの画像の大きさは413(横),300(縦).多少のズレは問題無し

# Author
* うえの
-discord ***ueno#8639***
