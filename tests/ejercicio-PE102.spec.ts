import 'mocha';
import {expect} from 'chai';
import {NumericPrintableCollection} from '../src/ejercicio-PE103/NumericPrintableCollection';
import {StringPrintableCollection} from '../src/ejercicio-PE103/StringPrintableCollection';

describe('ej-PE103 class tests', () => {
    let NPC:NumericPrintableCollection = new NumericPrintableCollection(3,4,5,6)
    let SPC:StringPrintableCollection = new StringPrintableCollection('casa','coche','niño')
    it('Printable Collections are created', () => {
        expect(NPC).to.not.equal(null);
        expect(SPC).to.not.equal(null);
    });
    // it('', () => {
    //     expect().to.be.equal();
    // });
});