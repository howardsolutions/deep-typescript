import { faker } from '@faker-js/faker';

export class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.company.companySuffix();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.latitude())
        }
    }
}
