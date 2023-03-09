export class BonusHunt{
    huntInfo:string = '';
    huntNumber = 0;
    huntTotalBonuses = 0;
    huntValue = 0;
    huntTotalPay = 0;
    sliceIndex = 0;
    isScrolling = false;
    bonusHuntEnd = false;
    isHunting = false;
    bonuses:Bonus[] = [];
}

export class Bonus{
    gameName = "";
    betSize = 0;
    payed = 0;
    disabled = false;
    providerName = "";
    isCurrent = false;  
    multiplier = 0;    
}