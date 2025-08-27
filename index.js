const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const responseData = { message: "Hola desde mi primer endpoint!" };
    res.end(JSON.stringify(responseData)); // Asegúrate de enviar una cadena JSON
  }
  if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const responseData = { message: "Estoy aprendiendo backend" };
    res.end(JSON.stringify(responseData)); // Asegúrate de enviar una cadena JSON
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
