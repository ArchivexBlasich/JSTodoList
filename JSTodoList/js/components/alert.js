export default class Alert {
    constructor(alerId) {
        this.alert = document.getElementById(alerId);
    }

    show(message) {
        this.alert.classList.remove('d-none');
        this.alert.innerText = message;
    }

    hide() {
        this.alert.classList.add('d-none');
    }
}