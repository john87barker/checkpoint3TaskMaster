import { generateId } from "../Utils/GenerateId.js"



export default class Task {
  constructor({ title, id = generateId(), listId }) {
    this.title = title
    this.id = id
    this.listId = listId
  }

  get Template() {

    return /*html*/
    `<ul>
    ${this.title}</ul>
    <i class="fa fa-trash color-warning text-dark " aria-hidden="true" onclick="app.listsController.removeTask></i>`

    // `<li>${this.name} <span class="action" onclick="app.listsController.removeTopping('${this.id}')">x</span></li>`


  }

}

