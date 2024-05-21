document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lado').addEventListener('input', () => calcularArea('cuadrado'));
    document.getElementById('radio').addEventListener('input', () => calcularArea('circulo'));
    document.getElementById('base').addEventListener('input', () => calcularArea('triangulo'));
    document.getElementById('altura').addEventListener('input', () => calcularArea('triangulo'));

    cargarDatos();
});

function calcularArea(forma) {
    let area = 0;

    if (forma === 'cuadrado') {
        const lado = document.getElementById('lado').value;
        area = lado ? lado * lado : 0;
        document.getElementById('resultadoCuadrado').textContent = lado ? `Área del cuadrado: ${area} unidades cuadradas` : '';
        localStorage.setItem('lado', lado);
    } else if (forma === 'circulo') {
        const radio = document.getElementById('radio').value;
        area = radio ? Math.PI * radio * radio : 0;
        document.getElementById('resultadoCirculo').textContent = radio ? `Área del círculo: ${area.toFixed(2)} unidades cuadradas` : '';
        localStorage.setItem('radio', radio);
    } else if (forma === 'triangulo') {
        const base = document.getElementById('base').value;
        const altura = document.getElementById('altura').value;
        area = (base && altura) ? (base * altura) / 2 : 0;
        document.getElementById('resultadoTriangulo').textContent = (base && altura) ? `Área del triángulo: ${area} unidades cuadradas` : '';
        localStorage.setItem('base', base);
        localStorage.setItem('altura', altura);
    }
}

function cargarDatos() {
    const lado = localStorage.getItem('lado');
    const radio = localStorage.getItem('radio');
    const base = localStorage.getItem('base');
    const altura = localStorage.getItem('altura');

    if (lado) {
        document.getElementById('lado').value = lado;
        calcularArea('cuadrado');
    }

    if (radio) {
        document.getElementById('radio').value = radio;
        calcularArea('circulo');
    }

    if (base) {
        document.getElementById('base').value = base;
        calcularArea('triangulo');
    }

    if (altura) {
        document.getElementById('altura').value = altura;
        calcularArea('triangulo');
    }
}

