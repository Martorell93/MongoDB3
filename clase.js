//Relaciones en MongoDB
const mongoose = require("mongoose");

//1:1
const LibroSchema = new mongoose.Schema(
    {
        titulo: String,
        nPaginas: Number
    }
);

const libroModel = mongoose.model("LibroUno", LibroSchema);

const AutorSchema = new mongoose.Schema (
    {
        nombre: String,
        edad: Number,
        libro: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LibroUno"
        }
    }
);

const AutorModel = mongoose.model("AutoresMuchos", AutorSchema);

AutorModel.findOne({nombre: "Pepe"}).populate("libro").exec((err, autor) =>
{
    if(err) {
        console.log(err);
        process.exit(-1);
    };
    console.log(`El autor ${autor.nombre} tiene ${autor.libro.titulo}`);
    console.log(autor);
    mongoose.disconnect();
})

//1:N
const AutorSchema = new mongoose.Schema (
    {
        nombre: String,
        edad: Number,
        libros: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "LibroUno"
        }]
    }
);

AutorModel.findOne({nombre: "Pepe"}).populate("libros").exec((err, autor) =>
{
    if(err) {
        console.log(err);
        process.exit(-1);
    };
    console.log(`El autor ${autor.nombre} tiene ${autor.libro.titulo.length} libros`);
    console.log("Datos del primer libro " +
                autor.libros[0].titulo + " " +
                autor.libros[0].nPaginas);
    console.log(autor);
    mongoose.disconnect();
})

//M:M
const AutorSchema = new mongoose.Schema (
    {
        nombre: String,
        edad: Number,
        libros: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "LibroUno"
        }]
    }
);

const LibroSchema = new Mongoose.LibroSchema(
    {
        titulo: String,
        nPaginas: Number,
        autores: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AutoresMuchos"
        }
    }
);

libroModel.findOne({titulo: "Mi primer libro"}).populate("autores").exec((err, libro) =>
{
    if(err) {
        console.log(err);
        process.exit(-1);
    };
    console.log(`El libro ${libro.titulo} tiene ${libro.autores.length} autores`);
    console.log(libro);
    mongoose.disconnect();
})

//Arboles
const LibroSchema = new mongoose.Schema(
    {
        titulo: String,
        nPaginas: Number
    }
);

const libroModelArbol = mongoose.model("LibroArbol", LibroSchema);

const AutorSchema = new mongoose.Schema (
    {
        nombre: String,
        edad: Number,
        direccion: mongoose.Schema.Types.Mixed,
        libro: [LibroSchema]
    }
);

const AutorModelArbol = mongoose.model("AutoresArbol", AutorSchema);