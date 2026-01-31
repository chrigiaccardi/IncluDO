// Import delle interface per le classi
// Export delle classi per il file app.ts e implementazioni Interface apposite
export class Partecipante {
    constructor(nome, cognome, paeseDiOrigine, livelloDiIstruzione, competenzeLinguistiche, ambitoDiFormazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseDiOrigine = paeseDiOrigine;
        this.livelloDiIstruzione = livelloDiIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.ambitoDiFormazione = ambitoDiFormazione;
    }
    // Funzione Per Iscrivere il Migrante al corso
    iscrivitiCorso(corso) {
        console.log(`${this.nome} ${this.cognome} ha scelto di frequentare il corso di ${corso.titoloDelCorso}.
            Il corso ha una durata di ${corso.durata} ${corso.durata === 1 ? `mese` : `mesi`} con specializzazione in ${corso.settoreProfessionale}.`);
    }
}
export class Corso {
    constructor(titoloDelCorso, descrizione, settoreProfessionale, durata) {
        this.titoloDelCorso = titoloDelCorso;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        // Elenco Iscritti al corso specifico
        this.elencoIscritti = [];
    }
    // Funzione per confermare la partecipazione del migrante al corso
    aggiungiPartecipante(partecipante) {
        this.elencoIscritti.push(partecipante);
        console.log(`${partecipante.nome} ${partecipante.cognome} è stato iscritto al corso ${this.titoloDelCorso}`);
    }
}
export class Azienda {
    constructor(nomeAzienda, settoreAttività, descrizione) {
        this.nomeAzienda = nomeAzienda;
        this.settoreAttività = settoreAttività;
        this.descrizione = descrizione;
        // Elenco delle Posizioni aperte dalla specifica azienda
        this.posizioniAperte = [];
    }
    // Funzione per dichiarare l'avvenuta offerta di lavoro da parte dell'azienda
    offriPosizione(partecipante, posizione) {
        this.posizioniAperte.push(posizione);
        console.log(`L'azienda ${this.nomeAzienda}, specializzata in ${this.descrizione}, offre l'opportunità lavorativa a 
                ${partecipante.nome} ${partecipante.cognome} come ${posizione} vista la sua formazione in ${partecipante.ambitoDiFormazione}.`);
    }
}
