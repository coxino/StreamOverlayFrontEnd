import { Meci } from "./Meci";

export class TournamentModel{
    isQuarter = false;
    isSemis =false;
    isFinal = false;
    isPaused = false;

    meciuriSferturi:Meci[] = [];
    meciuriSemiFinale:Meci[] =[];
    meciFinal:Meci = new Meci();

}