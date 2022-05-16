//Creación de una aplicación web básica con Express

const express = require('express');
const app = express();
const port = 3000;

//"npm init -y", este comando crea un archivo package-json, predeterminado para el Node.js

//Vea cómo el código configura una ruta para / con :
app.get('/', (req, res) => res.send('Hello World!'));

//Después, inicia la aplicación web mediante la invocación del método listen():

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//Primero la instalación del express: "npm install express"
//node app.js

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
  });