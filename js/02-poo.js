//Implementar una "cuenta bancaria" con ingreso, extracción e información del saldo.
/* scribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
const cuenta = {
  titular: "Alex",
  saldo: 0,
  ingresar: function (monto) {
    this.saldo += monto;
  },
  extraer: function (monto) {
    this.saldo -= monto;
  },
  informar: function () {
    return `Titular: ${this.titular}, Saldo: ${this.saldo}`;
  },
};
console.log("Estado inicial:");
console.log(cuenta.informar());

cuenta.ingresar(500);
console.log("Después de ingresar dinero:");
console.log(cuenta.informar());

cuenta.extraer(200);
console.log("Después de extraer dinero:");
console.log(cuenta.informar());
