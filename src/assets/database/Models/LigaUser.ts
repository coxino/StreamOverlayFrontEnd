export class Speciala
{
    public nume:string = "";
    public buyIn:number = 0.00;
    public payed:number = 0.00;
}
export class Rank
{
    public nume:string = "";
    public sanse:number = 1;
}

export class LigaUser
{
    public nume:string = "";
    public rank:Rank = new Rank();
    public  speciale:Array<Speciala> = [];
}