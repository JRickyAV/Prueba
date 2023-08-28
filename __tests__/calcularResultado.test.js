import calcularResultado from "../utils/calcularResultado";

const { resultadoFinal} = calcularResultado();

test("Debe calcular el resultado correctamente", () => {
  
// Parametros
var decision = 1;
var numero = 2;

// Resultado esperado
var expectedOutput = 'Perdiste';

// Probando la funcion
var actualOutput = resultadoFinal(decision,numero);

// Prueba
expect(expectedOutput).toBe(actualOutput);
});

