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
  console.log(lists)
}

//Public
export default class ListsController {
  constructor() {
    ProxyState.on("lists", _draw)
    ProxyState.on("tasks", _draw)

    _draw()
  }

  makeList() {
    event.preventDefault()
    let form = event.target
    let rawList = {
      title: form.title.value,
      color: form.color.value,

    }
    console.log(rawList)
    listsService.makeList(rawList)
    form.reset()
  }

  // makeTask(listId){}

  finished(id) {
    // console.log('the click')
    listsService.finished(id)
  }

}


