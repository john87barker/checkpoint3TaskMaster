import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


//Private
function _draw() {
  let template = ''
  let lists = ProxyState.lists
  lists.forEach(lists => template += lists.template)
  document.getElementById('lists').innerHTML = template
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
