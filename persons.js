export class Osoba {
    constructor(ime, prezime, datum_rodjenja, broj_telefona) {
        this.ime=ime;
        this.prezime=prezime;
        this.datum_rodjenja=datum_rodjenja;
        this.broj_telefona=broj_telefona;
    }

    prikaziPodatke() {
        console.log(`Ime: ${this.ime} ${this.prezime}`);
        console.log(`Datum rođenja: ${this.datum_rodjenja}`);
        console.log(`Broj telefona: ${this.broj_telefona}`);
    }
}

export class Pacijent extends Osoba {
    constructor(ime, prezime, datum_rodjenja, broj_telefona, istorija_bolesti, alergije, trenutno_stanje) {
        super(ime, prezime, datum_rodjenja, broj_telefona);
        this.istorija_bolesti=istorija_bolesti;
        this.alergije=alergije;
        this.trenutno_stanje=trenutno_stanje;
    }

    zakaziPregled(lekar, usluga) {
        let fullName = `${this.ime} ${this.prezime}`;
        lekar.getPatientList().push(`${fullName}, ${usluga.getServiceName()}`);
    }

    prikaziIstorijuBolesti() {
        console.log(`Istorija bolesti: ${this.istorija_bolesti}`);
    }

    getPatientNameInList() {
        return `${this.ime} ${this.prezime}`;
    }

    getCurrentState() {
        return this.trenutno_stanje;
    }

    setCurrentState(diagnosis) {
        this.trenutno_stanje = diagnosis;
    }
}

export class Lekar extends Osoba {
    constructor(ime, prezime, datum_rodjenja, broj_telefona, specijalizacija, lista_pacijenata) {
        super(ime, prezime, datum_rodjenja, broj_telefona);
        this.specijalizacija=specijalizacija;
        this.lista_pacijenata=lista_pacijenata;
    }

    postaviDijagnozu(pacijent, dijagnoza) {
        pacijent.setCurrentState(dijagnoza);
    }

    getDoctorNameInList() {
        return `Dr. ${this.ime} ${this.prezime}`;
    }

    getPatientList() {
        return this.lista_pacijenata;
    }
}