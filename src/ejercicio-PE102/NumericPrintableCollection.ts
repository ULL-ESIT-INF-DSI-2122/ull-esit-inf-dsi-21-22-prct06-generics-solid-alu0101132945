import { PrintableCollection } from "./PrintableCollection";

export class NumericPrintableCollection extends PrintableCollection{
    constructor(col:number[]){
        super(col)    
    }
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