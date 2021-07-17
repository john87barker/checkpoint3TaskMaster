import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"
import List from "./List.js"

export default class Task {
  constructor({ title, id = generateId(), listId }) {
    this.title = title
    this.id = id
    this.listId = listId
  }

  // get tasksTemplate() {

  //   return /*html*/`
  //       <div class="col-md-12 bg-light pt-3">
  //           <div class="btn-group " data-toggle="buttons">
  //               <label class="btn btn-alert active">
  //                   <input type="checkbox" name="complete" id="first">
  //               </label>
  //               <div class="d-flex text-right">
  //                   <p class=""> ${this.title}
  //                       <i class="fa fa-trash color-warning" aria-hidden="true"></i>
  //                   </p>
  //               </div>
  //           </div>
  //         </div>
  //       <br>
  //       `
  // }
}
