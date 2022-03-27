export interface Collectable<T>{
    collect: Array<T>
    addItem(item:T):void;
    getItem(item:T):T;
    removeItem(item:T):void;
    getNumberofItems():number;
}