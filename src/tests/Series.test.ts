import Series from "../classes/Series";



describe('Pruebas para el método result de la clase Series', () => {
    test('el método result debe devolver un valor numérico específico', () => {
      expect(Series.result(1)).toBe(2);
    });
    test('el método result debe devolver un valor numérico específico', () => {
        expect(Series.result(2)).toBe(1);
      });
    test('el método result debe devolver un valor numérico específico', () => {
        expect(Series.result(3)).toBe(-2);
      });
    test('el método result debe devolver un valor numérico específico', () => {
        expect(Series.result(4)).toBe(-4);
      });
    test('el método result debe devolver un valor numérico específico', () => {
        expect(Series.result(5)).toBe(-9);
      });
    test('el método result debe devolver un valor numérico específico', () => {
        expect(Series.result(6)).toBe(-12);
      });
    test('el método result debe devolver un valor numérico específico', () => {
          expect(Series.result(7)).toBe(-16);
        });
    test('el método result debe devolver un valor numérico específico', () => {
          expect(Series.result(8)).toBe(-15);
        });
    test('el método result debe devolver un valor numérico específico', () => {
          expect(Series.result(9)).toBe(-6);
        });
     test('el método result debe devolver un valor numérico específico', () => {
          expect(Series.result(10)).toBe(10);
        });
    
  });