const http = require('http');

http.get({
  port: 3000,
  hostname: 'localhost',
  path: '/users',
  headers: {
    authorization: 'secretpassword' /* una ves añadido este encabezado en la terminal
    nos devuelve los datos de usuario, porque se ha pasado un encabezado authoritation con un valor aceptado*/
    }
}, (res) => {
  console.log("connected");
  res.on("data", (chunk) => {
    console.log("chunk", "" + chunk);
  });
  res.on("end", () => {
    console.log("No more data");
  });
  res.on("close", () => {
    console.log("Closing connection");
  });
});