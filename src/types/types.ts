export interface IPartecipante {
    nome: string;
    cognome: string;
    paeseDiOrigine: string;
    livelloDiIstruzione: string;
    competenzeLinguistiche: string;
    ambitoDiFormazione: string;

    iscrivitiCorso(corso: ICorso): void;
}
export interface ICorso {
    titoloDelCorso: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number;
    elencoIscritti: IPartecipante[];

    aggiungiPartecipante(partecipante: IPartecipante): void;
}

export interface IAzienda{
    nomeAzienda: string;
    settoreAttività: string;
    descrizione: string;
    posizioniAperte: string[];

    offriPosizione(partecipante: IPartecipante, posizione: string): void;
}
