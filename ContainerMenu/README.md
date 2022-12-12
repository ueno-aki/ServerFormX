# ContainerMenu クラス

## メソッド

* [constructor](#constructor)
* [setItem](#setitem)
* [setContents](#setcontents)
* [setContentAll](#setcontentall)
* [clearItem](#clearitem)
* [clearContents](#clearcontents)
* [show](#show)

### constructor
```js
new ContainerMenu(menuName:string,size:number):ContainerMenu
```

ContainerMenuクラスのインスタンスを生成します。

#### パラメータ
* menuName: *string*
* size: *number*

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> このメソッドはエラーを吐く場合があります。



### setItem
```js
setItem(slot:number | number[], item:ItemInfo):ContainerMenu
```

指定したスロットにアイテムを追加します。

#### パラメータ
* slot: *number* | *number*[]
* item: [*ItemInfo*](#iteminfo-interface)

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> このメソッドはエラーを吐く場合があります。

#### 例

*setItem.js*
```js
const container = new ContainerMenu("container",27);
container
    .setItem(0, { id: "apple", lore: ["give an apple","click me"] })
    .setItem([9,10,11,12], { id: "clock", lore: ["close the container"] });
container.show(player).then((result) => {
    console.warn(result.selectedItem?.id);
})
```  



### setContents
```js
setContents(itemElements:Record<number,ItemInfo>):ContainerMenu
```

[*setItem*](#setitem)よりも効率的にかけるのでおすすめ。

#### パラメータ
* itemElements: Record<*number*,[*ItemInfo*](#iteminfo-interface)>

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> このメソッドはエラーを吐く場合があります。

#### 例

*setContents.js*
```js
const container = new ContainerMenu("container",27);
container.setContents({
    0: { id: "apple", lore: ["give an apple","click me"] },
    5: { id: "clock", lore: ["close the container"] },
});
container.show(player).then((result) => {
    console.warn(result.selectedItem?.id);
})
```  



### setContentAll
```js
setContentAll(item:ItemInfo):ContainerMenu
```

すべてのスロットに指定したアイテムを追加します。

#### パラメータ
* item: [*ItemInfo*](#iteminfo-interface)

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> このメソッドはエラーを吐く場合があります。



### clearItem
```js
clearItem(slot:number | number[]):ContainerMenu
```

指定したスロットのアイテムを消去します。

#### パラメータ
* slot: *number* | *number*[]

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> このメソッドはエラーを吐く場合があります。



### clearContents
```js
clearContents():void
```

すべてのスロットのアイテムを消去します。

> **Warning**  
> このメソッドはエラーを吐く場合があります。



### show
```js
show(target: @minecraft/server.Player):Promise<ContainerMenuResponce>
```

ContainerMenuフォームを生成し指定したプレイヤーに見せて、そのプレイヤーが選択したとき非同期的に値を返します。

#### パラメータ
* target: [*@minecraft/server.Player*](https://learn.microsoft.com/ja-jp/minecraft/creator/scriptapi/minecraft/server/player)

#### Returns [ContainerMenuResponce](#containermenuresponce-class)
> **Warning**  
> このメソッドはエラーを吐く場合があります。  

#### 例

```js
import { world } from "@minecraft/server";
import { ContainerMenu } from "./ContainerMenu/index";

world.events.beforeItemUse.subscribe(ev => {
    ShowMainMenu(ev.source);
});

async function ShowMainMenu(viewer) {
    const MainMenu = new ContainerMenu(`§lMainMenu`, 27)
        .setContents({
            0: { id: "clock", foil: true, lore: ["close"] },
            12: { id: "iron_sword", lore: ["Hello", viewer.name] },
            14: { id: "book", amount: 64, lore: ["Hello", viewer.name] },
        });
    const { selectedSlot, selectedItem, canceled } = await MainMenu.show(viewer);
    if (canceled) return;
    switch (selectedSlot) {
        case 12:
            console.warn(selectedItem.id);//->"iron_sword"
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

# ItemInfo インターフェース
ContainerMenu上のアイテムの定義です。

## プロパティ

### id
```ts
id: keyof typeof ItemIDAuxs;
```

Type: keyof typeof [*ItemIDAuxs*](https://github.com/ueno-aki/ServerFormX/blob/main/ContainerMenu/Register.js)


### lore
```ts
id: string[];
```

Type: *string*[]


### foil
```ts
id: boolean;
```

Type: *boolean*


### data
```ts
id: number;
```

Type: *number*

### amount
```ts
id: number;
```

Type: *number*


# ContainerMenuResponce インターフェース