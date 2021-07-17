import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";


class ListsService {
  makeList(rawList) {
    console.log('it made it to the service')
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }
  makeTask(rawTask) {
    ProxyState.lists = [...ProxyState.lists, new List(rawTask)]
  }
  finished(id) {

    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    // ProxyState.toppings = ProxyState.toppings.filter(topping => topping.pizzaId != id)
  }

}

export const listsService = new ListsService();

