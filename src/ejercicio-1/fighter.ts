export abstract class Fighter{
    private HP:number;
    private attack:number;
    private deffense:number;
    private speed: number;
    private ability: Array<Array<String|Number>> = [["Titan",2],["Diminuto",0.5],["Agil",2],["Pesado",0.5],["Contundente",2],["Mosquito", 0.5],["Muralla",2],["piel feérica",0.5]]

    /**
     * constructor de la clase fighter
     * @param hp vida del luchador
     * @param at ataque del luchador
     * @param de defensa del luchador
     * @param sp velocidad del luchador
     */
    constructor(hp:number,at:number,de:number,sp:number){
        this.HP = hp
        this.attack = at
        this.deffense = de
        this.speed = sp 
    }

    /**
     * getter de la vida
     * @returns devuelve la vida del luchador
     */
    getHP():number{
        return this.HP
    }

    /**
     * getter del ataque
     * @returns devuelve el ataque del luchador
     */
    getAttack():number{
        return this.attack
    }
    
    /**
     * getter de la defensa
     * @returns devuelve la defensa del luchador
     */
    getDefense():number{
        return this.deffense
    }

    /**
     * getter de la velocidad
     * @returns devuelve la velocidad del luchador
     */
    getSpeed():number{
        return this.speed
    }

    SearchAbility(ab:string):number|undefined{
        this.ability.forEach(ability => {
            if(ability[1] == ab){
                return ability[2]
            }
        });
        console.error("Esa abilidad no existe")
        return undefined
    }
}