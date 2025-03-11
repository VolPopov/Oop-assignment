import { Person } from "./person.js";

export class Patient extends Person {
    constructor(name, surname, date_of_birth, phone_number, illness_history, allergies, current_state) {
        super(name, surname, date_of_birth, phone_number);
        this.illness_history = illness_history;
        this.allergies = allergies;
        this.current_state = current_state;
    }

    reserveCheckup(doctor, service) {
        let fullName = `${this.name} ${this.surname}`;
        let counter = 0;
        let dateOfProcedure;
        for (const element of doctor.getPatientList()) {
            
            if (element == `${fullName}, ${service.getServiceName()}, ${service.getServiceDate()}`) {
                counter ++;
                dateOfProcedure = element.split(",")[2];
            }
        }
        if (counter == 0) {
        doctor.getPatientList().push(`${fullName}, ${service.getServiceName()}, ${service.getServiceDate()}`);
        }
        else {
            if(service.getServiceDate == dateOfProcedure) {
                doctor.getPatientList().push(`${fullName}, ${service.getServiceName()}, ${service.getServiceDate()}`);
            }
            else {
                console.log("Appointment already made during the same date");
            }
        }
    }

    cancelCheckup(doctor, service) {
        let fullName = `${this.name} ${this.surname}, ${service.getServiceName()}, ${service.getServiceDate()}`;
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
