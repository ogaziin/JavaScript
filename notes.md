AVISO: Você pode usar essas anotações como forma de estudar também. Fiz isso para conseguir relembrar alguns assuntos futuramente.

# Como o Node.js funciona?

> Node.js funciona fazendo as requições solicitadas pelo cliente. Ele possui alguns módulos (presentes na pasta **./modules**) que são bibliotecas. Cada uma realiza uma função específica.

# O que o módulo path faz?

Ele funciona "verificando" arquivos e diretórios. Ele pode ser juntado com o módulo fs, que cria e remove arquivos, por exemplo. O módulo path dirá onde tem que criar um diretório e o fs criará.

```js
// - Basename: Nome do arquivo.
console.log(path.basename(__filename));

// - Nome do diretório atual (modules).
console.log(path.dirname(__filename));

// - Extensão do arquivo (.js).
console.log(path.extname(__filename));

// - Criar objeto Path
console.log(path.parse(__filename));

// - Juntar caminho de arquivos.
console.log(path.join(__dirname, "test", "test.html"));
```
