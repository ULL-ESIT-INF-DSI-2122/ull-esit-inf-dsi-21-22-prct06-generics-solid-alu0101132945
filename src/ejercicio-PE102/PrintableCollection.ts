import { Collectable } from "./Collectable";
import { Printable } from "./Printable";

export abstract class PrintableCollection implements Collectable,Printable{
    collect:any[];
    constructor(col:any[]){
        this.collect = col
    }
    addItem(item:any){
        this.collect.push(item)
    }
    getItem(item:any):any{
        this.collect.forEach(it => {
            if(item == it){return it}
            else{console.error("Ese objeto no esta en la coleccion")}
        });
    }
    removeItem(item:any){
        let index:number = this.collect.indexOf(item)
        if(index == -1){console.error("Ese objeto no esta en la coleccion")}
        this.collect.splice(index,1)
    }
    getNumberofItems():number{
        return this.collect.length
    }
    abstract print():string;
}