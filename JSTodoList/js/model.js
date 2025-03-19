// Add Export default to be able to Import from index.js

export default class Model {
    constructor() {
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1) {
            this.todos = [
                {
                    id: 0,
                    title: 'Learn JS',
                    description: 'Wathch JS Tutorials',
                    completed: false,
                }
            ]
            this.currentId = 1;
        } else {
            this.currentId = this.todos[this.todos.length -1].id + 1;
        }
    }

    setView(view) {
        this.view = view;
    }

    getTodos() {
        return this.todos.map((todo) => ({...todo}));

        // In this way we pass a copy of todos, not a reference,
        // like we would do with return this.todos

        // in this way the view just have a copy of todo and can not modify it
        //we skip having problems with multiple references
    }

    save() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    findTodo(id) {
        return this.todos.findIndex((todo) => todo.id === id); // return the index in the array, where the todo's id is
    }

    editTodo(id, values) {
        const index = this.findTodo(id);
        Object.assign(this.todos[index], values);
        this.save();
    }

    toggleCompleted(id) {
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save();
    }

    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,
        };
        
        this.todos.push(todo);
        console.log(this.todos);

        this.save();
        return {...todo} // this is modern javascrit way
        // we are returning an object that expand the propieties of todo

 
        // return Object.assign({}, todo); Old javascript way
        // return Object.assign({}, todo); = return {...todo}

        // we make return Object.assign({}, todo);
        // instead of return todo; because, in this way
        // We return a clone of todo, so the view can not
        // modify the todo we create here in Model,

        // if we do return todo; we are returning 
        // a reference to todo
    }

    removeTodo(id) {
        const index = this.findTodo(id)
        this.todos.splice(index, 1);
        this.save()
    }
}