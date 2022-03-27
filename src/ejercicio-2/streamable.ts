import { Audiovisual } from "./audiovisual";

export interface StreamableSearch{
    searchNam(name:string):Audiovisual|undefined;
    searchGenre(genre:string):Audiovisual|undefined;
    searchDir(director:string):Audiovisual|undefined;
    searchRate(rate:number):Audiovisual|undefined;
    searchDur(duration:number):Audiovisual|undefined;
    searchNumEp(numeps:number):Audiovisual|undefined;
    searchNumSe(numSe:number):Audiovisual|undefined;
}

export interface StreamablePrint{
    printAudiovisual(av:Audiovisual):void;
    print():void;
}