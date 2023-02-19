import { Pipe, PipeTransform } from '@angular/core';
import { RumbleTeam } from 'src/assets/database/Models/SlotsRumbleModel';

@Pipe({
    name: 'sumarr'
})
export class SumPipe implements PipeTransform {
    transform(items: any[], attr: string): any {
        return items.reduce((a, b) => a + b[attr], 0);
    }
}

@Pipe({
    name: 'score',
})
export class SumPipeSimple implements PipeTransform {
    transform(pay: number,buy:number): any {     
        return pay / buy;
    }
}

@Pipe({
    name: 'haslost'
})
export class HasLostPipe implements PipeTransform {
    transform(team1: RumbleTeam,team2:RumbleTeam): any {
            if(team1.payout == 0 || team2.payout ==0)
            return;
        return team1.payout / team1.buyCost < team2.payout / team2.buyCost;
    }
}