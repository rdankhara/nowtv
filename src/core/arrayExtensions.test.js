import {toMap } from './arrayExtensions';

describe('toMap', ()=>{
    
    it('creates map from array', () => {
        const arr = [{"id":1, "name": "name1"}, {"id": 2, "name": "name2"}];
        const result = toMap(arr, "id");
        const first = result.get(1);
        
        expect(first.id).toBe(1);
        expect(first.name).toEqual("name1");
    });

    it('throws error when argument passed is not an array', ()=> {
        const nonArray = {id: 1, name : "name1"};
        expect(() => toMap(nonArray, "name")).toThrow();
    });

    it ('throws error with message argument arr is not an array when argument passed is not an array', () => {
        expect(() => toMap({}, "name")).toThrowError('argument arr is not an array');
    });
})