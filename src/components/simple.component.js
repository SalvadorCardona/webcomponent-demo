export default class SimpleComponent extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = 'Hello Word';
    }
}

customElements.define('simple-element', SimpleComponent);

