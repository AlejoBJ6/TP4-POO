/*
4- Escribe un programa para crear objetos “producto”. Estos objetos deben presentar las propiedades código, nombre y precio, además del método imprimeDatos, el cual escribe por pantalla los valores de sus propiedades.
Crea tres objetos “producto” y guárdalos en un array.
Por último, utiliza el método imprimeDatos para mostrar por pantalla los valores de los tres objetos.
*/

const pantalla = document.getElementById("pantalla");
pantalla.innerHTML += "<h2>Productos:</h2><hr>";

const productos = [
  {
    codigo: 101,
    nombre: "Mouse",
    precio: 1500,
    imprimeDatos: function () {
      const pantalla = document.getElementById("pantalla");
      pantalla.innerHTML += `<ul>
        <li><strong>Código:</strong> ${this.codigo}</li>
        <li><strong>Nombre:</strong> ${this.nombre}</li>
        <li><strong>Precio:</strong> $${this.precio}</li>
      </ul>`;
    },
  },
  {
    codigo: 102,
    nombre: "Teclado",
    precio: 2200,
    imprimeDatos: function () {
      const pantalla = document.getElementById("pantalla");
      pantalla.innerHTML += `<ul>
        <li><strong>Código:</strong> ${this.codigo}</li>
        <li><strong>Nombre:</strong> ${this.nombre}</li>
        <li><strong>Precio:</strong> $${this.precio}</li>
      </ul>`;
    },
  },
  {
    codigo: 103,
    nombre: "Monitor",
    precio: 45000,
    imprimeDatos: function () {
      const pantalla = document.getElementById("pantalla");
      pantalla.innerHTML += `<ul>
        <li><strong>Código:</strong> ${this.codigo}</li>
        <li><strong>Nombre:</strong> ${this.nombre}</li>
        <li><strong>Precio:</strong> $${this.precio}</li>
      </ul>`;
    },
  },
];
productos.forEach((producto) => {
  producto.imprimeDatos();
});
