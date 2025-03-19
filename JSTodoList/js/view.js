import AddTodo from "./components/addTodo.js";
import Modal from "./components/modal.js";
import Filters from "./components/filters.js";

// Add Export default to be able to Import from index.js

export default class View {
    constructor() {
        this.model = null;
        this.table = document.getElementById('table');
        this.addTodoForm = new AddTodo()
        this.modal = new Modal();
        this.filters = new Filters();

        this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
        this.modal.onClick((id, values) => this.editTodo(id, values));
        this.filters.onClick((filters) => this.filter(filters));
    }

    setModel(model) {
        this.model = model;
    }

    render() {
        const todos = this.model.getTodos();
        todos.forEach((todo) => this.createRow(todo))
    }

    filter(filters) {
        const { type, words } = filters;
        // The line below let us desctructuring the array of rows, avoiding the element at index=0 (header of the table)
        const [, ...rows] = this.table.getElementsByTagName('tr');
        for (const row of rows) {
            const [title, description, completed] = row.children;
            let shouldHide = false;

            if (words) {
                shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words);
            }

            const shouldBeCompleted = type === 'completed';
            const isCompleted = completed.children[0].checked;

            if (type !== 'all' && shouldBeCompleted !== isCompleted) {
                shouldHide = true;
            }

            if (shouldHide) {
                row.classList.add('d-none');
            } else {
                row.classList.remove('d-none');
            }
        }
    }

    addTodo(title, description) {
        const todo = this.model.addTodo(title, description);
        this.createRow(todo);
    }

    toggleCompleted(id) {
        this.model.toggleCompleted(id)
    }

    editTodo(id, values) {
        this.model.editTodo(id, values);
        const row = document.getElementById(id);
        row.children[0].innerText = values.title;
        row.children[1].innerText = values.description;
        row.children[2].children[0].checked = values.completed;
        
    }

    removeTodo(id) {
        this.model.removeTodo(id);  // First we query the database (here there is not data base, but in a real project, Model would make an query to delete in a db)
        document.getElementById(id).remove();   // Then the data is remove from the database, we delete the data in the frontend
    }

    createRow(todo) {
        const row = table.insertRow();
        row.setAttribute('id', todo.id);
        // We are going to use Formatted string with backtiks (`)
        // to add HTML code in a row of a table, instead of add each element manually
        row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td class="text-center">
                
            </td>
            <td class="text-right">
                
            </td>
        `;

        // setTimeout(() => { ... }, 0); allows the browser to process 
        // the DOM update before we access row.children[3]

        // I was havig problems before using setTimeout,
        // because i process row.children[3] before the DOM update

        setTimeout(() => {
            /* Check Box */
            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.checked = todo.completed;
            checkBox.onclick = () => this.toggleCompleted(todo.id);
            row.children[2].appendChild(checkBox);

            /* Edit Botton */
            const editBtn = document.createElement('button');
            editBtn.classList.add('btn', 'btn-primary', "mb-1",);
            editBtn.innerHTML = `<i class="fa fa-pencil"></i>`;
            editBtn.onclick = () => this.modal.setValues({
                id: todo.id,
                title: row.children[0].innerText,
                description: row.children[1].innerText,
                completed: row.children[2].children[0].checked,
            });
            row.children[3].appendChild(editBtn);

            /* We DONT use this way, because, View just have a copy of Todo, it would show old todo, not the new todo with modifications
                so we instead take this new values from the row

            editBtn.onclick = () => this.modal.setValues({
                id: todo.id,
                title: todo.title.value,
                description: todo.description.value,
                completed: todo.completed.checked,
            });
            */

            /* Remove Botton */
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('btn', 'btn-danger', "mb-1", "ml-1");
            removeBtn.innerHTML = `<i class="fa fa-trash"></i>`;
            removeBtn.onclick = () => this.removeTodo(todo.id);
            row.children[3].appendChild(removeBtn);

        }, 0); // Minimal delay (0ms) to allow DOM update
    }
}