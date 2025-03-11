export class BolnickoOdeljenje {
    constructor(naziv_odeljenja, lista_pacijenta, lista_lekara) {
        this.naziv_odeljenja=naziv_odeljenja;
        this.lista_pacijenta=lista_pacijenta;
        this.lista_lekara=lista_lekara;
    }

    prijemPacijenta(pacijent) {
        this.lista_pacijenta.push(pacijent);
    }

    dodaj_lekara(lekar) {
        this.lista_lekara.push(lekar);
    }

    prikaziPodatkeOdeljenja() {
        console.log(`Naziv odeljenja: ${this.naziv_odeljenja}`);

        let listOfPatients = [];
        for(let i = 0; i<this.lista_pacijenta.length; i++) {
            listOfPatients.push(this.lista_pacijenta[i].getPatientNameInList());
        }

        console.log(`Lista pacijenata: ${listOfPatients}`);

        let listOfDoctors = [];
        for(let i = 0; i<this.lista_lekara.length; i++) {
            listOfDoctors.push(this.lista_lekara[i].getDoctorNameInList());
        }

        console.log(`Lista lekara: ${listOfDoctors}`);
    }
}

export class Usluga {
    constructor(naziv_usluge, cena, datum_usluge) {
        this.naziv_usluge=naziv_usluge;
        this.cena=cena;
        this.datum_usluge=datum_usluge;
    }

    prikaziPodatkeUsluge() {
        console.log(`Naziv usluge: ${this.naziv_usluge}`);
        console.log(`Cena usluge: ${this.cena}`);
        console.log(`Datum: ${this.datum_usluge}`);
    }

    getServiceName() {
        return this.naziv_usluge;
    }
}
