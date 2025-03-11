import { DOCTOR_INFORMATION, PATIENT_INFORMATION, SERVICE_INFORMATION } from "./features.js";
import { Doctor } from "./doctor.js";
import { Patient } from "./patient.js";
import { HospitalDepartment } from "./hospitalDepartment.js";
import { Service } from "./service.js";

let patient = new Patient(PATIENT_INFORMATION["NAME"], PATIENT_INFORMATION["SURNAME"], PATIENT_INFORMATION["DATE_OF_BIRTH"], 
PATIENT_INFORMATION["PHONE_NUMBER"], PATIENT_INFORMATION["DISEASE_HISTORY"], PATIENT_INFORMATION["ALERGIES"], PATIENT_INFORMATION["CURRNET_STATE"]);


let doctor = new Doctor(DOCTOR_INFORMATION["NAME"], DOCTOR_INFORMATION["SURNAME"], DOCTOR_INFORMATION["DATE_OF_BIRTH"], 
    DOCTOR_INFORMATION["PHONE_NUMBER"], DOCTOR_INFORMATION["SPECIALIZATION"]);


let department = new HospitalDepartment("Cardiology");

department.addDoctor(doctor);

let newService = new Service(SERVICE_INFORMATION["NAME"], SERVICE_INFORMATION["PRICE"], SERVICE_INFORMATION["DATE"]);

department.addPatient(patient);

patient.reserveCheckup(doctor, newService);

doctor.setDiagnosis(patient, "Mild arrhythmia");

patient.showInformation();
console.log();
doctor.showInformation();
console.log();
department.showDepartmentInformation();
console.log();
newService.showServiceInformation();
console.log();
console.log(doctor.patient_list);
console.log();
console.log(patient.current_state);
patient.cancelCheckup(doctor, newService);
console.log(doctor.patient_list);
