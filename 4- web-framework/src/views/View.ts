import { HasId, Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
    constructor(public parent: HTMLElement, public model: T) {
        this.bindModel()
    }

    bindModel(): void {
        this.model.on("change", () => {
            this.render();
        })
    }

    abstract eventsMap(): { [key: string]: () => void };
    abstract template(): string;

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
        this.parent.innerHTML = '';

        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        // bind events 
        this.bindEvent(templateElement.content)

        this.parent.append(templateElement.content);
    }
}