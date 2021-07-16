export default class Value {
    constructor({ title, bgcolor, completed, entries }) {
        this.title = title
        this.bgcolor = bgcolor
        this.completed = completed
        this.entries = entries
    }

    get Template() {

        return /*html*/`
        <h4>${this.title}</h4>
        <p>${this.completed}/${this.entries}</p>
        `
    }
}
