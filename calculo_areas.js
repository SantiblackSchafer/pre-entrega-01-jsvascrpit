// Objeto con métodos para calcular áreas
const Formas = {
    cuadrado: {
        calcularArea: function(lado) {
            return lado > 0 ? lado * lado : "Lado inválido";
        }
    },
    circulo: {
        calcularArea: function(radio) {
            return radio > 0 ? Math.PI * radio ** 2 : "Radio inválido";
        }
    },
    triangulo: {
        calcularArea: function(base, altura) {
            return base > 0 && altura > 0 ? (base * altura) / 2 : "Base o altura inválida";
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

// Función para calcular áreas de forma condicional
const calcularAreaCondicional = (forma, ...valores) => {
    const area = forma.calcularArea(...valores);
    return typeof area === "number" ? area : area;
};

// Array para almacenar las áreas calculadas
let areas = [];

// Desestructuración de las variables de prueba
const { ladoCuadrado, radioCirculo, baseTriangulo, alturaTriangulo } = Datos;

// Calculando áreas
let areaCuadrado = calcularAreaCondicional(Formas.cuadrado, ladoCuadrado);
let areaCirculo = calcularAreaCondicional(Formas.circulo, radioCirculo);
let areaTriangulo = calcularAreaCondicional(Formas.triangulo, baseTriangulo, alturaTriangulo);

// Mostrando resultados
console.log(`El área del cuadrado con lado ${ladoCuadrado} es: ${areaCuadrado}`);
console.log(`El área del círculo con radio ${radioCirculo} es: ${typeof areaCirculo === "number" ? areaCirculo.toFixed(2) : areaCirculo}`);
console.log(`El área del triángulo con base ${baseTriangulo} y altura ${alturaTriangulo} es: ${areaTriangulo}`);

