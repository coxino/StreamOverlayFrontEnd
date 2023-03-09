
export class RumbleTeam {
    public gameName: string;
    public numeJucator: string;
    public buyCost: number;
    public payout: number;
}

export class RumbleMeci {
    public team1: RumbleTeam = new RumbleTeam();
    public team2: RumbleTeam = new RumbleTeam();
}

export class SlotsRumbleModel {
    public rumbleId: number;
    public gameHistory: RumbleMeci[];
}
