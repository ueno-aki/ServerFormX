# ServerFormX

# リリース済み機能(masterブランチ)
* 地図投票
* containerMenu
* 職業メニュー

# 開発予定,開発中 (developブランチ以下)
* パイメニュー

# containerMenu
### IDの求め方  
***以下のサイトから調べられる.ただしアドオンでアイテムを追加したりするとずれる場合あり***
* https://learn.microsoft.com/en-us/minecraft/creator/reference/content/addonsreference/examples/addonitems (マイクロソフト様)
* https://lukaspah.github.io/item_aux_calculator/ (海外の有志の方)

***IDがずれている場合は手探りで求める.以下の方法***
1. idAuxSearchToolフォルダのエンチャント台のUIを適用させる.
2. エンチャント台をワールドで開いて左のスロットに調べたいアイテムを入れる
3. 出てきたIDAux(まだIDではない)をメモ
4. IDAux(以降aux)から計算してIDを求める
> ID = (aux - (データ値) - (エンチャントしてる場合32768)) / 65536


### Script API

#### ContainerMenuフォルダをアドオン内に入れる

* Register.js

IDとキーワードを登録する
```js
export const itemIdAuxs = {
    "emerald/*区別できるキーワード*/" : 512,/*←ID今回はエメラルドのID*/
    "u-pa-": 369,
    //...
}
```

* main.js

あとはコード書くだけ、
```js
import { world } from "@minecraft/server";
import { ContainerMenu } from "./ContainerMenu/index";

world.events.beforeItemUse.subscribe(ev => {
    ShowMainMenu(ev.source);
});

async function ShowMainMenu(viewer) {
    const MainMenu = new ContainerMenu(`§lMainMenu`, 27)
        .setContentAll({ id: "barrier"})
        .setContents({
            12: { id: "iron_sword", amount: 64 , foil: true , lore: ["Hello", viewer.name] },
            14: { id: "book" }
        })
        .setItem(0, { id: "clock", foil: true, lore: ["close"] });
    const { selection, canceled } = await MainMenu.show(viewer);
    if (canceled) return;
    switch (selection) {
        case 12:
            // ....
            break;
        case 14:
            // ....
            break;
        case 0:
            break;
        default:
            ShowMainMenu(viewer);
    }
}

```
# Note
* マップのテクスチャは正方形じゃないとずれる可能性あり
* 職業選択フォームの画像の大きさは413(横),300(縦).多少のズレは問題無し

# Author
* うえの
-discord ***ueno#8639***
