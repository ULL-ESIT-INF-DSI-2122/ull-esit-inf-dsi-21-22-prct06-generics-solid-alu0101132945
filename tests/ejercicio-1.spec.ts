import 'mocha';
import {expect} from 'chai';
import {Contendant} from '../src/ejercicio-1/contendant'; 
import {Combat} from '../src/ejercicio-1/combat';
import {Pokedex} from '../src/ejercicio-1/pokedex';

describe('ej-PE103 class tests', () => {
    let Venusaur:Contendant = new Contendant("Venusaur","Venusauuuur", "Pokemon",2,100,80,82,83,80)
    let Batman:Contendant = new Contendant("Batman","Respíralo, eso es miedo. No eres valiente, los hombres son valientes", "DC",1.88,95,40,60,100,160)
    let Pokedex1:Pokedex = new Pokedex([Venusaur,Batman])
    let Com1:Combat = new Combat(Venusaur,Batman)
    it('Combat and Pokedex are created', () => {
        expect(Com1).to.not.equal(null);
        expect(Pokedex1).to.not.equal(null);
    });
    
});