import { HasId, Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
    regions: { [key: string]: Element } = {}

    constructor(public parent: HTMLElement, public model: T) {
        this.bindModel()
    }

    abstract template(): string;

    bindModel(): void {
        this.model.on("change", () => {
            this.render();
        })
    }

    eventsMap(): { [key: string]: () => void } {
        return {}
    };

    regionsMap(): { [key: string]: string } {
        return {}
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionMap = this.regionsMap();

        for (let key in regionMap) {
            const selector = regionMap[key];
            const element = fragment.querySelector(selector)

            if (element) {
                this.regions[key] = element
            }
        }
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
        this.parent.innerHTML = '';

        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        // bind events 
        this.bindEvent(templateElement.content)

        // map regions =>  place nested html
        this.mapRegions(templateElement.content)

        this.parent.append(templateElement.content);
    }
}