export class HospitalDepartment {
    constructor(department_name) {
        this.department_name = department_name;
        this.list_of_patients = [];
        this.list_of_doctors = [];
    }

    addPatient(patient) {
        this.list_of_patients.push(patient);
    }

    addDoctor(doctor) {
        this.list_of_doctors.push(doctor);
    }

    showDepartmentInformation() {
        console.log(`Department name: ${this.department_name}`);

        let listOfPatients = [];
        for(let i = 0; i<this.list_of_patients.length; i++) {
            listOfPatients.push(this.list_of_patients[i].getPatientNameInList());
        }

        console.log(`List of patients: ${listOfPatients}`);

        let listOfDoctors = [];
        for(let i = 0; i<this.list_of_doctors.length; i++) {
            listOfDoctors.push(this.list_of_doctors[i].getDoctorNameInList());
        }

        console.log(`List of doctors: ${listOfDoctors}`);
    }
}