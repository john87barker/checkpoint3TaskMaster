import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";


class ListsService {

  makeList(rawList) {
    console.log('you made a list in the service')
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }

  makeTask(rawTask) {
    console.log('made task in the service')
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]

  }

  finished(id) {
    if (window.confirm('Erase the list?')) {
      window.close(
        ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
        // ProxyState.toppings = ProxyState.toppings.filter(topping => topping.pizzaId != id)
      )
    }

  }

  removeTask(id) {
    console.log('the remove button worked a little', id)
    if (window.confirm('Remove the task?')) {
      window.close(
        ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id))
    }
    console.log(id)


  }
}
export const listsService = new ListsService();

