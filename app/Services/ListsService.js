import { ProxyState } from "../AppState.js";


class ListsService {
  makeList() {
    console.log('service is connected')
  }
}

export const listsService = new ListsService();

