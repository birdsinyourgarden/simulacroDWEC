// Ejercicio 4.1: Creación de Constructor de Objetos
class Car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2022);

console.log("Detalles del Carro 1:", car1);
console.log("Detalles del Carro 2:", car2);

// Ejercicio 4.2: Definiendo una Clase y Métodos
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const circle1 = new Circle(5);

console.log("Área del círculo:", circle1.area());

// Ejercicio 4.3: Herencia de Clases
class Cylinder extends Circle {
    constructor(radius, height) {
        super(radius);
        this.height = height;
    }

    volume() {
        return this.area() * this.height; 
    }
}

const cylinder1 = new Cylinder(5, 10);

console.log("Volumen del cilindro:", cylinder1.volume());
