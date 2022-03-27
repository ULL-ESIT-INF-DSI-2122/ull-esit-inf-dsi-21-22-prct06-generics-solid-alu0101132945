import { PrintableCollection } from "./PrintableCollection";

export class NumericPrintableCollection extends PrintableCollection{

    /**
     * constructor de la clase numeric
     * @param col coleccion de numeros que se va a guardar en el atributo collect
     */
    constructor(col:number[]){
        super(col)    
    }

    /**
     * Implementacion del metodo abstracto print en la clase numeric
     * @returns devuelve una cadena con los numeros de la coleccion separados por comas
     */
    print():string{
        let result = ""
        this.collect.forEach(num => {
            result += num
            if(this.collect.indexOf(num) != this.collect.length-1){
                result += ',' 
            }
        });
        return result
    }
}