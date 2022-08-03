import { Meci } from "./Meci";

export class TournamentModel{
    isOptimi = false;
    isQuarter = false;
    isSemis =false;
    isFinal = false;
    isPaused = false;

    meciuriOptimi:Meci[] = [];
    meciuriSferturi:Meci[] = [];
    meciuriSemiFinale:Meci[] =[];
    meciFinal:Meci = new Meci();

}