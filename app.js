const express = require('express');
const app = express();
const port = 3000;

//Vea cómo el código configura una ruta para / con :
app.get('/', (req, res) => res.send('Hello World!'));
//Después, inicia la aplicación web mediante la invocación del método listen():


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//node app.js