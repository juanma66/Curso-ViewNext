
    describe('ejer3',()=>{
            
        it('iniciar',()=>{
        let arr=iniciarArray(5,0);
        expect(arr.length).toBe(5);

        for(i of arr){
        expect(i).toBe(0);
        }

    })
    })


    describe('ejer4',()=>{

     it('5 numeros primo',()=>{
         let vector=[2,3,5,7,11];
         let cuantos=5;

         let resultado=primos(cuantos);

         expect(resultado).toEqual(vector)
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