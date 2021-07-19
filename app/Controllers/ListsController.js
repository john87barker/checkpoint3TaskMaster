import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"


//Private
function _draw() {
  let template = ''
  let lists = ProxyState.lists
  let tasks = ProxyState.tasks

  lists.forEach(lists => template += lists.Template)
  // tasks.forEach(tasks => template += tasks.taskTemplate)

  document.getElementById('lists').innerHTML = template
  // document.getElementById('tasks').innerHTML = template
  console.log('Tasks:', tasks, 'Lists:', lists)
}

//Public
export default class ListsController {
  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)

    loadState()

    _draw()
  }

  makeList() {
    event.preventDefault()
    let form = event.target
    let rawList = {
      title: form.title.value,
      color: form.color.value,

    }
    // console.log(rawList)
    // debugger
    listsService.makeList(rawList)
    form.reset()
  }

  makeTask(id) {
    event.preventDefault()
    let form = event.target
    let rawTask = {
      title: form.title.value,
      listId: id
    }

    console.log(id)
    listsService.makeTask(rawTask)
    // form.reset()
  }


  finished(id) {
    // console.log('the click')
    listsService.finished(id)
  }
  removeTask(id) {
    listsService.removeTask(id)
  }

}


