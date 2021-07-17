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
}

export const listsService = new ListsService();

