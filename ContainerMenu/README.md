# ContainerMenu Class

## Methods

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

Creates a new ContainerMenu builder.

#### Parameters
* menuName: *string*
* size: *number*

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> This function can throw errors  



### setItem
```js
setItem(slot:number | number[], item:ItemInfo):ContainerMenu
```

Adds the item to the slots

#### Parameters
* slot: *number* | *number*[]
* item: [*ItemInfo*](#iteminfo-interface)

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> This function can throw errors

#### Examples

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

Methods that can be written more readable than [*setItem*](#setitem)

#### Parameters
* itemElements: Record<*number*,[*ItemInfo*](#iteminfo-interface)>

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> This function can throw errors

#### Examples

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

Adds the item to all slots

#### Parameters
* item: [*ItemInfo*](#iteminfo-interface)

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> This function can throw errors  



### clearItem
```js
clearItem(slot:number | number[]):ContainerMenu
```

Removes the item to the slots

#### Parameters
* slot: *number* | *number*[]

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> This function can throw errors  



### clearContents
```js
clearContents():void
```

Removes the item to all slots

> **Warning**  
> This function can throw errors  



### show
```js
show(target: @minecraft/server.Player):Promise<ContainerMenuResponce>
```

Creates and shows this ContainerMenu form. Returns asynchromously when the player confirms or cancels the dialog.

#### Parameters
* target: [*@minecraft/server.Player*](https://learn.microsoft.com/ja-jp/minecraft/creator/scriptapi/minecraft/server/player)

#### Returns [ContainerMenuResponce](#containermenuresponce-class)

> **Warning**  
> This function can throw errors  



# ItemInfo Interface

# ContainerMenuResponce Class

