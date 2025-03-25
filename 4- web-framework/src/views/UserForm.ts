import { User, UserProps } from "../models/User";
import { View } from "./View";


export class UserForm extends View<User, UserProps> {

    eventsMap(): { [key: string]: () => void } {
        return {
            "click:.set-age": this.onSetAgeClick,
            "click:.set-name": this.onSetNameClick,
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector("input");

        const name = input?.value;

        this.model.set({ name })
    }


    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>User Name: ${this.model.get("name")}</div>
                <div>User Age: ${this.model.get("age")}</div>
                <input type="text" />
                <button class="set-name">Change Name</button>
                <button class="set-age">Set RANDOM age</button>
            </div>
        `
    }

}