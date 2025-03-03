// importo el archivo app.js
import app from "./app.js"
// importo la base de datos
import"./database.js";
import { config } from "./src/config.js";

// importo el arcgivo config

// Creo una funcion que ejecuta el servidor
async function main(){

    app.listen(config.PORT);
    console.log("server running :3");

}

// Ejecuto la funcion
main();