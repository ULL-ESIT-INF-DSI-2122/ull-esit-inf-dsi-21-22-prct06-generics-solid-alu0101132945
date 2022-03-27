import { Fighter } from "./fighter";

export class Universe extends Fighter{
    private uname:string;
    constructor(na: string, hp: number, at:number, de:number, ve:number){
        super(hp,at,de,ve);
        this.uname = na
    }
    getUName():string{
        return this.uname;
    }
}