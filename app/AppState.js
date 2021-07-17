import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import List from "./Models/List.js"
// import Task from "./Models/Task.js"

class AppState extends EventEmitter {
  /** @type {lists[]} */
  lists = [
    new List({
      title: 'Chores'
    })
  ]

  // tasks = [
  //   new Task({
  //     title: 'Bath'
  //   }),
  //   new Task({
  //     title: 'Laundry'
  //   }),
  //   new Task({
  //     title: 'Lawn'
  //   })
  // ]
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
