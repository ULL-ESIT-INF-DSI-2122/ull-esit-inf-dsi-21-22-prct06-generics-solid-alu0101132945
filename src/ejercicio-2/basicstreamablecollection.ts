import { Audiovisual, Film, Serie } from "./audiovisual";
import { StreamablePrint, StreamableSearch } from "./streamable";

abstract class BasicStreamableCollection<T extends Audiovisual> implements StreamablePrint,StreamableSearch{
    protected list:Array<T> = []

    /**
     * 
     * @param audiovisuals 
     */
    constructor(audiovisuals:Array<T>){
        audiovisuals.forEach(audiovisual => {
            this.list.push(audiovisual)
        });
    }

    searchNam(name:string):T{
        this.list.forEach(audiovisual => {
            if(name == audiovisual.getName()){
                return audiovisual
            }
        });
        console.error("No existe en la coleccion")
    }

    searchGenre(genre:string):T{
        this.list.forEach(audiovisual => {
            if(genre == audiovisual.getGenre()){
                return audiovisual
            }
        });
        console.error("No existe en la coleccion")
    }

    searchDir(director:string):T{
        this.list.forEach(audiovisual => {
            if(director == audiovisual.getDirector()){
                return audiovisual
            }
        });    
        console.error("No existe en la coleccion")
    }

    searchRate(rate:number):T{
        this.list.forEach(audiovisual => {
            if(rate == audiovisual.getRate()){
                return audiovisual
            }
        });
        console.error("No existe en la coleccion")
    }

    abstract searchDur(Duration:number):T
    abstract searchNumEp(numeps:number):T
    abstract searchNumSe(numSe:number):T
    print():void{
        console.log("{")
        this.list.forEach(audiovisual => {
            console.log(`[${audiovisual}]`)
        });
        console.log("}")
    }
}

export class FilmsCollection extends BasicStreamableCollection<Film>{
    constructor(...films:Array<Film>){
        super(films)
    }

    searchDur(duration:number):Film{
        this.list.forEach(film => {
            if(duration == film.getDurat()){
                return film
            }
        });
        console.error("No existe en la coleccion")
    }
    searchNumEp(numeps:number):Film{
        console.error("No existe en la coleccion")
    }
    searchNumSe(numSe:number):Film{
        console.error("No existe en la coleccion")
    }

    printAudiovisual(av:Film):void{
        this.list.forEach(film => {
            if(av == film){
                console.log(film)
            }
        });
        console.error("no existe la pelicula en la coleccion")
    }
}

export class SeriesCollection extends BasicStreamableCollection<Serie>{
    constructor(...serie:Array<Serie>){
        super(serie)
    }

    searchDur(duration:number):Serie{
        console.error("No existe en la coleccion")
    }
    searchNumEp(numeps:number):Serie{
        this.list.forEach(serie => {
            if(numeps == serie.getNumbEps()){
                return serie
            }
        });
        console.error("No existe en la coleccion")
    }
    searchNumSe(numSe:number):Serie{
        this.list.forEach(serie => {
            if(numSe == serie.getNumbSe()){
                return serie
            }
        });
        console.error("No existe en la coleccion")
    }

    printAudiovisual(av:Serie):void{
        this.list.forEach(serie => {
            if(av == serie){
                console.log(serie)
            }
        });
        console.error("no existe la pelicula en la coleccion")
    }
}