// 1. Создайте класс Figure, обладающий двумя приватными свойствами x и
// y, задающими центр фигуры. А также метод square, возвращающий
// площадь фигуры – undefined.

class Figure {
    #x;
    #y;

    constructor(x,y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    set x(x) {
        this.#x = x;
    }

    set y(y) {
        this.#y = y;
    }

    square() {
        return undefined;
    }
}

// 2. Добавьте класс Circle, наследующий класс Figure, с тремя параметрами
// в конструкторе – x, y и r. Переопределите метод расчёта площади
// круга.

class Circle extends Figure {
    #r;

    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }

    get r() {
        return this.#r;
    }

    set r(val) {
        this.#r = val;
    }

    square() {
        return Math.PI * this.#r * this.#r;
    }

    getInfo() {
        return `Круг: центр (${this.x}, ${this.y}), радиус = ${this.r})`;
    }
}

// 3. Добавьте класс Rectangle, наследующий класс Figure, с четырьмя
// параметрами в конструкторе – x, y, h и w. Переопределите метод
// расчёта площади прямоугольника.

class Rectangle extends Figure {
    #h;
    #w;

    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }

    get h() {
        return this.#h;
    }

    get w() {
        return this.#w;
    }

    set h(h) {
        return this.#h;
    }

    set w(w) {
        return this.#w;
    }

    square() {
        return this.#h * this.#w;
    }

    getInfo() {
        return `Прямоугольник: центр (${this.x}, ${this.y}), высота = ${this.h}, ширина = ${this.w}`;
    }
}

// 4. Продемонстрируйте работу с экземплярами дочерних классов.

console.log("Демонстрация работы с классами");

console.log("1. Создание круга:");
const circle = new Circle(3, 3, 6);
console.log(circle.getInfo());
console.log(`Площадь круга: ${circle.square().toFixed(2)}`);
console. log("---");

console.log("2. Создание прямоугольника:");
const rectangle = new Rectangle(0, 0, 5, 8);
console.log(rectangle.getInfo());
console.log(`Площадь прямоугольника: ${rectangle.square()}`);
console. log("---");

console.log ("3. Демонстрация работы с методами базового класса:");
console.log("Круг - координата X:", circle.x);
console.log("Круг - координата Y:", circle.y);

circle.x = 4;
circle.y = 9;
console.log("После изменения координат круга:");
console.log(circle.getInfo());