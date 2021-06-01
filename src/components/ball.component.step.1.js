export default class BallComponent extends HTMLElement {
    constructor() {
        super();

        this.position = {
            y: 50,
            x: 50,
        }

        this.speed = {
            y: 10,
            x: 10,
        }

        this.rayon = 10;

        this.style.width = this.rayon * 2 + 'px';
        this.style.height = this.rayon * 2 + 'px';
        this.style.display = 'block';
        this.style.backgroundColor = 'black';
        this.style.borderRadius = '50%';
        this.style.position = 'fixed'
    }
}