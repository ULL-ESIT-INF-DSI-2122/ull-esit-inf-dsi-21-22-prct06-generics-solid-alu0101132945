import {Vigenere} from './Vigenere'
export class VigenereCipher extends Vigenere{
    private cipherMess = ""
    /**
     * constructor de la clase del cifrado de Vigenere
     * @param clave clave de cifrado
     * @param originalMess mensaje original
     */
    constructor(clave:string,originalMess:string){
        super(clave,originalMess)
    }
    
    /**
     * metodo que realiza el cifrado de Vigenere a un mensaje
     * @returns el mensaje cifrado
     */
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