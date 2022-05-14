export class BettingModel
{
    public voteTitle:string = "";
    public maxBet:number = 0;
    public options:BettingOptionModel[] = [];
}

export class BettingOptionModel
{
    public nume:string ="";
    public optiune:string = "";
    public progress:number = 0;
    public voturi:number = 0;
    public totalPariat:number = 0;
    public isVisible:boolean = false;
    public didRefreshed = false;
}