class Boat {
    color: string = 'red';

    get formattedColor(): string {
        return `This boats color is ${this.color}`
    }

    @testDecorator
    pilot(): void {
        console.log("wish")
    }
}

function testDecorator(target: any, key: string): void {
    console.log('Target: ', target)
    console.log('Key: ', key)
}