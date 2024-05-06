// Objeto con métodos para calcular áreas
const Formas = {
    cuadrado: {
        calcularArea: function(lado) {
            return lado * lado;
        }
    },
    circulo: {
        calcularArea: function(radio) {
            return Math.PI * radio ** 2;
        }
    },
    triangulo: {
        calcularArea: function(base, altura) {
            return (base * altura) / 2;
        }
    }
};

// Objeto con las variables de prueba
const Datos = {
    ladoCuadrado: 5,
    radioCirculo: 3,
    baseTriangulo: 4,
    alturaTriangulo: 6
};

// Array para almacenar las áreas calculadas
let areas = [];

// Calculando áreas
let areaCuadrado = Formas.cuadrado.calcularArea(Datos.ladoCuadrado);
let areaCirculo = Formas.circulo.calcularArea(Datos.radioCirculo);
let areaTriangulo = Formas.triangulo.calcularArea(Datos.baseTriangulo, Datos.alturaTriangulo);

// Mostrando resultados
console.log(`El área del cuadrado con lado ${Datos.ladoCuadrado} es: ${areaCuadrado}`);
console.log(`El área del círculo con radio ${Datos.radioCirculo} es: ${areaCirculo.toFixed(2)}`);
console.log(`El área del triángulo con base ${Datos.baseTriangulo} y altura ${Datos.alturaTriangulo} es: ${areaTriangulo}`);

