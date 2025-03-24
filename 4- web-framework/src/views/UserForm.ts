import { User } from "../models/User"


export class UserForm {

    constructor(public parent: HTMLElement, public model: User) {
        this.bindModel()
    }


    bindModel(): void {
        this.model.on("change", () => {
            this.render();
        })
    }

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

    bindEvent(fragment: DocumentFragment) {
        const eventMap = this.eventsMap();

        for (let eventKey in eventMap) {
            const [eventName, selector] = eventKey.split(":");

            fragment.querySelectorAll('.set-age').forEach(element => {
                element.addEventListener(eventName, eventMap[eventKey])
            })
        }
    }

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        // bind events 
        this.bindEvent(templateElement.content)

        this.parent.append(templateElement.content);
    }
}