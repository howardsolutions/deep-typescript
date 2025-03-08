export class NumberCollection {

    constructor(public data: number[]) {

    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx] > this.data[rightIdx];
    }

    swap(leftIdx: number, rightIdx: number): void {
        const leftHand = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx]
        this.data[rightIdx] = leftHand
    }

}