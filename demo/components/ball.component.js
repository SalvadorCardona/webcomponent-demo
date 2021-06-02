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
        setInterval(() => {
            this.fixCollision();
            this.move();
            this.render();
        }, 1000/50);
    }

    get limit() {
        return {
            x: document.body.offsetWidth,
            y: document.body.offsetHeight
        }
    }

    willHaveCollision(axis) {
        return this.rayon + this.position[axis] + this.speed[axis] >= this.limit[axis]
            || this.rayon + this.position[axis] + this.speed[axis] <= 0
    }

    fixCollision() {
        const axisList = ['x', 'y'];

        axisList.forEach((axis) => {
            if (this.willHaveCollision(axis)
            ) {
                this.speed[axis] = -this.speed[axis];
            }
        });
    }

    move() {
        this.position = {
            x: this.position.x + this.speed.x,
            y: this.position.y + this.speed.y
        }
    }

    render() {
        this.style.left = this.position.x + 'px';
        this.style.top = this.position.y + 'px';
    }
}