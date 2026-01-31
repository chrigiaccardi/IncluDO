// Import delle classi

import { Partecipante, Corso, Azienda } from "./class/class.js";


// Creazione Istanze Migranti

const migrante1 = new Partecipante(
    "Amina", "Rahmani", "Marocco", "Laurea in Scienze Dell'educazione",
    "Arabo (madrelingua), Francese (ottimo), Italiano (intermedio)", "Educazione e pedagogia sociale",);

const migrante2 = new Partecipante("Oleksandr", "Petrenko", "Ucraina", "Diploma tecnico industriale",
    "Ucraino (madrelingua), Russo (fluente), Italiano (base)", "Meccanica industriale");

const migrante3 = new Partecipante("Laila", "Hassan", "Sudan", "Laurea triennale in Economia",
    "Arabo (madrelingua), Inglese (buono), Italiano (buono)", "Sanità e assistenza infermieristica");

const migrante4 = new Partecipante("José Antonio", "Rodríguez", "Venezuela", "Laurea in Scienze Dell'educazione",
    "Spagnolo (madrelingua), Inglese (avanzato), Italiano (intermedio)", "Contabilità");

const migrante5 = new Partecipante("Samira", "Qureshi", "Pakistan", "Diploma di Ragioneria",
    "Urdu (madrelingua), Inglese (buono), Italiano (base)", "Contabilità");

const migrante6 = new Partecipante("Dawit", "Tesfaye", "Etiopia", "Laurea in Scienze Dell'educazione",
    "Amarico (madrelingua), Inglese (avanzato), Italiano (intermedio)", "Informatica");

const migrante7 = new Partecipante("Lina", "Abdallah", "Siria", "Laurea in Psicologia",
    "Arabo (madrelingua), Inglese (buono), Italiano (intermedio)", "Educazione e supporto psicologico");

const migrante8 = new Partecipante("Carlos", "Mendoza", "Perù", "Diploma tecnico in Elettronica",
    "Spagnolo (madrelingua), Inglese (base), Italiano (intermedio)", "Manutenzione elettrica e impiantistica");

const migrante9 = new Partecipante("Fatou", "Diop", "Senegal", "Diploma superiore in Commercio",
    "Francese (madrelingua), Wolof (madrelingua), Italiano (base)", "Vendita e amministrazione");

const migrante10 = new Partecipante("Nadia", "Khalil", "Egitto", "Laurea in Informatica",
    "Arabo (madrelingua), Inglese (avanzato), Italiano (intermedio)", "Sviluppo software e tecnologie digitali");

const migrante11 = new Partecipante("Andrej", "Novak", "Serbia", "Laurea breve in Economia Aziendale",
    "Serbo (madrelingua), Inglese (avanzato), Italiano (intermedio)", "Gestione aziendale e contabilità");


// Creazione Corsi

const corso1 = new Corso("Educatore interculturale e mediatore sociale",
    "Formazione per lavorare in attività di inclusione e supporto scolastico",
    "Educazione e pedagogia sociale", 4);

const corso2 = new Corso("Tecnico manutentore meccanico-industriale",
    "Corso pratico per apprendere le competenze di manutenzione di macchinari industriali",
    "Meccanica Industriale", 6);

const corso3 = new Corso("Assistente Infermieristico e Sanitario",
    "Percorso di formazione per nuove figure di supporto nel settore sanitario",
    "Sanità e assistenza infermieristica", 8);

const corso4 = new Corso("Contabilità aziendale e gestione finanziaria",
    "Introduzione ai principi di contabilità e gestione bilanci per piccole imprese",
    "Contabilità", 1);

const corso5 = new Corso("Sviluppo Web e programmazione di base",
    "Corso Introduttivo alle tecnologie informatiche",
    "Informatica", 3);

// Creazione Aziende

const azienda1 = new Azienda("EduMondo Cooperativa Sociale", "Educazione e pedagogia sociale",
    "Cooperativa che promuove l’integrazione culturale e il supporto educativo per bambini e famiglie straniere",)

const azienda2 = new Azienda("MechPro Solutions", "Meccanica Industriale",
    "Azienda specializzata nella manutenzione e assistenza tecnica per impianti e macchinari industriali")

const azienda3 = new Azienda("SalusCare Italia", "Sanità e assistenza infermieristica",
    "Struttura privata convenzionata che offre assistenza infermieristica, domiciliare e hospice")

const azienda4 = new Azienda("Contabix Studio Associato", "Contabilità",
    "Studio professionale che offre servizi di contabilità, gestione paghe e consulenza aziendale")

const azienda5 = new Azienda("CodeForge Tech", "Informatica",
    "Startup tecnologica che sviluppa applicazioni web e mobile per aziende italiane e internazionali")

// Metodi Utilizzati per funzionamento app

    // Iscrizione al corso da parte dei migranti
    
    migrante1.iscrivitiCorso(corso1);
    migrante4.iscrivitiCorso(corso4);
    migrante6.iscrivitiCorso(corso5)
    migrante9.iscrivitiCorso(corso4);


    // Aggiunta dei partecipanti al corso
    
    corso4.aggiungiPartecipante(migrante9);
    corso5.aggiungiPartecipante(migrante6)
    corso1.aggiungiPartecipante(migrante1);
    corso4.aggiungiPartecipante(migrante4);
    
    // Offerta posizione lavorativa da parte delle aziende
    azienda4.offriPosizione(migrante4, "Ufficio Contabilità")
    azienda4.offriPosizione(migrante9, "Ufficio Acquisti")
    azienda5.offriPosizione(migrante6,"Informatico")
    azienda1.offriPosizione(migrante1, "Educatore")
    

// Debug finale per controllo Array Elenco Iscritti e Elenco Posizioni Aperte
console.log(corso4.elencoIscritti)
console.log(corso5.elencoIscritti)
console.log(azienda5.posizioniAperte)
console.log(azienda4.posizioniAperte)