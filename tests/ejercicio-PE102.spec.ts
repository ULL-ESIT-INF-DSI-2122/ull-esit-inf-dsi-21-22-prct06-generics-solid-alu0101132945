import 'mocha';
import {expect} from 'chai';
import {NumericPrintableCollection} from '../src/ejercicio-PE102/NumericPrintableCollection';
import {StringPrintableCollection} from '../src/ejercicio-PE102/StringPrintableCollection';

describe('ej-PE103 class tests', () => {
    let NPC:NumericPrintableCollection = new NumericPrintableCollection([3,4,5,6])
    let SPC:StringPrintableCollection = new StringPrintableCollection(['casa','coche','niño'])
    it('Printable Collections are created', () => {
        expect(NPC).to.not.equal(null);
        expect(SPC).to.not.equal(null);
    });
    it('getItem works', () => {
        expect(NPC.getItem(3)).to.be.equal(3);
        expect(SPC.getItem('casa')).to.be.equal('casa');
    });
    it('NumberOfItems works', () => {
        expect(NPC.getNumberofItems()).to.be.equal(4);
        expect(SPC.getNumberofItems()).to.be.equal(3);
    });
    it('print works', () => {
        expect(NPC.print()).to.be.equal("3,4,5,6");
        expect(SPC.print()).to.be.equal("casa,coche,niño");
    });
});