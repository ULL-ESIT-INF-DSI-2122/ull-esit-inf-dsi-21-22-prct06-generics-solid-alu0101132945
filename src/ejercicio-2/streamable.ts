import { Audiovisual } from "./audiovisual";

export interface StreamableSearch{
    searchNam(name:string):Audiovisual;
    searchGenre(genre:string):Audiovisual;
    searchDir(director:string):Audiovisual;
    searchRate(rate:number):Audiovisual;
    searchDur(duration:number):Audiovisual;
    searchNumEp(numeps:number):Audiovisual;
    searchNumSe(numSe:number):Audiovisual;
}

export interface StreamablePrint{
    print():void;
}