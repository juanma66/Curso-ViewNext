describe('Calculadora',()=>{
    describe('Operaciones_basicas',()=>{
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
    })

    describe('Calculos',()=>{
        it('poner_digito', () => {
            let c = new Calculadora();
            c.ponerdigito('1');
            expect(c.pantalla).toBe('1');
            c.ponerdigito('0');
            expect(c.pantalla).toBe('10');
        });

        it('sumar', () => {
            let c = new Calculadora();
            c.ponerdigito('10');
            c.calcular('+');
            c.ponerdigito('5');
            c.calcular('=');
            expect(c.pantalla).toBe('15');
        });

        it('restar', () => {
            let c = new Calculadora();
            c.ponerdigito('20');
            c.calcular('-');
            c.ponerdigito('14')
            c.calcular('=');
            expect(c.pantalla).toBe('6');
        });

        it('multiplicar', () => {
            let c = new Calculadora();
            c.ponerdigito('6');
            c.calcular('*');
            c.ponerdigito('2')
            c.calcular('=');
            expect(c.pantalla).toBe('12');
        });

        it('dividir', () => {
            let c = new Calculadora();
            c.ponerdigito('12');
            c.calcular('/');
            c.ponerdigito('6')
            c.calcular('=');
            expect(c.pantalla).toBe('2');
        });

    })

    xdescribe('Calculos_mejorados',()=>{
        describe('Calculos_Sumar', function () {
			[[22222, 22222, 44444], [-1, 2, 1], [2, -1, 1], [0, 0, 0],
			[0.1, 0.2, 0.3], [9.9, 1.3, 11.2]].forEach(caso => {
				it(`Suma: ${caso[0]} + ${caso[1]} = ${caso[2]}`, function () {
                    let c = new Calculadora();
					c.ponerdigito(caso[0])
					c.calcular('+')
					c.ponerdigito(caso[1])
					c.calcular('=')
					expect(c.pantalla).toBe(caso[2].toString())
				})
			});
		});

		describe('Calculos_Restar', function () {
			[[22222, 33333, -11111], [-1, 2, -3], [0, 0, 0],
			[1, 0.9, 0.1]].forEach(caso => {
				it(`Resta: ${caso[0]} - ${caso[1]} = ${caso[2]}`, function () {
                    let c = new Calculadora();
					c.ponerdigito(caso[0])
					c.calcular('-')
					c.ponerdigito(caso[1])
					c.calcular('=')
					expect(c.pantalla).toBe(caso[2].toString())
				})
			});
		});

		describe('Calculos_Multiplicar', function () {
			[[10, 5, 50], [1.5, 2, 3], [0, 0, 0], [2, 0, 0],
			['Infinity', 0, 'NaN'], ['Infinity', 'NaN', 'Infinity'], ['Infinity', '-Infinity', '-Infinity'],].forEach(caso => {
				it(`Multiplica: ${caso[0]} * ${caso[1]} = ${caso[2]}`, function () {
                    let c = new Calculadora();
					c.ponerdigito(caso[0])
					c.calcular('*')
					c.ponerdigito(caso[1])
					c.calcular('=')
					expect(c.pantalla).toBe(caso[2].toString())
				})
			});
		});

		describe('Calculos_Dividir', function () {
			[[10, 5, 2], [1, 3, 0.333333333333333], [0, 0, 'NaN'], [2, 0, 'Infinity'],
			['Infinity', 'Infinity', 'NaN']].forEach(caso => {
				it(`Divide: ${caso[0]} / ${caso[1]} = ${caso[2]}`, function () {
                    let c = new Calculadora();
					c.ponerdigito(caso[0])
					c.calcular('/')
					c.ponerdigito(caso[1])
					c.calcular('=')
					expect(c.pantalla).toBe(caso[2].toString())
				})
			});
		});
    })

    describe('Operaciones_Borrar',()=>{
        it('borrar_digito_positivo', () => {
            let c = new Calculadora();
            c.ponerdigito('3234');
            c.borrar_digito();
            expect(c.pantalla).toBe('323');
            c.borrar_digito();
            expect(c.pantalla).toBe('32');
            c.borrar_digito();
            expect(c.pantalla).toBe('3');
            c.borrar_digito();
            expect(c.pantalla).toBe('0');
        });

        it('borrar_digito_negativo', () => {
            let c = new Calculadora();
            c.ponerdigito('-3234');
            c.borrar_digito();
            expect(c.pantalla).toBe('-323');
            c.borrar_digito();
            expect(c.pantalla).toBe('-32');
            c.borrar_digito();
            expect(c.pantalla).toBe('-3');
            c.borrar_digito();
            expect(c.pantalla).toBe('0');
        });

    })

    describe('Operaciones_Cambiar_signos',()=>{
        it('cambiar_signo', () => {
            let c = new Calculadora();
            c.ponerdigito('3');
            c.cambiar_signo();
            expect(c.pantalla).toBe('-3');
        });
    })

    describe('Operaciones_Coma',()=>{
        it('poner_coma_positivo', () => {
            let c = new Calculadora();
            c.ponerdigito('3');
            c.poner_coma();
            c.ponerdigito('4');
            expect(c.pantalla).toBe('3.4');
        });
    
        it('poner_coma_negativo', () => {
            let c = new Calculadora();
            c.ponerdigito('-3');
            c.poner_coma();
            c.ponerdigito('4');
            expect(c.pantalla).toBe('-3.4');
        });

        it('empezar_coma', () => {
            let c = new Calculadora();
            c.poner_coma();
            c.ponerdigito('2');
            expect(c.pantalla).toBe('0.2');
        });
    })

})