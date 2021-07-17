import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"
import Task from "./Task.js"

export default class List {
    constructor({ title, color, id = generateId() }) {
        this.title = title
        this.id = id
        this.color = color
    }

    get listsTemplate() {

        return /*html*/`
       
        <div class="col-md-3 card box-shadow bg-${this.color} m-3">
            <div class="row d-flex ">
                <div class="d-flex col-md-12 justify-content-between p-2" id="lists">
                    <h4>${this.title}</h4>
                    <i class="fa fa-times" aria-hidden="true" title= "delete list" onclick = "app.listsController.finished('${this.id}')"></i>
                </div>


                <div class="col-md-12 bg-light pt-3" id="tasks">
                    <div class="btn-group " data-toggle="buttons">
                        <label class="btn btn-alert active">
                            <input type="checkbox" name="complete" id="first">
                        </label>
                        <div class="d-flex text-right">
                            <p class="text-dark">
                            ${this.MyTasks}
                            <i class="fa fa-trash color-warning text-dark " aria-hidden="true"></i>
                            </p>
                        </div>
                    </div>

                    <div class="row ">
                    <form onsubmit="app.listsController.makeList()">
                        <div class="form-group col-md-10 pl-2 pr-0">
                            <label for="add task"></label>

                            <input type="text" class="form-control" name="addtask" id=""
                                placeholder="add task">
                        </div>
                        <div class="d-flex  col-md-2 align-items-center justify-content-center">
                            <i class="fa fa-plus-square " aria-hidden="true"></i>
                        </div>
                    </form>    
                    </div>    
                </div>
                <hr class="mt-0">
            </div>
        </div >`
    }



    get MyTasks() {
        let template = ''
        let tasks = ProxyState.tasks.filter(task => task.tasksId === this.id)
        tasks.forEach(t => {
            template += t.Template
        })
        template += `<li> ${tasks}</li>`
        if (!template) {
            template += "No tasks"
        }
        return template
    }


}
