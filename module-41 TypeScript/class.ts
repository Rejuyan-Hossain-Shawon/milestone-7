class Car {
    model:string;
    price:number;
    private millage:number;

    constructor(model:string,price:number,millage:number){
        this.model = model;
        this.price = price;
        this.millage = millage;
    }
    getActualMillage():number{
        return this.millage +1000;
    }
    getTotalPrice(tax:number):number{
        const taxNumber:number = this.price * tax/100;
        const totalPrice:number = taxNumber+ this.price;
        return totalPrice;

    }
}