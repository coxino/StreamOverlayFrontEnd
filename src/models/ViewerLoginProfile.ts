export class ViewerLoginProfile{
    LocalUserToken:string = null;
    ProfilePicture:string = null;
    AuthPlatform:AuthPlatformEnum = AuthPlatformEnum.Disconected;
    UserName:string = null;
    IsMember:boolean = false;
    IsVerified = false;
    Email:string = null;
    HasNotifications = false;    
    constructor(){}
}

export enum AuthPlatformEnum{ 
    Disconected,   
    Youtube,
    Twitch
}

export class StreamerProfilePage{
    //Configurable
    ChannelId:string = null;
    ChannelName:string = null;    
    ProfilePicture:string = null;
    ShopSettings: any[] = [];
    //Internal
    StreamerID:string = null;
    BackgroundImage: string;
    LoyaltySettings:LoyaltySettings = new LoyaltySettings();
    constructor(){}
}

export class LoyaltySettings{
    loyaltyName: "COX"
    rewardPerMinute: 5
}