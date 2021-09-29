describe('Demo de la prueba',function(){

describe('una anidada', function(){
it('suma 2 + 2',function(){
 let a=2, b=2;
 let resul;
 resul=suma(a,b);
  expect(resul).toBe(4);

})

})

             it('Este funciona siempre', function(){

                expect(true).toBeTruthy()
             })

             xit('Este funciona siempre', function(){

                expect(true).not.toBeTruthy()
             })


})
   describe('otra suite', function(){

   })