import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"



export default class List {
    constructor({ title, color, id = generateId() }) {
        // debugger
        this.title = title
        this.id = id
        this.color = color
    }

    get Template() {
        // debugger
        return /*html*/`

    <div class="col-md-3 card box-shadow bg-${this.color} m-3">
        <div class="row">
            <div class="d-flex col-md-12 justify-content-between p-2"
                <h4>${this.title.toUpperCase()}</h4>
                <i class="fa fa-times" title= "delete list" onclick = "app.listsController.finished('${this.id}')"></i>
            </div>


            <div class="col-md-12 bg-light pt-3" id="tasks">
                <div class="btn-group " data-toggle="buttons">
                    
                    <div class="d-flex text-dark">
                        <ul>
                        ${this.MyTask}
                        </ul>
                        
                    </div>
                </div>

                <div class="row ">

                    <div class="form-group col-md-10 pl-2 pr-0">
                        <form onsubmit="app.listsController.makeTask('${this.id}')">  
                            <div>    
                               
                                <input type="text" class="form-control" name="title"
                                placeholder="add task" required minlength="3" maxlength="50" />
                            
                                <button type="submit" class="btn btn-success">
                                <i class="fa fa-plus-square text-dark" aria-hidden="true" >
                                </i></button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
            <hr class="mt-0">
        </div>
    </div >`
    }



    get MyTask() {
        let template = ''
        let tasks = ProxyState.tasks.filter(task => task.listId === this.id)

        tasks.forEach(t => {
            template += t.Template
        })

        template += `<ul> </ul>`

        if (!template) {
            template += "No tasks!"
        }
        return template
    }


}
