import Alert from "./alert.js";

export default class Modal {
    constructor() {
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.completed = document.getElementById('modal-completed');
        this.btn = document.getElementById('modal-btn');
        this.alert = new Alert('modal-alert');
        
        this.todo = null;

        this.modalElement = document.getElementById('modal');
        this.myModal = new bootstrap.Modal(this.modalElement);
    }

    setValues(todo) {
        this.todo = todo;
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;

        this.myModal.show();
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (!this.title.value || !this.description.value) {
                this.alert.show('Title and description are required');
                return;
            }

            this.myModal.hide();

            callback(this.todo.id, {
                title: this.title.value,
                description: this.description.value,
                completed: this.completed.checked,

            })
        }
    }
}