export class UserForm {

    constructor(public parent: HTMLElement) { }

    eventsMap(): { [key: string]: () => void } {
        return {
            "click:button": this.onButtonClick
        }
    }

    onButtonClick(): void { }

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <input type="text" />
                <button>Click me</button>
            </div>
        `
    }

    render(): void {
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        this.parent.append(templateElement.content);
    }
}