export interface Collectable{
    collect: any[]
    addItem(item:any):void;
    getItem():any;
    removeItem(item:any):void
    getNumberofItems():number;
}