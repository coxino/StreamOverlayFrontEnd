export class Settings{
        
        //public static readonly ApiServer = "https://coxino.go.ro:5000/api/";
        public static readonly ApiServer = "https://coxino.go.ro:8080/api/";
        public static readonly LoginUrl = "user/login";
        public static readonly RegisterUser = "user/register";
        // public static readonly ApiServer = "";
        
        public static readonly tranzactii:string = "tranzactii";
        public static readonly BonusBuyTournament:string = "tournament";
        public static readonly BonusBuyTournamentLiveFight:string = "tournament/livefight";
        public static readonly LiveBonusHunt:string = "bonushunt";
        public static readonly LiveGame:string = "inplay";
        
        public static readonly AnimationController:string = "profitAnimations";
        public static readonly LiveBetting:string = "betting";
        public static readonly CreateBettingFromTournament:string = "betting/createFromTournament";
        public static readonly HotWords:string = "hotwords";
        public static readonly ResetHotWords: string =  "hotwords/reset";
        public static readonly Pacaniada: string =  "pacaniada";
        
        
        
        //LiveUpdate Tournament
        public static readonly BonusBuyTournamentLiveFightUpdate:string = "tournament/livefightupdate";
        public static readonly BonusBuyTournamentLiveFightClose:string = "tournament/livefightclose";
        public static readonly BonusBuyTournamentCreate: string = "tournament/create";
        public static readonly BonusBuyTournamentUpdate: string = "tournament/update";
        
        //Update adresses
        public static readonly LiveBonusDelete: string = "bonushunt/delete";        
        public static readonly LiveBonusHuntUpdate: string = "bonushunt/set";
        public static readonly TranzactiiUpdate: string = "bonushunt/tranzactii";
        public static readonly AddSingleGameToBH:string = "bonushunt/add";
        
        //Theme Files
        public static readonly CustomTheme:string = "customTheme";
        
        //SUPERBET BALANCE
        public static readonly SuperbetBalanceLink:string = "https://legacy-web.betting.superbet.ro:8443/user/getPlayerBalance?IncludeBonusProductType=true&IncludeExternalBalances=true&IncludeBonusType=true&clientSourceType=Desktop_new";
        
        //LocalDB
        static AllGames: string = "assets/database/AllGames.json";
        
        //BETTING
        public static readonly CreateBetFromTournament = "betting/createFromTournament";
        public static readonly CreateBetFromBonushunt = "betting/createFromBonushunt";
        public static readonly UpdateBetting = "betting/replace";
        public static readonly BetAsUser = "betting/updateOption";
        public static readonly SetWinner = "betting/setwinner";
        
        //Loyality
        public static readonly LoyalityGetRanks:string = "loyality/ranking";
        public static readonly LoyalityGetTikets:string = "loyality/tikets";
        
        public static readonly StocItem0="shop/stoc";
        public static readonly LigaSpecialelor: string = "ligaspecialelor/clasament";
        public static readonly GiveAways: string = "giveaway";
        public static readonly GiveAwaysSetWinner: string = "giveaway/setWinner";
        public static readonly SaveShop: string = "shop/saveshop"
        
        public static readonly ShopItems: string = "shop?username=";
        
        public static readonly StreamerPage: string =  "streamer/";
        
        public static readonly SlotsRumble: string = "RoyaleRumble";
        public static readonly RumbleUpdate: string = "RoyaleRumble/RumbleUpdate";
        public static readonly SlotsRumbleArchive: string = "RoyaleRumble/CreateNewRumble";
        
        //public static readonly GetGiveawayCount: string = "hotwords/lmausers";
        public static readonly GetBalantaFinalaCount: string = "hotwords/bfusers";
        public static readonly Qualifier: string = "Bonushunt/qualifiers";
        static SiteName: "Casino Streaming Companion";
}