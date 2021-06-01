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

        this.start();
    }

    start() {
        setInterval(() => this.move(), 1000/50);
    }

    get limit() {
        return {
            x: document.body.offsetWidth,
            y: document.body.offsetHeight
        }
    }

    move() {
        if (this.rayon + this.position.x + this.speed.x >= this.limit.x
            || this.rayon + this.position.x + this.speed.x <= 0
        ) {
            this.speed.x = -this.speed.x;
        }

        if (this.rayon + this.position.y + this.speed.y >= this.limit.y
            || this.rayon + this.position.y + this.speed.y <= 0 ) {
            this.speed.y = -this.speed.y;
        }

        this.position = {
            x: this.position.x + this.speed.x,
            y: this.position.y + this.speed.y
        }

        this.style.left = this.position.x + 'px';
        this.style.top = this.position.y + 'px';
    }
}