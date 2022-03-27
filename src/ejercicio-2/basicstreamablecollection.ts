import { Audiovisual, Film, Serie } from "./audiovisual";
import { StreamablePrint, StreamableSearch } from "./streamable";

abstract class BasicStreamableCollection<T extends Audiovisual> implements StreamablePrint,StreamableSearch{
    private list:Array<T> = []

    /**
     * 
     * @param audiovisuals 
     */
    constructor(...audiovisuals:Array<T>){
        audiovisuals.forEach(audiovisual => {
            this.list.push(audiovisual)
        });
    }

    searchNam(name:string):Audiovisual|undefined{
        this.list.forEach(audiovisual => {
            if(name == audiovisual.getName()){
                return audiovisual
            }
        });
        return undefined
    }

    searchGenre(genre:string):Audiovisual|undefined{
        this.list.forEach(audiovisual => {
            if(genre == audiovisual.getGenre()){
                return audiovisual
            }
        });
        return undefined
    }

    searchDir(director:string):Audiovisual|undefined{
        this.list.forEach(audiovisual => {
            if(director == audiovisual.getDirector()){
                return audiovisual
            }
        });    
        return undefined
    }

    searchRate(rate:number):Audiovisual|undefined{
        this.list.forEach(audiovisual => {
            if(rate == audiovisual.getRate()){
                return audiovisual
            }
        });
        return undefined
    }

    abstract searchDur(Duration:number):Audiovisual|undefined
    abstract searchNumEp(numeps:number):Audiovisual|undefined
    abstract searchNumSe(numSe:number):Audiovisual|undefined
    abstract printAudiovisual(av:Audiovisual):void
    print():void{
        console.log("{")
        this.list.forEach(audiovisual => {
            console.log(`[${audiovisual}]`)
        });
        console.log("}")
    }
}

export class