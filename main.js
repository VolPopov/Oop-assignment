import { DOCTOR_INFORMATION, PATIENT_INFORMATION, SERVICE_INFORMATION } from "./features.js";
import { Lekar, Pacijent } from "./persons.js";
import { BolnickoOdeljenje, Usluga } from "./services.js";

let patient = new Pacijent(PATIENT_INFORMATION["NAME"], PATIENT_INFORMATION["SURNAME"], PATIENT_INFORMATION["DATE_OF_BIRTH"], 
PATIENT_INFORMATION["PHONE_NUMBER"], PATIENT_INFORMATION["DISEASE_HISTORY"], PATIENT_INFORMATION["ALERGIES"], PATIENT_INFORMATION["CURRNET_STATE"]);

let patientList = [];

let doctor = new Lekar(DOCTOR_INFORMATION["NAME"], DOCTOR_INFORMATION["SURNAME"], DOCTOR_INFORMATION["DATE_OF_BIRTH"], 
    DOCTOR_INFORMATION["PHONE_NUMBER"], DOCTOR_INFORMATION["SPECIALIZATION"], patientList);

let listOfDoctors = [];
let listOfPatients = [];
let odeljenje = new BolnickoOdeljenje("Kardiologija", listOfPatients, listOfDoctors);

odeljenje.dodaj_lekara(doctor);

let novaUsluga = new Usluga(SERVICE_INFORMATION["NAME"], SERVICE_INFORMATION["PRICE"], SERVICE_INFORMATION["DATE"]);

odeljenje.prijemPacijenta(patient);

patient.zakaziPregled(doctor, novaUsluga);

doctor.postaviDijagnozu(patient, "Blaga aritmija");

patient.prikaziPodatke();
console.log();
doctor.prikaziPodatke();
console.log();
odeljenje.prikaziPodatkeOdeljenja();
console.log();
novaUsluga.prikaziPodatkeUsluge();
console.log();
console.log(doctor.lista_pacijenata);
console.log();
console.log(patient.trenutno_stanje);
