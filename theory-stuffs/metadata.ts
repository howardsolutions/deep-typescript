import "reflect-metadata"

@controller
class Plane {
    color: string = 'blue'

    @get("/")
    fly(): void {
        console.log("FLY")
    }
}

function get(path: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key)
    }
}


const path = Reflect.getMetadata("path", Plane.prototype, "fly")

console.log(path) // 123

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata("path", target.prototype, key);
        console.log(path)
    }
}