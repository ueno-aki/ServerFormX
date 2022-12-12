# ContainerMenu Class

## Methods

* [constructor](#constructor)
* setItem
* setContents
* setContentAll
* clearItem
* clearContents
* show

### constructor
```js
new ContainerMenu(menuName:string,size:number)
```

Creates a new ContainerMenu builder.

#### Parameters
* menuName:*string*
* size:*number*

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> This function can throw errors  



### setItem
```js
setItem(slot:number | number[], item:ItemInfo)
```

Adds a item to the slot

#### Parameters
* menuName:*number* | *number*[]
* size:[*ItemInfo*](#iteminfo-interface)

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
setContents(itemElements:Record<number,ItemInfo>)
```

Methods that can be written more readable than [*setItem*](#setitem)

#### Parameters
* itemElements:Record<*number*,[*ItemInfo*](#iteminfo-interface)>

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
setContentAll(item:ItemInfo)
```

Adds the item to all slots

#### Parameters
* size:[*ItemInfo*](#iteminfo-interface)

#### Returns [ContainerMenu](#containermenu-class)
> **Warning**  
> This function can throw errors  



# ItemInfo Interface

# ContainerMenuResponce Class

