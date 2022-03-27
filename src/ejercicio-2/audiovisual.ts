export abstract class Audiovisual{
    private name:string
    private type:string
    private genre:string
    private fSal:Date
    private director: string
    private rate:number

    /**
     * 
     * @param na 
     * @param ty 
     * @param fS 
     * @param di 
     * @param ra 
     */
    constructor(na:string,ty:string,ge:string,fS:Date,di:string,ra:number){
        this.name = na
        this.type = ty
        this.genre = ge
        this.fSal = fS
        this.director = di
        if(ra >= 10){console.error("la puntuacion introducida al producto no es correcto")}
        this.rate = ra
    }

    /**
     * 
     * @returns 
     */
    getName():string{
        return this.name
    }

    /**
     * 
     * @returns 
     */
    getType():string{
        return this.type
    }

    getGenre():string{
        return this.genre
    }

    /**
     * 
     * @returns 
     */
    getFSal():Date{
        return this.fSal
    }

    /**
     * 
     * @returns 
     */
    getDirector():string{
        return this.director
    }
    
    /**
     * 
     * @returns 
     */
    getRate():number{
        return this.rate
    }
 
    
}

export class Film extends Audiovisual{

    private durat:number
    /**
     * 
     * @param na 
     * @param ty 
     * @param ge 
     * @param fS 
     * @param di 
     * @param ra 
     * @param du 
     */
    constructor(na:string,ty:string = "film",ge:string,fS:Date,di:string,ra:number,du:number){
        super(na,ty,ge,fS,di,ra)
        this.durat = du
    }

    /**
     * 
     * @returns 
     */
     getDurat():number|undefined{
        return this.durat
    }
}

export class Serie extends Audiovisual{
    private numEps:number
    private numSea:number

    /**
     * 
     * @param na 
     * @param ty 
     * @param ge 
     * @param fS 
     * @param di 
     * @param ra 
     * @param nuEps 
     * @param nuSe 
     */
    constructor(na:string,ty:string = "serie",ge:string,fS:Date,di:string,ra:number,nuEps:number,nuSe:number){
        super(na,ty,ge,fS,di,ra)
        this.numEps = nuEps
        this.numSea = nuSe
    }

    /**
     * 
     * @returns 
     */
     getNumbEps():number{    
        return this.numEps
    }

    /**
     * 
     * @returns 
     */
    getNumbSe():number{    
        return this.numSea
    }

}