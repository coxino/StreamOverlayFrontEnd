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
    //Internal
    streamerID:string = null;
    Infos: Info = new Info();
    constructor(){}
}

export class LoyaltySettings{
    loyaltyName: "COX"
    rewardPerMinute: 5
}

export class RequestFromViewerForm{
    key:string;
    value:string;
    reason:string;    
}

export class Info
{
    //Configurable
    channelId:string = null;
    channelName:string = null;    
    profilePicture:string = null;    
    backgroundImage: string;    
    loyaltySettings:LoyaltySettings = new LoyaltySettings();
    shopSettings: RequestFromViewerForm[] = [];
}