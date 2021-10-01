
describe("Prueba", () => {
    it("digitos", () => {
     
          let c=new Operacion();
          c.ponerdigito('3');
          expect(c.pantalla).toBe('3');
          c.ponerdigito('5');
          expect(c.pantalla).toBe('35');

          //bien hasta aki
          c.calcular('-');
          expect(c.pantalla).toBe('35');
          c.ponerdigito('5');
          expect(c.pantalla).toBe('5');
          c.calcular('*');
          c.calcular('=');
          expect(c.pantalla).toBe('30');

    });
  });
  