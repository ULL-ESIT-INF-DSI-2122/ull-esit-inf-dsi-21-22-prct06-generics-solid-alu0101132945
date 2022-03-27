import { PrintableCollection } from "./PrintableCollection";

export class StringPrintableCollection extends PrintableCollection{
    /**
     * constructor de la clase string
     * @param col la coleccion de string que vamos a guardar en el atributo collect
     */
    constructor(col:string[]){
        super(col)
    }

    /**
     * implementacion del metodo abstracto print para la clase string
     * @returns una cadena con las cadenas de la coleccion separadas por comas
     */
    print():string{
        let result = ""
        this.collect.forEach(str => {
            result += str
            if(this.collect.indexOf(str) != this.collect.length-1){
                result += ',' 
            }
        });
        return result
    }
}