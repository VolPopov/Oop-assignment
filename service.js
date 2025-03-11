export class Service {
    constructor(name_of_service, price, date_of_service) {
        this.name_of_service=name_of_service;
        this.price=price;
        this.date_of_service=date_of_service;
    }

    showServiceInformation() {
        console.log(`Name of service: ${this.name_of_service}`);
        console.log(`Price of service: ${this.price}`);
        console.log(`Date of service: ${this.date_of_service}`);
    }

    getServiceName() {
        return this.name_of_service;
    }
}