export class Partecipante {
    constructor(nome, cognome, paeseDiOrigine, livelloDiIstruzione, competenzeLinguistiche, ambitoDiFormazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseDiOrigine = paeseDiOrigine;
        this.livelloDiIstruzione = livelloDiIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoDiFormazione = ambitoDiFormazione;
    }
    iscrivitiCorso(corso) {
    }
}
export class Corso {
    constructor(titoloDelCorso, descrizione, settoreProfessionale, durata) {
        this.titoloDelCorso = titoloDelCorso;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.elencoIscritti = [];
    }
    aggiungiPartecipante(partecipante) {
    }
}
export class Azienda {
    constructor(nomeAzienda, settoreAttività, descrizione) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttività = settoreAttività;
        this.descrizione = descrizione;
        this.posizioniAperte = [];
    }
    offriPosizione(partecipante, posizione) {
    }
}
