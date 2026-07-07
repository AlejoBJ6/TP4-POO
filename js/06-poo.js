class Libro {
  constructor(isbn, titulo, autor, numPaginas) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }
  mostrarLibro() {
    console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numPaginas}`);
  }
}


const libro1 = new Libro("978-84-204-1214-6", "Cien años de soledad", "Gabriel García Márquez", 496);
const libro2 = new Libro("978-84-206-7431-5", "Don Quijote de la Mancha", "Miguel de Cervantes", 1088);

libro1.mostrarLibro();
libro2.mostrarLibro();

console.log("-------------------"); 

if (libro1.numPaginas > libro2.numPaginas) {
  console.log(`El libro "${libro1.titulo}" es el que tiene más páginas (${libro1.numPaginas} páginas).`);
} else if (libro2.numPaginas > libro1.numPaginas) {
  console.log(`El libro "${libro2.titulo}" es el que tiene más páginas (${libro2.numPaginas} páginas).`);
} else {
  console.log("Ambos libros tienen la misma cantidad de páginas.");
}