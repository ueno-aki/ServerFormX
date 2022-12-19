# ServerFormX

# リリース済み機能
* マップ投票
* containerMenu
* KITメニュー(*動的に画像を変更したいため改良予定*)

# 開発予定,開発中
* パイメニュー

# ContainerMenu
* [wiki](https://github.com/ueno-aki/ServerFormX/wiki/ContainerMenu)
# マップ投票
* [*ActionFormData*](https://learn.microsoft.com/ja-jp/minecraft/creator/scriptapi/minecraft/server-ui/actionformdata)にて、タイトルに```§m§a§p§r```が含まれていたら表示する。
* ```<ActionFormData>.button(text: string, iconPath?: string)```にて*iconPath*で指定されたテクスチャが表示される画像

# KITメニュー
* [*ActionFormData*](https://learn.microsoft.com/ja-jp/minecraft/creator/scriptapi/minecraft/server-ui/actionformdata)にて、タイトルに```§k§i§t§r```が含まれていたら表示する。

# Note
* [Map投票] テクスチャは正方形じゃないとずれる可能性あり.
* [KITメニュー] 画像の大きさは413(横),300(縦).多少のズレは問題無し.
* [ContainerMenu] \<ItemInfo>.loreにおいて```lore:["3"]```のように数値のみにしないこと(表示されなくなる).どうしても数値のみにしたいなら```§r```等を置いて回避すると良い.

# Author
* うえの

-discord ***ueno#8639***
