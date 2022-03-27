import { Collectable } from "./Collectable";
import { Printable } from "./Printable";

export abstract class PrintableCollection<T> implements Collectable<T>,Printable{
    collect:Array<T>;
    /**
     * constructor de la clase abstracta PrintableCollection
     * @param col coleccion que se va a usar para el atributo collect
     */
    constructor(col:Array<T>){
        this.collect = col
    }

    /**
     * este metodo añade al final de la coleccion un item
     * @param item el item que se añade a la coleccion con el metodo
     */
    addItem(item:T){
        this.collect.push(item)
    }

    /**
     * este metodo busca un item en la coleccion y lo devuelve si existe
     * @param item el item que se va a buscar en la coleccion
     */
    getItem(item:T):T{
        let result: T = item
        this.collect.forEach(it => {
            if(item == it){result = it}
            else{console.error("Ese objeto no esta en la coleccion")}
        });
        return result
    }

    /**
     * este metodo borra un item de la coleccion
     * @param item el item que se va a borrar
     */
    removeItem(item:T){
        let index:number = this.collect.indexOf(item)
        if(index == -1){console.error("Ese objeto no esta en la coleccion")}
        this.collect.splice(index,1)
    }

    /**
     * este metodo devuelve el numero de objetos que hay en la coleccion
     * @returns el numero de objetos que hay en la coleccion
     */
    getNumberofItems():number{
        return this.collect.length
    }
    
    abstract print():string;
}