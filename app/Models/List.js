import { ProxyState } from "../AppState.js"


export default class List {
    constructor(data) {
        this.title = data.title
    }

    get Template() {

        return /*html*/`
        <h4>${this.title}</h4>
        <p>${this.completed}/${this.entries}</p>
        `
    }
}
