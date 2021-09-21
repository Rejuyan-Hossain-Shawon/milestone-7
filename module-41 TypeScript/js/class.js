"use strict";
class Car {
    constructor(model, price, millage) {
        this.model = model;
        this.price = price;
        this.millage = millage;
    }
    getActualMillage() {
        return this.millage + 1000;
    }
    getTotalPrice(tax) {
        const taxNumber = this.price * tax / 100;
        const totalPrice = taxNumber + this.price;
        return totalPrice;
    }
}
