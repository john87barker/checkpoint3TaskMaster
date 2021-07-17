import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


//Private
function _draw() {
  let template = ''
  let lists = ProxyState.lists
  let tasks = ProxyState.tasks
  // debugger
  lists.forEach(lists => template += lists.listsTemplate)
  // tasks.forEach(tasks => template += tasks.taskTemplate)

  document.getElementById('lists').innerHTML = template
  // document.getElementById('tasks').innerHTML = template

}

//Public
export default class ListsController {
  constructor() {
    ProxyState.on("values", _draw);
    console.log('controller working')
    _draw()
  }

  makeList() {

    _draw()
  }


}
