/* 
    Sortable: Instructions on how to be eligible for sorting
*/
interface Sortable {
    length: number;
    compare(leftIdx: number, rightIdx: number): boolean;
    swap(leftIdx: number, rightIdx: number): void
}

export class Sorter {
    sort(): void {
        const { length } = this;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {

                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }
        }
    }
}

