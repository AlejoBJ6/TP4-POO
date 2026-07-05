//1. Crear un objeto "auto" con métodos para encender y apagar.

const auto = {
  color: "rojo",
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false,
  encender: function () {
    this.encendido = true;
    console.log("El auto está encendido.");
  },
  apagar: function () {
    this.encendido = false;
    console.log("El auto está apagado.");
  },
};

auto.encender();
auto.apagar();
