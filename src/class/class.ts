// Import delle interface per le classi

import { IAzienda } from "../types/types";
import { IPartecipante } from "../types/types";
import { ICorso } from "../types/types";

// Export delle classi per il file app.ts e implementazioni Interface apposite

export class Partecipante implements IPartecipante {
    constructor (public nome: string,
    public cognome: string,
    public paeseDiOrigine: string,
    public livelloDiIstruzione: string,
    public competenzeLinguistiche: string,
    public ambitoDiFormazione: string) { }
    
    // Funzione Per Iscrivere il Migrante al corso
    iscrivitiCorso(corso: ICorso): void {
        console.log(`${this.nome} ${this.cognome} ha scelto di frequentare il corso di ${corso.titoloDelCorso}.
            Il corso ha una durata di ${corso.durata} ${corso.durata === 1 ? `mese`: `mesi`} con specializzazione in ${corso.settoreProfessionale}.`)
    }
    
}

export class Corso implements ICorso {

    // Elenco Iscritti al corso specifico
    public elencoIscritti: IPartecipante[] = []

    constructor( public titoloDelCorso: string,
    public descrizione: string,
    public settoreProfessionale: string,
    public durata: number) {}
   
    // Funzione per confermare la partecipazione del migrante al corso
    aggiungiPartecipante(partecipante: IPartecipante): void {
        this.elencoIscritti.push(partecipante)
        console.log(`${partecipante.nome} ${partecipante.cognome} è stato iscritto al corso ${this.titoloDelCorso}`)
    }
    
}

export class Azienda implements IAzienda {

    // Elenco delle Posizioni aperte dalla specifica azienda
    public posizioniAperte: string[] = []

    constructor( public nomeAzienda: string,
    public settoreAttività: string,
    public descrizione: string) {}
   
    // Funzione per dichiarare l'avvenuta offerta di lavoro da parte dell'azienda
    offriPosizione(partecipante: IPartecipante, posizione: string): void {
      this.posizioniAperte.push(posizione)
            console.log(`L'azienda ${this.nomeAzienda}, specializzata in ${this.descrizione}, offre l'opportunità lavorativa a 
                ${partecipante.nome} ${partecipante.cognome} come ${posizione} vista la sua formazione in ${partecipante.ambitoDiFormazione}.`)
        
    }
    
}