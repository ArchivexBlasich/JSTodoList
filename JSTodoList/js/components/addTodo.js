import Alert from "./alert.js";

export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');

        this.alert = new Alert('alert');
    }

    // callback, the way its used to call to a functio that 
    // yo receive and execute later (we dont know when)
    onClick(callback) {
        this.btn.onclick = () => {
            if (title.value === '' || description.value === '') {
                this.alert.show('Title and description are required');
            } else {
                this.alert.hide();
                callback(this.title.value, this.description.value);
            }
        }
    }

    /*
        We can not use the implementation below,
        because this not reference to the function of the class addTodo,
        instead it refer to funtion.
        To this to refer addTodo View Class we use anonymous funtion
        () => {}

        btn.onclick = function() => {
            this.addTodo('Title', 'Desc');
        };
        */
}