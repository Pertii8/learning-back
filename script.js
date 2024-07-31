//let  significa q puede cambiar la variable
//const significa q no va acambiar nunca

const http = require("http")// './' accede al directorio dnd estas desp podes importarle alguna carpeta d ahi

function requestController(){
    //logica funcion
    console.log("hola paa");
}

//configurar nuestro sv
const server = http.createServer(requestController)

server.listen(4000)
//server.listen(4000)
//const person = {name :  "valen"};

//console.log(person.name);