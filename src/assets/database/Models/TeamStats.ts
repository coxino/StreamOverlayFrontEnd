export class TeamStats{
    nume:string = "";
    buyCost:number = 0;
    scor:number = 0;
    hasWon = false;
    prevX = 0;
    isCurrent = false;

    payout:PayoutTemplate[] = [];
}

export class PayoutTemplate{
    n = "";
    payout = 0;
}