const path = require("path"); // - Importado módulo path.

// - Basename.
console.log(path.basename(__filename));

// - Nome do diretório atual (modules).
console.log(path.dirname(__filename));

// - Extensão do arquivo (.js).
console.log(path.extname(__filename));

// - Criar objeto Path
console.log(path.parse(__filename));

// - Juntar caminho de arquivos.
console.log(path.join(__dirname, "test", "test.html"));
