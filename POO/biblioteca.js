var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.livros = [];
    }
    Biblioteca.prototype.consultar = function (name) {
        if (name === void 0) { name = ""; }
        var fetchedBooks = this.livros.filter(function (livro) {
            return livro.toLowerCase().includes(name.toLowerCase());
        });
        console.log(fetchedBooks);
        return fetchedBooks;
    };
    Biblioteca.prototype.adicionar = function (name) {
        this.livros.push(name);
    };
    Biblioteca.prototype.deletar = function (name) {
        this.livros = this.livros.filter(function (livro) { return livro !== name; });
    };
    return Biblioteca;
}());
var biblioteca = new Biblioteca();
biblioteca.adicionar("Harry Potter");
biblioteca.adicionar("Senhor dos Anéis");
biblioteca.consultar();
biblioteca.consultar("potter");
biblioteca.deletar("Harry Potter");
biblioteca.consultar("");
