import { Sorter } from "./sorter";

export class CharacterCollections extends Sorter {
    constructor(public data: string) {
        super()
    }

    get length(): number {
        return this.data.length
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx].toLocaleLowerCase() > this.data[rightIdx].toLocaleLowerCase()
    }

    swap(leftIdx: number, rightIdx: number): void {
        const characters = this.data.split("");

        const leftHand = characters[leftIdx];
        characters[leftIdx] = characters[rightIdx]
        characters[rightIdx] = leftHand;

        this.data = characters.join('')
    }
}