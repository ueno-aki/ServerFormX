# ServerFormX
そねっちさばで使うやつ

# リリース済み機能(masterブランチ)
* 地図投票
* containerMenu←改良中

# 開発予定,開発中 (developブランチ以下)
* パイメニュー
* 職業メニュー

# Usage
## containerMenu
* IDの求め方
1. idAuxSearchToolフォルダのエンチャント台のUIを適用させる.
2. エンチャント台をワールドで開いて左のスロットに調べたいアイテムを入れる
3. 出てきたIDAux(まだIDではない)をメモ
4. IDAux(以降aux)から計算してIDを求める
> ID = (aux - (データ値) - (エンチャントしてる場合32768)) / 65536

* Script API
#### itemIDAux.js
IDとキーワードを登録する
```js
export const itemIdAuxs = {
    "emerald/*区別できるキーワード*/" : 512,/*←ID今回はエメラルドのID*/
    "u-pa-": 369,
    //...
}
```

#### main.js
あとはコード書くだけ、
```js
import { world } from "@minecraft/server";
import { ContainerMenu } from "./ContainerMenu/ContainerMenu";

world.events.beforeItemUse.subscribe(ev => {
    ShowMainMenu(ev.source);
});

async function ShowMainMenu(viewer) {
    const MainMenu = new ContainerMenu(`§lMainMenu`, 27)
        .setContentAll({ itemKey: "barrier"})
        .setContents({
            12: { itemKey: "iron_sword", foil: true , lore: ["Hello", viewer.name] },
            14: { itemKey: "book" }
        })
        .setItem(0, { itemKey: "clock", foil: true, lore: ["close"] });
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
マップのテクスチャは正方形じゃないとずれる可能性あり

# Author
* うえの
* ueno#8639
