export interface Streamable{
    name:String;
    fSal:Date;
    durat: number;
    director: string;
    rate:string;
    // episode:number;
    // numeps:number;
    // season:number;
    // numSea:number;
    getName():string;
    getFSal():Date;
    getDurat():number;
    getDirector():string;
    getRate():string;
    // getEpisode():string;
    // getSeason():string;
}