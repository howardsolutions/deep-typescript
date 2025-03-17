import axios, { AxiosResponse } from "axios"

export class Sync {
    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data)
            })
    }

    save(): void {
        const id = this.get('id')

        if (!id) {
            axios.post(`http://localhost:3000/users/`, this.data)
        } else {
            axios.put(`http://localhost:3000/users/${id}`, this.data)
        }
    }
}