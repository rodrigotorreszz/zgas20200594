// importar la libreria mongoose

import mongoose from "mongoose";
// importo el arcivo con todas las variables
import { config } from "./src/config.js";

// en una url la base de datos


// conectar base de datos
mongoose.connect(config.MONGO_URI);

// ------------------------------------------------------ Comprobar que todo funcione

const connecction = mongoose.connection;

connecction.once("open", () => {
    console.log("DB is connected :D");
});

connecction.on("disconnected" , () => {
    console.log("DB is disconnected");
});

connecction.on("error", (error) => {
    console.log("error found" + error);
});
