"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollections = void 0;
class CharacterCollections {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return this.data[leftIdx].toLocaleLowerCase() > this.data[rightIdx].toLocaleLowerCase();
    }
    swap(leftIdx, rightIdx) {
        const characters = this.data.split("");
        const leftHand = characters[leftIdx];
        characters[leftIdx] = characters[rightIdx];
        characters[rightIdx] = leftHand;
        this.data = characters.join('');
    }
}
exports.CharacterCollections = CharacterCollections;
