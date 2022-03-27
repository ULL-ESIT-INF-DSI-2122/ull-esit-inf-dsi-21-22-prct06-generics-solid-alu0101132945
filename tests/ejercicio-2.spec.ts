import 'mocha';
import {expect} from 'chai';
import {Serie,Film} from '../src/ejercicio-2/audiovisual'; 
import {SeriesCollection, FilmsCollection} from '../src/ejercicio-2/basicstreamablecollection';

describe('ej-PE103 class tests', () => {
    let se1:Serie = new Serie("The Boys", "serie","superhero",new Date("2019-07-26"),"Eric Kripke",8,16,2)
    let se2:Serie = new Serie("Bridgerton", "serie","historica",new Date("2020-12-25"),"Chris Van Dusen",7,16,2)
    let pe1:Film = new Film("The Batman","film","superhero",new Date("2022-03-04"),"Matt Reeves",7.5,176)
    let pe2:Film = new Film("Asesinato en el nilo", "film","Misterio",new Date("2022-02-11"),"Kenneth Branagh",6.1,127)
    let SC:SeriesCollection = new SeriesCollection(se1,se2)
    let FC:FilmsCollection = new FilmsCollection(pe1,pe2)

    it('Collections are created', () => {
        expect(SC).to.not.equal(null);
        expect(FC).to.not.equal(null);
    });

    it('Search by name works', () => {
        expect(SC.printAudiovisual(SC.searchNam("The Boys"))).to.not.equal(null);
        expect(SC.printAudiovisual(SC.searchNam("Padre de Familia"))).to.be.equal(undefined)
        expect(FC.printAudiovisual(FC.searchNam("The Batman"))).to.not.equal(null);
        expect(FC.printAudiovisual(FC.searchNam("Morbius"))).to.be.equal(undefined);
    });

    
    
});