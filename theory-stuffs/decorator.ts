class Boat {
    color: string = 'red';

    get formattedColor(): string {
        return `This boats color is ${this.color}`
    }

    @logError("Opps boat was sunk in ocean")
    pilot(): void {
        throw new Error();
        console.log("wish")
    }
}

function logError(errorMessage: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor): void {
        const method = descriptor.value;

        descriptor.value = function () {
            try {
                method();
            } catch (error) {
                console.log(errorMessage)
            }
        }
    }
}

function testDecorator(target: any, key: string): void {
    console.log('Target: ', target)
    console.log('Key: ', key)
}