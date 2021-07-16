export default class Value {
    constructor(data) {
        this.title = data.title
        this.color = data.color
    }

    get Template() {

        return /*html*/`
        <div class="card p-2 value">
            ${this.title}
        </div>
        `
    }
}
