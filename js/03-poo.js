//Escribe un programa para que permita crear objetos “rectángulos”, con las propiedades de alto y ancho, más los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.

const rectangulo = {
  alto: 0,
  ancho: 0,
  ingresarAlto: function (alto) {
    this.alto = alto;
  },
  ingresarAncho: function (ancho) {
    this.ancho = ancho;
  },
  calcularPerimetro: function () {
    return 2 * (this.alto + this.ancho);
  },
  calcularArea: function () {
    return this.alto * this.ancho;
  },
  mostrarPropiedades: function () {
    return `Alto: ${this.alto}, Ancho: ${this.ancho}`;
  },
};

rectangulo.ingresarAlto(8);
rectangulo.ingresarAncho(5);

console.log("Rectángulo creado:", rectangulo.mostrarPropiedades());
console.log("Perímetro:", rectangulo.calcularPerimetro());
console.log("Área:", rectangulo.calcularArea());
