import {toMap } from './arrayExtensions';

describe('toMap', ()=>{
    
    it('creates map from array', () => {
        const arr = [{"id":1, "name": "name1"}, {"id": 2, "name": "name2"}];
        const result = toMap(arr, "id");
        const first = result.get(1);
        
        expect(first.id).toBe(1);
        expect(first.name).toEqual("name1");
    });
})