describe('Calculadora',()=>{
    it('suma', ()=>{
        let a = 2, b = 2;
        let resul;

        resul = suma(a , b)
        expect(resul).toBe(4)
    })

    it('resta', ()=>{
        let a = 6, b = 3;
        let resul;

        resul = resta(a , b)
        expect(resul).toBe(3)
    })

    it('multiplica', ()=>{
        let a = 2, b = 5;
        let resul;

        resul = multiplica(a , b)
        expect(resul).toBe(10)
    })

    it('divide', ()=>{
        let a = 20, b = 4;
        let resul;

        resul = divide(a , b)
        expect(resul).toBe(5)
    })

    it('poner_digito', () => {
        let c = new Calculadora();
        c.ponerdigito('3');
        expect(c.pantalla).toBe('3');
        c.ponerdigito('5');
        expect(c.pantalla).toBe('35');
        c.calcular('-');
        expect(c.pantalla).toBe('35');
        c.ponerdigito('5');
        expect(c.pantalla).toBe('5');
        c.calcular('*');
        expect(c.pantalla).toBe('30');
        c.ponerdigito('2');
        c.calcular('=');
        expect(c.pantalla).toBe('60');
    });

    xit('borrar_digito', () => {
        let c = new Calculadora();
        c.ponerdigito('3');
        c.borrar_digito();
        expect(c.pantalla).toBe('0');
    });
})