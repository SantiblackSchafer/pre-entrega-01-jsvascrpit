// Función para calcular el área de un cuadrado
function calcularAreaCuadrado(lado) {
    return lado * lado;
}

// Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
    return Math.PI * radio ** 2;
}

// Función para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Variables de prueba
let ladoCuadrado = 5;
let radioCirculo = 3;
let baseTriangulo = 4;
let alturaTriangulo = 6;

// Calculando áreas
let areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
let areaCirculo = calcularAreaCirculo(radioCirculo);
let areaTriangulo = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);

// Mostrando resultados
console.log(`El área del cuadrado con lado ${ladoCuadrado} es: ${areaCuadrado}`);
console.log(`El área del círculo con radio ${radioCirculo} es: ${areaCirculo.toFixed(2)}`);
console.log(`El área del triángulo con base ${baseTriangulo} y altura ${alturaTriangulo} es: ${areaTriangulo}`);
