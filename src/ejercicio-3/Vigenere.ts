export abstract class Vigenere{
    protected prepareKey:string = ""
    protected alphabet:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    protected prepareOriginal:string

    /**
     * constructor de la clase abstracta Vigenere
     * @param clave clave de cifrado
     * @param originalMess mensaje original
     */
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