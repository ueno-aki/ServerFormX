import { Player } from "@minecraft/server";
import { ActionFormData, FormCancelationReason } from "@minecraft/server-ui";
import { itemIDAuxs } from "./Register";
import { formattedText } from "./Formatter";

export class ContainerMenu {
    /**
     * @typedef {object} ItemOptions
     * @property {number} amount 個数
     * @property {boolean} foil エンチャント
     * @property {Array<string>} lore 説明文
     * @property {number} data データ値
     */
    /**
     * @typedef {{id: keyof typeof itemIDAuxs} & Partial<ItemOptions>} ItemInfo
     */

    /**
     * @param {ItemInfo} item 
     * @return {string}
     */
    static #rawItemText(item) {
        const AUX = {
            idAux: itemIDAuxs[item.id] * 65536,
            enchantIfNeed: item.foil ? 32768 : 0,
            dataIfNeed: item.data ?? 0,
        };
        return formattedText([
            (AUX.idAux + AUX.enchantIfNeed + AUX.dataIfNeed).toString(),
            item.lore?.join("\n§r") ?? "",
            `§r${!item.amount || item.amount == 1 ? "" : item.amount}`,
        ]);
    }
    /**@type {Map<number,ItemInfo>} */
    #SlotMap = new Map();


    /**@param {string} menuName @param {number} size*/
    constructor(menuName,size) {
        if (size < 0) throw new Error("[ContainerMenu::constructor]size must be a positive number");

        this.menuName = menuName;
        this.size = size;
    }

    /**
     * @param {number | number[]}slot container's slot
     * @param {ItemInfo} item itemInfo
     * @example <ContainerMenu>
     * .setItem(3,{id:"wool",amount:10,foil:true,lore:["they are enchanted blue wools."],data:11})
     * .setItem(-5,{id:"apple"})
     * .setItem([2,4,6],{id:"apple"});
     */
    setItem(slot, item) {
        if (typeof slot === "number") {
            this.#setItem(slot, item);
        } else {
            slot.forEach((value) => {
                this.#setItem(value, item);
            });
        }
        return this;
    }
    /**@param {number} slot @param {ItemInfo} item*/
    #setItem(slot, item) {
        if (slot >= this.size || this.size + slot < 0) {
            throw new Error("[ContainerMenu::#setItem]Don't type the invalid slot's number.");
        }
        this.#SlotMap.set(slot >= 0 ? slot : this.size + slot, item);
    }

    /**
     * @param {Record<number,ItemInfo>} itemElements container's slots
     * @example <ContainerMenu>.setContent({
     *  0: { id: "apple" },
     *  1: { ... },
     * });
     */
    setContents(itemElements) {
        Object.entries(itemElements).forEach(([key, item]) => {
            this.setItem(+key, item);
        });
        return this;
    }
    /**@param {ItemInfo} item */
    setContentAll(item) {
        for (let i = 0; i < this.size; i++) {
            this.setItem(i, item);
        }
        return this;
    }
    /**@param {number|number[]} slot*/
    clearItem(slot) {
        if (typeof slot === "number") {
            this.#clearItem(slot);
        } else {
            slot.forEach((num) => {
                this.#clearItem(num);
            });
        }
        return this;
    }
    /**@param {number} slot*/
    #clearItem(slot) {
        if (slot >= this.size || this.size + slot < 0) {
            throw new Error("[ContainerMenu::#clearItem]Don't type the invalid slot's number.");
        }
        this.#SlotMap.delete(slot >= 0 ? slot : this.size + slot);
    }
    clearContents() {
        this.#SlotMap.clear();
    }
    /**
     * @typedef {object} ContainerFormResponce
     * @property {number | undefined} selectedSlot
     * @property {ItemInfo | undefined} selectedItem
     * @property {boolean} canceled
     * @property {FormCancelationReason | undefined} cancelationReason
     */
    /**
     * @param {Player} target 
     * @return {Promise<ContainerFormResponce>}
     */
    async show(target){
        const form = new ActionFormData().title("container").body(this.menuName);
        for (let i = 0; i < this.size; i++) {
            const item = this.#SlotMap.get(i);
            form.button(item ? ContainerMenu.#rawItemText(item) : "");
        }
        const { selection, canceled, cancelationReason } = await form.show(target);
        return {
            selectedSlot: selection,
            selectedItem: selection ? this.#SlotMap.get(selection) : void 0,
            canceled: canceled,
            cancelationReason: cancelationReason,
        };
    }
}
