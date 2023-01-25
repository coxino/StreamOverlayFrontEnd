export class ViewerLoginProfile{
    LocalUserToken:string = null;
    StreamerID:string = null;
    ProfilePicture:string = null;
    AuthPlatform:AuthPlatformEnum = AuthPlatformEnum.Disconected;
    UserName:string = null;
    IsMember:boolean = false;
    Email:string = null;
    constructor(){}
}

export enum AuthPlatformEnum{ 
    Disconected,   
    Youtube,
    Twitch
}