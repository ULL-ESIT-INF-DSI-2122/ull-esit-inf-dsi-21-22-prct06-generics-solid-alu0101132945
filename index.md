# Practica 6 - Clases e interfaces genéricas. Principios SOLID
## Carlos Pío Reyes

## Ejercicio 2

En este ejercicio se pedia impementar una serie de interfaces y clases para simular una coleccion de _series y peliculas_ en las que buscar distintos contenidos, esto se consigue implementando primero una clase ```Audiovisual``` con sus hijas ```Film``` y ```Serie``` que representan todas un elemento del mismo nombre que la clase con todos sus datos, estas clases ademas tienen los getters necesarios para extraer estos datos y poder ser utilizados por otras clases:

```Typescript
export abstract class Audiovisual{
    private name:string
    private type:string
    private genre:string
    private fSal:Date
    private director: string
    private rate:number

    constructor(na:string,ty:string,ge:string,fS:Date,di:string,ra:number){
        this.name = na
        this.type = ty
        this.genre = ge
        this.fSal = fS
        this.director = di
        if(ra >= 10){console.error("la puntuacion introducida al producto no es correcto")}
        this.rate = ra
    }

    getName():string{
        return this.name
    }

    getType():string{
        return this.type
    }

    getGenre():string{
        return this.genre
    }

    getFSal():Date{
        return this.fSal
    }

    getDirector():string{
        return this.director
    }
    
    getRate():number{
        return this.rate
    }
 
    
}

export class Film extends Audiovisual{

    private durat:number
 
    constructor(na:string,ty:string = "film",ge:string,fS:Date,di:string,ra:number,du:number){
        super(na,ty,ge,fS,di,ra)
        this.durat = du
    }

     getDurat():number|undefined{
        return this.durat
    }
}

export class Serie extends Audiovisual{
    private numEps:number
    private numSea:number

    constructor(na:string,ty:string = "serie",ge:string,fS:Date,di:string,ra:number,nuEps:number,nuSe:number){
        super(na,ty,ge,fS,di,ra)
        this.numEps = nuEps
        this.numSea = nuSe
    }

     getNumbEps():number{    
        return this.numEps
    }

    getNumbSe():number{    
        return this.numSea
    }

}
```

seguidamente tenemos uno de los elementos que se pedian en el enunciado del ejercicio, la interfaz ```Streamable``` que para respetar el principio SOLID __Interface Segregation__ se subdivide en dos interfaces la interfaz ```SearchStreamable``` y la interfaz ```PrintStreamable```, que hacen lo que sus propios nombres indican, crear los nombres de los metodos de _busqueda_ e _impresion_ de una coleccion audivisual:

```Typescript
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
```

por ultimo tenemos otro de los elementos que se piden en el enunciado, la clase abstracta ```BasicStreamableCollection``` que deriva en dos clases hijas: ```Film Collection``` y ```Serie Collection``` que implementan los metodos de _busqueda_ e _impresion_ de las interfaces arriba nombradas:

```Typescript
abstract class BasicStreamableCollection<T extends Audiovisual> implements StreamablePrint,StreamableSearch{
    protected list:Array<T> = []
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
```

## Ejercicio 3

En este ejercicio se pide implementar el __cifrado de Vigenere__ utilizando el diseño que mas nos convenga intentando respetar los __principios SOLID__. En mi caso cree 3 clases, una clase abstracta ```Vigenere``` que prepara el mensaje y la clave para poder ser operados y posteriormente separe los metodos de cifrado y descifrado en dos clases distintas, intentando con ello respetar el _principio SOLID_ __Single responsibility principle__ haciendo que cada clase sea responsable de una unica operacion que se le hace a los mensajes y claves y __Open-closed principle__ extendiendo la clase abstracta Vigenere pero no dejando que sea modificada al implementar las operaciones de cifrado y descifrado:

```Typescript
export abstract class Vigenere{
    protected prepareKey:string = ""
    protected alphabet:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    protected prepareOriginal:string

    constructor(clave:string,originalMess:string){
        let key = clave.toUpperCase()
        this.prepareOriginal = originalMess.replace(" ", "").toUpperCase()
        
        if(this.prepareOriginal.length > key.length){
            for(let i = 0; i <= this.prepareOriginal.length/key.length; i++){
                this.prepareKey += key
            }
            this.prepareKey += key.slice(0,this.prepareOriginal.length%key.length) 
        }
        else if(this.prepareOriginal.length < key.length){
            this.prepareKey = key.slice(0,this.prepareOriginal.length)
        }
        else{
            this.prepareKey = key
        }
    }
}

export class VigenereCipher extends Vigenere{
    private cipherMess = ""

    constructor(clave:string,originalMess:string){
        super(clave,originalMess)
    }
    
    cipher():string{
        console.log(this.prepareOriginal)
        
        for(let i:number = 0; i< this.prepareOriginal.length; i++){
            let x = this.alphabet.search(this.prepareOriginal[i])
            let y = this.alphabet.search(this.prepareKey[i])
            let sum = Number(x+y)
            let mod = sum % this.alphabet.length
            this.cipherMess += this.alphabet[mod]
        } 
        console.log(this.cipherMess)
        return this.cipherMess
    }
}

export class VigenereUncipher extends Vigenere{
    private uncipherMess:string = ""

    constructor(cM:string,key:string) {
        super(cM,key)
    }

    uncipher():string{
        for(let i = 0; i <= this.prepareOriginal.length; i++){
            let x = this.alphabet.search(this.prepareOriginal[i])
            let y = this.alphabet.search(this.prepareKey[i])
            let diff: number = Number(x-y)
            let mod = diff%this.alphabet.length
            this.uncipherMess += this.alphabet[mod]
        }
        console.log(this.uncipherMess)
        return this.uncipherMess
    }
    
}
```