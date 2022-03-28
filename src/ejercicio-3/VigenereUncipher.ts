import { Vigenere } from "./Vigenere";

export class VigenereUncipher extends Vigenere{
    private uncipherMess:string = ""

    /**
     * constructor del descifrado
     * @param cM mensaje cifrado que se guardara como el original ya que las operaciones que se utilizan son las mismas
     * @param key clave de descifrado en este caso
     */
    constructor(cM:string,key:string) {
        super(cM,key)
    }

    /**
     * metodo de descrifado de un mensaje cifrado con Vigenere
     * @returns el mensaje original
     */
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