//Retos MongoDB 3
const mongoose = require("mongoose");

//Conecto con la BBDD de Mongo
mongoose.connect("mongodb://localhost:27017/MongoDB3", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

//Reto 1
//Declaro los esquemas
const cocheSchema = mongoose.Schema (
    {
        marca: String,
        modelo: String,
        color: String,
        año: Date,
        //One to One
        // motor: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "motorModel"
        // }
        //One to Many
        motores: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "motorModel"
        }]
});

const cocheModel = mongoose.model("cocheModel", cocheSchema, "coches");

const motorSchema = mongoose.Schema (
    {
        valvulas: Number,
        tipo: {
            type: String,
            enum: ["gasolina", "diesel"]
        },
        CV: Number,
        //Many to Many
        // coches: [{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref="cocheModel"
        // }]
})

const motorModel = mongoose.model("motorModel", motorSchema, "motores");

//Creo documentos en base a los modelos de coche y motor
const motor1 = {
    valvulas: 16,
    tipo: "gasolina",
    CV: 320
}

const motor2 = {
    valvulas: 8,
    tipo: "diesel",
    CV: 250
}

const motor3 = {
    valvulas: 16,
    tipo: "diesel",
    CV: 360
}

const coche1 = {
    marca: "Alfa Romeo",
    modelo: "147",
    color: "Blanco",
    año: "2012-01-01",
    motores: ["611cef42c1648c2ea480467f", "611cef42c1648c2ea4804680"]
}

const coche2 = {
    marca: "Alfa Romeo",
    modelo: "147",
    color: "Blanco",
    año: "2012-01-01",
    motores: ["611cef42c1648c2ea480467e"]
}

//Inserto los motores
// motorModel.insertMany([motor1, motor2, motor3])
//     .then(function(motor)
//     {
//         console.log("Documento guardado correctamente", motor);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

//Inserto los coches
// cocheModel.insertMany([coche1, coche2])
//     .then(function(coches)
//     {
//         console.log("Documento guardado correctamente", coches);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

//Busqueda sobre la colección coches, dado que la relación viene desde el
cocheModel.find({}).populate("motores")
    .then(function(coches)
    {
        console.log("Busqueda sobre: ", coches);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })

    