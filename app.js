//Creación de una aplicación web básica con Express

const express = require('express');
const app = express();

function isAuthorized(req,res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}
const port = 3000;

//"npm init -y", este comando crea un archivo package-json, predeterminado para el Node.js

//Vea cómo el código configura una ruta para / con :
app.get('/', (req, res) => res.send('Hello World!'));

//Después, inicia la aplicación web mediante la invocación del método listen():
/*app.get('/users', (req,res) => {
  res.json([{
    id: 1,
    name: 'User Userson'
  }])
}) lo remplazamos por el siguiente codigo: */

app.get('/users', isAuthorized, (req,res) => { //isAuthorized se agrega como segundo argumento, como no se a proporcionado un valor como parte de la solicitud, el codigo no responde con los datos de usuario.
  res.json([{
    id: 1,
    name: 'User Userson'
  }])
 })

app.get('/products', (req, res) => {
  res.json([{
    id: 1,
    name: 'The Bluest Eye'
  }])
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//Primero la instalación del express: "npm install express"
//node app.js
/*
app.get("/products", (req,res) => {
    const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    ,
    {
      id: 3,
      name: "wrench",
    },
   ];
  
   res.json(products);
  });*/

