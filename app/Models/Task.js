import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"

export default class Task {
  constructor({ title, id = generateId(), listId }) {
    this.title = title
    this.id = id
    this.listId = listId
  }

  get Template() {

    return /*html*/
    `<li li > ${this.title}
    <span class="action" onclick="app.listsController.finished('${this.id}')">x</span></li>`
  }

}

