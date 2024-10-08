interface IBiblioteca {
  consultar(name: string): string[];
  adicionar(name: string): void;
  deletar(name: string): void;
}

class Biblioteca implements IBiblioteca {
  private livros: string[] = [];

  consultar(name = ""): string[] {
    const fetchedBooks = this.livros.filter((livro) =>
      livro.toLowerCase().includes(name.toLowerCase())
    );
    console.log(fetchedBooks);
    return fetchedBooks;
  }

  adicionar(name: string): void {
    this.livros.push(name);
  }

  deletar(name: string): void {
    this.livros = this.livros.filter((livro) => livro !== name);
  }
}

const biblioteca = new Biblioteca();

biblioteca.adicionar("Harry Potter");
biblioteca.adicionar("Senhor dos Anéis");
biblioteca.consultar();
biblioteca.consultar("potter");

biblioteca.deletar("Harry Potter");
biblioteca.consultar("");
