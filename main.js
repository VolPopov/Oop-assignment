import { DOCTOR_INFORMATION, PATIENT_INFORMATION, SERVICE_INFORMATION } from "./features.js";
import { Lekar, Pacijent } from "./persons.js";
import { BolnickoOdeljenje, Usluga } from "./services.js";

let patient = new Pacijent(PATIENT_INFORMATION["NAME"], PATIENT_INFORMATION["SURNAME"], PATIENT_INFORMATION["DATE_OF_BIRTH"], 
PATIENT_INFORMATION["PHONE_NUMBER"], PATIENT_INFORMATION["DISEASE_HISTORY"], PATIENT_INFORMATION["ALERGIES"], PATIENT_INFORMATION["CURRNET_STATE"]);

let patientList = [];

patient.prikaziPodatke();

console.log();


let doctor = new Lekar(DOCTOR_INFORMATION["NAME"], DOCTOR_INFORMATION["SURNAME"], DOCTOR_INFORMATION["DATE_OF_BIRTH"], 
    DOCTOR_INFORMATION["PHONE_NUMBER"], DOCTOR_INFORMATION["SPECIALIZATION"], patientList);

doctor.prikaziPodatke();

let listOfDoctors = [];
let listOfPatients = [];
let odeljenje = new BolnickoOdeljenje("Kardiologija", listOfPatients, listOfDoctors);

odeljenje.dodaj_lekara(doctor);
odeljenje.prikaziPodatkeOdeljenja();

let novaUsluga = new Usluga(SERVICE_INFORMATION["NAME"], SERVICE_INFORMATION["PRICE"], SERVICE_INFORMATION["DATE"]);
novaUsluga.prikaziPodatkeUsluge();

odeljenje.prijemPacijenta(patient);
odeljenje.prikaziPodatkeOdeljenja();

patient.zakaziPregled(doctor, novaUsluga);

doctor.prikaziPodatke();
console.log(doctor.lista_pacijenata);

console.log(patient.trenutno_stanje);

doctor.postaviDijagnozu(patient, "Blaga aritmija");
console.log(patient.trenutno_stanje);
