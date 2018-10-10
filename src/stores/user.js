import { observable, autorun, computed } from 'mobx';

class User {
    @observable info = {username: '', password: ''};

    constructor() {
        autorun(() => {
            console.log(`username: ${this.info.username}, password: ${this.info.password}`);
        });
    }

    //@computed get completedTodosCount() {
    //    return this.todos.filter(
    //        todo => todo.completed === true
    //    ).length;
    //}

    //@computed get report() {
    //    if (this.todos.length === 0){
    //        return "<none>";
    //    }
    //    return `Next todo: "${this.todos[0].task}". ` + `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    //}

    //addTodo(task) {
    //    this.todos.push({
    //        task: task,
    //        completed: false,
    //        assignee: null
    //    });
    //}
    setInfo(k, v) {
        this.info[k] = v;
    }
}

const user = new User();
export default user;

//observableTodoStore.addTodo("read MobX tutorial");
//observableTodoStore.addTodo("try MobX");
//observableTodoStore.todos[0].completed = true;
//observableTodoStore.todos[1].task = "try MobX in own project";
//observableTodoStore.todos[0].task = "grok MobX tutorial";

