import{describe,it,expect} from 'vitest';
import { compareObjects,compareObjectArrays,commonKeys } from './functions';

describe('compare objects', ()=>{
    const obj1 = {a:1,b:2,c:3}
    const obj2 = {a:1,b:2,c:3}
    const obj3={a:1,b:3,c:3}
    const Alice={name:'Alice',age:30,city:'Debrecen'}
    const Jani={name:'Jani',age:30,city:'Debrecen'}
    it('same objectum',()=>{
        expect(compareObjects(obj1,obj2)).toBe(true)
    })
    it('más objectum',()=>{
        expect(compareObjects(obj1,obj3)).toBe(false)
    })
    it('üres objectum',()=>{
        expect(compareObjects({},{})).toBe(true)
    })
    it('valós világbeli objectum',()=>{
        expect(compareObjects(Alice,Jani)).toBe(false)
        expect(compareObjects(Alice,Alice)).toBe(true)
    })

})

describe('compare arrays',()=>{

    const arraj1=[{a:1,b:2,c:3},{d:4}]
    const arraj2=[{a:1,b:2,c:3},{d:4}]
    const arraj3=[{a:1,b:2,c:3},{d:5}]
    const arraj4=[{a:1,b:2,c:3}]
    const Jani=[{nev:'Jani',kor:15,city:'Debrecen'},{szak:'infós'}]
    const Pisti=[{nev:'Pisti',kor:15,city:'Debrecen'},{szak:'gépész'}]
    it('same arrays',()=>{
        expect(compareObjectArrays(arraj1,arraj2)).toBe(true)
    })
    it('not same arrays',()=>{
        expect(compareObjectArrays(arraj1,arraj3)).toBe(false)
    })
    it('not same arrays lenght',()=>{
        expect(compareObjectArrays(arraj1,arraj4)).toBe(false)
    })
    it('valós arrays',()=>{
        expect(compareObjectArrays(Jani,Pisti)).toBe(false)
    })
    it('valós arrays',()=>{
        expect(compareObjectArrays(Jani,Jani)).toBe(true)
    })

})

describe('commonkeys',()=>{
    const obj1 = {a:1,b:2,c:3}
    const obj2 = {a:1,b:2,c:3}
    
    const Jani={nev:'Jani',kor:15,city:'Debrecen'}
    const Pisti={nev:'Pisti',kor:15,city:'Debrecen'}
    it('returns every key name',()=>{
        expect(commonKeys(obj1,obj2)).toEqual(['a','b','c'])
    })
    it('returns none key name',()=>{
        expect(commonKeys(obj1,{d:4,f:5})).toEqual([])
    })
    it('returns blank key name',()=>{
        expect(commonKeys({},{})).toEqual([])
    })
    it('returns real key name',()=>{
        expect(commonKeys(Jani,Pisti)).toEqual(['nev','kor','city'])
    })
    
})
