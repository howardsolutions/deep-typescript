import { User } from "../models/User"


export class UserForm {

    constructor(public parent: HTMLElement, public model: User) { }

    eventsMap(): { [key: string]: () => void } {
        return {
            "click:button": this.onButtonClick
        }
    }

    onButtonClick(): void {
        console.log("CLICK")
    }

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>User Name: ${this.model.get("name")}</div>
                <div>User Age: ${this.model.get("age")}</div>
                <input type="text" />
                <button>Click me</button>
            </div>
        `
    }

    bindEvent(fragment: DocumentFragment) {
        const eventMap = this.eventsMap();

        for (let eventKey in eventMap) {
            const [eventName, selector] = eventKey.split(":");

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventMap[eventKey])
            })
        }
    }

    render(): void {
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        // bind events 
        this.bindEvent(templateElement.content)

        this.parent.append(templateElement.content);
    }
}