export class Person {
    constructor(name, surname, date_of_birth, phone_number) {
        this.name=name;
        this.surname=surname;
        this.date_of_birth=date_of_birth;
        this.phone_number=phone_number;
    }

    showInformation() {
        console.log(`Name: ${this.name} ${this.surname}`);
        console.log(`Date of birth: ${this.date_of_birth}`);
        console.log(`Phone number: ${this.phone_number}`);
    }
}