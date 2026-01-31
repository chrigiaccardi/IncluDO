import { IAzienda } from "../types/types";
import { IPartecipante } from "../types/types";
import { ICorso } from "../types/types";

export class Partecipante implements IPartecipante {
    constructor (public nome: string,
    public cognome: string,
    public paeseDiOrigine: string,
    public livelloDiIstruzione: string,
    public competenzeLinguistiche: string,
    public ambitoDiFormazione: string) { }
    
    iscrivitiCorso(corso: ICorso): void {
        
    }
    
}

export class Corso implements ICorso {

    public elencoIscritti: IPartecipante[] = []

    constructor( public titoloDelCorso: string,
    public descrizione: string,
    public settoreProfessionale: string,
    public durata: number) {}
   
    aggiungiPartecipante(partecipante: IPartecipante): void {
     
    }
    
}

export class Azienda implements IAzienda {

    public posizioniAperte: string[] = []

    constructor( public nomeAzienda: string,
    public settoreAttività: string,
    public descrizione: string,) {}
   
    offriPosizione(partecipante: IPartecipante, posizione: string): void {
    
    }
    
}