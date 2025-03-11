import { Person } from "./person.js";

export class Doctor extends Person {
    constructor(name, surname, date_of_birth, phone_number, specialty) {
        super(name, surname, date_of_birth, phone_number);
        this.specialty=specialty;
        this.patient_list=[];
    }

    setDiagnosis(patient, diagnosis) {
        patient.setCurrentState(diagnosis);
    }

    getDoctorNameInList() {
        return `Dr. ${this.name} ${this.surname}`;
    }

    getPatientList() {
        return this.patient_list;
    }
}