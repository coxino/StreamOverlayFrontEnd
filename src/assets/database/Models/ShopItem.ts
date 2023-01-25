import { DropType, ItemType } from "../Enums/ItemType";

export class ShopItem {
    itemType: ItemType = 0;
    itemID: string;
    nume: string;
    pret: number;
    imagine: string;
    descriere: string;
    stoc: number;
    requireAditional: boolean;
    onlyMembers: boolean;
    isVisible: boolean;
    cooldown: number;
    optionalData: string;
    cooldownValue:number;
    drops: DropItem[] = [];
}

export class DropItem {
    name: string;
    luck: number;
    dropType: DropType;
    dropList: string;
}