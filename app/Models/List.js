import { ProxyState } from "../AppState.js"


export default class List {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        console.log("this is dumb")
        return /*html*/`
        <h4>${this.title}</h4>
        
        `
    }
}
