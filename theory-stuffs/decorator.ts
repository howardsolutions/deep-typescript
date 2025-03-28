class Boat {
    color: string = 'red';

    get formattedColor(): string {
        return `This boats color is ${this.color}`
    }

    @logError
    pilot(): void {
        console.log("wish")
    }
}


function logError(target: any, key: string, descriptor: PropertyDescriptor): void {
    console.log('Target: ', target)
    console.log('Key: ', key)
}

function testDecorator(target: any, key: string): void {
    console.log('Target: ', target)
    console.log('Key: ', key)
}