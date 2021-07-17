import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import List from "./Models/List.js"
import Task from "./Models/Task.js"

class AppState extends EventEmitter {
  /** @type {lists[]} */
  lists = [
    new List({
      title: 'Chores',
      id: 124,
      // color: 'blue'
    }),
    new List({
      title: 'Grocery',
      id: 14,
      // color: 'yellow'
    }),
  ]

  tasks = [
    new Task({
      title: 'Bath',
      id: 333,
      listId: 14
    }),
    new Task({
      title: 'Laundry',
      id: 3313,
      listId: 14
    }),
    new Task({
      title: 'Lawn',
      id: 33,
      listId: 124
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
