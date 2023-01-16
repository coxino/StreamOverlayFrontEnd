
export class UserLoyal{
    public id ="";
    public name = "";
    public userCox =0;
    public email ="";
    public ipadress ="";
    public creationTime = "";
    public superbetName = "";
    public isActive = false;
    public memberLevel:MemberLevels = MemberLevels.Viewer;
}  

export enum MemberLevels{
        Viewer,
        Moderator,
        Coxumator,
        Ajutor,
        Gangster,
        Cop,
        ElChapo,
}