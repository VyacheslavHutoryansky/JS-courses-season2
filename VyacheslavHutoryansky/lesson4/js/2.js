function Car(brand, fuelTank, ownerFullName) {
    this.brand = brand;
    this.fuelTank = fuelTank;
    ownerFullName = ownerFullName.trim().split(' ');

    ownerFullName.length === 2 ? this.ownerFullName = ownerFullName.join(' ') : this.ownerFullName = "John Doe";

    this.getBrand = function() {
        return this.brand;
    };

    this.getFuelTank = function() {
        return this.fuelTank;
    };

    this.getFirstNamePart = function() {
        return this.ownerFullName.slice(0, this.ownerFullName.indexOf(' '));
    };

    this.getSecondNamePart = function() {
        return this.ownerFullName.slice(this.ownerFullName.indexOf(' ') + 1, this.ownerFullName.length);
    };

    this.getOwnerFullName = function() {
        return this.ownerFullName;
    };
}

let mashina = new Car("Ford", 65, " ");

console.log(`Марка авто: ${mashina.getBrand()}`);
console.log(`Обєм топливного бака: ${mashina.getFuelTank()} л.`);
console.log(`Ім’я власника: ${mashina.getOwnerFullName()}`);
console.log(`Ім’я: ${mashina.getFirstNamePart()}`);
console.log(`Прізвище: ${mashina.getSecondNamePart()}`);