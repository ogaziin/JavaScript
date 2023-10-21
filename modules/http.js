// const http = require("http");

// const port = 8080;

// const server = http.createServer((req, res) => {
//   if (req.url === "/home") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Home Page</h1>");
//   }

//   if (req.url === "/users") {
//     const users = [
//       {
//         name: "John Doe",
//         email: "john@doe.com",
//       },
//       {
//         name: "Jane Doe",
//         email: "jane@doe.com",
//       },
//     ];

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   }

//   if (req.url === "/admin") {
//     res.writeHead(401, { "Content-Type": "text/html" });
//     res.end(
//       "<h1 style='text-align: center;'>Forbidden</h1>\n<p style='text-align: center;'>You cannot acess this site."
//     );
//   }
// });

// server.listen(port, () => console.log(`Rodando na porta ${port}!`));

// const http = require("http"); // - Importa o módulo HTTP.
// const port = 8080; // - Porta usada no servidor.

// const server = http.createServer((req, res) => {
//   // - Cria o servidor HTTP.
//   if (req.url === "/admin") {
//     res.writeHead(403, { "Content-Type": "text/html" });
//     res.end(
//       "<title>Forbidden</title>\n<h1>Forbidden</h1>\n<p>You cannot acess this page</p>"
//     );
//   }
// });

// server.listen(port, () => console.log(`Rodando na porta ${port}`));
