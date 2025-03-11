export const PATIENT_INFORMATION = {
    NAME: "Marko", 
    SURNAME: "Petrović", 
    DATE_OF_BIRTH: "1990-03-15", 
    PHONE_NUMBER: "0606060660", 
    DISEASE_HISTORY: "Lots of them", 
    CURRNET_STATE: "Sick", 
    ALERGIES: "Penicilin",
}

export const DOCTOR_INFORMATION = {
    NAME: "Jovana", 
    SURNAME: "Ilić", 
    DATE_OF_BIRTH: "1970-01-01", 
    PHONE_NUMBER: "0666666666", 
    SPECIALIZATION: "Kardiolog"
}

let datum = new Date();
let day = datum.getDate();
let month = datum.getMonth() + 1;
let year = datum.getFullYear();

let today = `${year}-${month}-${day}`;

export const SERVICE_INFORMATION = {
    NAME: "EKG Test", 
    PRICE: "5000 RSD", 
    DATE: today,
}