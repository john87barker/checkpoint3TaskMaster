import { generateId } from "../Utils/GenerateId.js"



export default class Task {
  constructor({ title, listId, id = generateId() }) {
    this.title = title
    this.id = id
    this.listId = listId
  }

  get Template() {

    return /*html*/`
    <div class="btn-group  " data-toggle="buttons">
      <label class="btn btn-alert active">
        <input type="checkbox" name="complete" id="first">
      </label>
        <div class="d-flex text-dark text-left">
          <ul>

            ${this.title}

          </ul>
          <i class="fa fa-trash color-warning text-dark pl-2" onclick="app.listsController.removeTask('${this.id}')"></i>
        </div>
    </div>`

    // `<li>${this.name} <span class="action" onclick="app.listsController.removeTopping('${this.id}')">x</span></li>`


  }

}

