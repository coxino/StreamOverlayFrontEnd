export class ViewerLoginProfile{
    LocalUserToken:string = null;
    StreamerID:string = null;
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