export interface Collectable{
    collect: any[]
    addItem(item:any):void;
    getItem(item:any):any;
    removeItem(item:any):void
    getNumberofItems():number;
}