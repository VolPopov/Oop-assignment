import { Person } from "./person.js";

export class Patient extends Person {
    constructor(name, surname, date_of_birth, phone_number, illness_history, allergies, current_state) {
        super(name, surname, date_of_birth, phone_number);
        this.illness_history=illness_history;
        this.allergies=allergies;
        this.current_state=current_state;
    }

    reserveCheckup(doctor, service) {
        let fullName = `${this.name} ${this.surname}`;
        doctor.getPatientList().push(`${fullName}, ${service.getServiceName()}`);

    }

    cancelCheckup(doctor, service) {
        let fullName = `${this.name} ${this.surname}, ${service.getServiceName()}`;
        for(let i = 0; i<doctor.getPatientList().length; i++) {
            if(doctor.getPatientList()[i] == fullName) {
                doctor.getPatientList().splice(i, 1);
            }
        }
    }

    showIllnessHistory() {
        console.log(`Illness Histoy: ${this.illness_history}`);
    }

    getPatientNameInList() {
        return `${this.name} ${this.surname}`;
    }

    getCurrentState() {
        return this.current_state;
    }

    setCurrentState(diagnosis) {
        this.current_state = diagnosis;
    }
}