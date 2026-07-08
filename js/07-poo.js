class Contacto {
constructor(nombre, telefono) {
    this.nombre = nombre.trim();
    this.telefono = telefono;
}
esIgualA(otroContacto) {
    return this.nombre.toLowerCase() === otroContacto.nombre.toLowerCase();
}
}

class Agenda {
constructor(tamano = 10) {
    this.tamanoMaximo = tamano;
    this.contactos = [];
}
agendaLlena() {
    return this.contactos.length >= this.tamanoMaximo;
}
huecosLibres() {
    return this.tamanoMaximo - this.contactos.length;
}
existeContacto(contacto) {
    return this.contactos.some((c) => c.esIgualA(contacto));
}
aniadirContacto(contacto) {
    if (this.agendaLlena()) {
    console.log(
        "Error: La agenda está llena, no se pueden almacenar más contactos.",
    );
    alert("Error: La agenda está llena.");
    return;
    }

    if (this.existeContacto(contacto)) {
    console.log(`El contacto con el nombre "${contacto.nombre}" ya existe.`);
    alert(`El contacto con el nombre "${contacto.nombre}" ya existe.`);
    return;
    }
    this.contactos.push(contacto);
    console.log(`Contacto "${contacto.nombre}" añadido correctamente.`);
    alert(`Contacto "${contacto.nombre}" añadido.`);
}
listarContactos() {
    if (this.contactos.length === 0) {
    console.log("La agenda está vacía.");
    alert("La agenda está vacía.");
    return;
    }
    console.log("--- LISTA DE CONTACTOS ---");
    let listaTexto = "--- LISTA DE CONTACTOS ---\n";
    this.contactos.forEach((c, index) => {
    const info = `${index + 1}. Nombre: ${c.nombre} | Teléfono: ${c.telefono}`;
    console.log(info);
    listaTexto += info + "\n";
    });
    alert(listaTexto);
}
buscarContacto(nombre) {
    const encontrado = this.contactos.find(
    (c) => c.nombre.toLowerCase() === nombre.toLowerCase(),
    );
    if (encontrado) {
    console.log(
        `Encontrado -> Nombre: ${encontrado.nombre}, Teléfono: ${encontrado.telefono}`,
    );
    alert(
        `Encontrado -> Nombre: ${encontrado.nombre}, Teléfono: ${encontrado.telefono}`,
    );
    } else {
    console.log(`No se encontró ningún contacto con el nombre "${nombre}"`);
    alert(`No se encontró ningún contacto con el nombre "${nombre}"`);
    }
}
eliminarContacto(contacto) {
    const indice = this.contactos.findIndex((c) => c.esIgualA(contacto));
    if (indice !== -1) {
    this.contactos.splice(indice, 1);
    console.log(`Contacto "${contacto.nombre}" eliminado correctamente.`);
    alert(`Contacto "${contacto.nombre}" eliminado correctamente.`);
    } else {
    console.log(
        `No se pudo eliminar: el contacto "${contacto.nombre}" no existe.`,
    );
    alert("No se pudo eliminar: el contacto no existe.");
    }
}
}
const definirTamano = confirm(
"¿Deseas definir un tamaño personalizado para la agenda? (Cancelar para usar el valor por defecto: 10)",
);
let miAgenda;

if (definirTamano) {
let tam = parseInt(prompt("Introduce el tamaño máximo de la agenda:"), 10);
if (isNaN(tam) || tam <= 0) {
    alert("Tamaño inválido. Se usará el tamaño por defecto (10).");
    miAgenda = new Agenda();
} else {
    miAgenda = new Agenda(tam);
}
} else {
miAgenda = new Agenda();
}
let opcion = "";
while (opcion !== "8") {
opcion = prompt(
    "*** MENU AGENDA TELEFÓNICA ***\n" +
    "1. Añadir contacto\n" +
    "2. Verificar si existe un contacto\n" +
    "3. Listar todos los contactos\n" +
    "4. Buscar contacto por nombre\n" +
    "5. Eliminar un contacto\n" +
    "6. Comprobar si la agenda está llena\n" +
    "7. Ver huecos libres disponibles\n" +
    "8. Salir\n\n" +
    "Selecciona una opción (1-8):",
);
switch (opcion) {
    case "1": {
    let nom = prompt("Introduce el nombre del contacto:");
    let tel = prompt("Introduce el teléfono del contacto:");
    if (nom && tel) {
        miAgenda.aniadirContacto(new Contacto(nom, tel));
    } else {
        alert("Campos inválidos. No se guardó el contacto.");
    }
    break;
    }
    case "2": {
    let nom = prompt("Introduce el nombre del contacto a verificar:");
    if (nom) {
        let existe = miAgenda.existeContacto(new Contacto(nom, ""));
        if (existe) {
            alert("Sí, el contacto ya existe.");
        } else {
            alert("El contacto no existe.");
        }
    }
    break;
    }
    case "3":
    miAgenda.listarContactos();
    break;
    case "4": {
    let nom = prompt("Introduce el nombre del contacto a buscar:");
    if (nom) miAgenda.buscarContacto(nom);
    break;
    }
    case "5": {
    let nom = prompt("Introduce el nombre del contacto a eliminar:");
    if (nom) miAgenda.eliminarContacto(new Contacto(nom, ""));
    break;
    }
    case "6":
    alert(
        miAgenda.agendaLlena()
        ? "La agenda está llena."
        : "Aún queda espacio en la agenda.",
    );
    break;
    case "7":
    alert(`Quedan ${miAgenda.huecosLibres()} huecos libres.`);
    break;
    case "8":
    alert("Saliendo de la agenda.");
    break;
    case null:
    opcion = "8";
    break;
    default:
    alert("Opción no válida. Inténtalo de nuevo.");
    break;
}
}
