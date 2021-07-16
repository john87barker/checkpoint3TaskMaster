import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import List from "../Models/List.js";

class ListsService {
  makeList() {
    console.log('service is connected')
  }
}

export const listsService = new ListsService();

