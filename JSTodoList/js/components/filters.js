export default class Filters {
    constructor() {
        this.form = document.getElementById('filters');
        this.btn = document.getElementById('search');
        
    }

    onClick(callback) {
        this.btn.onclick = (e) => {
            e.preventDefault(); // if we dont add this, each time we press the brn search, the page refresh, beacuse the btn is inside a form, adding this function avoisd this
                                // Deafult is to sent everything params to a server, with this, we are saying we want to manage the params

            /* Now we take the values of the form */
            const data = new FormData(this.form)
            callback({
                type: data.get('type'),
                words: data.get('words'),
            });
        }
    }
}