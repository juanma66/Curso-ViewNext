
describe('ejer3',function(){
it('iniciar',function(){
let arr=iniciarArray(5,0);
expect(arr.length).toBe(5);
for(i of arr){
expect(i).toBe(0);
}

})
})


describe('ejer6...',()=>{
    it('palindromo valido', ()=>{
        let caso='ana';
        expect(validaPalimetro(caso)).toBeTrue()
    });

   
        it('palindromo invalido', ()=>{
            let caso='cosas';
            expect(validaPalimetro(caso)).toBeFalse()
        });

});