const profile = {
    name: 'Howard',
    age: 25,
    coords: {
        lat: 30,
        lng: 20
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age }: { age: number } = profile;

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;