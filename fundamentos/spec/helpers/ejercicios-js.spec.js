
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

     it('los 10 primeros',()=>{
         let vector=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
         let cuantos=10;

         let resultado=primos(cuantos);

         expect(resultado).toEqual(vector)
     })


    })

    describe('ejer5...')

describe('ejer6...',()=>{
    it('palindromo valido', ()=>{
        let caso='oso';
        expect(validaPalimetro(caso)).toBeTrue()
    });

   
        it('palindromo invalido', ()=>{
            let caso='cosas';
            expect(validaPalimetro(caso)).toBeFalse()
        });

});