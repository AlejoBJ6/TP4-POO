/*Crea un objeto “persona” que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/
const persona = {
  // Propiedades
  nombre: "Alejo",
  edad: 25,
  DNI: 0, 
  sexo: "H",
  peso: 75,
  altura: 1.80,
  anioNacimiento: 1999,
  //metodos
  generaDNI: function () {
    this.DNI = Math.floor(Math.random() * 90000000) + 10000000;
  },
  esMayorDeEdad: function () {
    if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} es menor de edad.`);
    }
  },
  mostrarGeneracion: function () {
    let generacion = "";
    let rasgo = "";
    let anio = this.anioNacimiento;
    switch (true) {
      case (anio >= 1930 && anio <= 1948):
        generacion = "Silent Generation (Posguerra)";
        rasgo = "Austeridad";
        break;
      case (anio >= 1949 && anio <= 1968):
        generacion = "Baby Boom";
        rasgo = "Ambición";
        break;
      case (anio >= 1969 && anio <= 1980):
        generacion = "Generación X";
        rasgo = "Obsesión por el éxito";
        break;
      case (anio >= 1981 && anio <= 1993):
        generacion = "Generación Y (millennials)";
        rasgo = "Frustración";
        break;
      case (anio >= 1994 && anio <= 2010):
        generacion = "Generación Z";
        rasgo = "Irreverencia";
        break;
      case (anio >= 2011 && anio <= 2024):
        generacion = "Generación Alfa";
        rasgo = "Hiperconectividad";
        break;
      case (anio >= 2025 && anio <= 2039):
        generacion = "Generación Beta";
        rasgo = "Adaptabilidad";
        break;
      default:
        generacion = "Generación desconocida";
        rasgo = "No registrado";
        break;
    }
    console.log(`${this.nombre} pertenece a la ${generacion} y su rasgo característico es la ${rasgo}.`);
  },
  mostrarDatos: function () {
    console.log(`--- DATOS DE LA PERSONA ---`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`DNI: ${this.DNI}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso} kg`);
    console.log(`Altura: ${this.altura} m`);
    console.log(`Año de Nacimiento: ${this.anioNacimiento}`);
  }
};
persona.generaDNI();
persona.mostrarDatos();
persona.esMayorDeEdad();
persona.mostrarGeneracion();
