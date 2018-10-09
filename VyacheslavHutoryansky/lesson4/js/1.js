function Car(brand, fuelTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuelTank;
    this.ownerFullName = ownerFullName;

    this.getBand = () => this.brand;
    this.getFuelTank = () => this.fuelTank;
    this.getOwnerFullName  = () => this.ownerFullName;

    this.getBand(function () {
        return this.brand;
    });
    this.getFuelTank = (function () {
        return this.fuelTank;
    });
    this.getOwnerFullName = (function () {
        return this.ownerFullName;
    });
}

let car = new Car('Ford', 65, 'Вова');
console.log(`Марка авто: ${car.getBand()}`);
console.log(`Обєм топливного бака: ${car.getFuelTank()} л.`);
console.log(`Ім’я власника: ${car.getOwnerFullName()}`);