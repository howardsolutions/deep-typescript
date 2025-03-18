import axios, { AxiosPromise } from "axios";
import { UserProps } from './User';

export class Sync {
    constructor(public rootUrl: string) { }

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: UserProps): AxiosPromise {
        const id = data.id;

        if (!id) {
            return axios.post(`${this.rootUrl}`, data)
        } else {
            return axios.put(`${this.rootUrl}/${id}`, data)
        }
    }
}