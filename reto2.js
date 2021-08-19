//Reto 2 MongoDB3
const mongoose = require("mongoose");
const User = require("./UserSchema");
const Photos = require("./PhotosSchema");

//Conecto con la BBDD de Mongo
mongoose.connect("mongodb://localhost:27017/instagram", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

//Creo documentos basados en cada modelo
let user1 = new User({
    login: "Juan2344",
    password: "mipassword",
    name: "Juan",
    surname: "Perez",
    dateOfBirth: 1999-09-23,
    rol: "student",
    addres: "Calle turro nº04",
    phone: 600566900,
    email: "neerd@geek.com",
    follow: "Esther_22"
});
let user2 = new User({
    login: "Maria03",
    password: "mipasssword1234",
    name: "Maria",
    surname: "Gomez",
    dateOfBirth: 1989-04-03,
    rol: "teacher",
    addres: "Calle sinounto nº10",
    phone: 633566988,
    email: "mariatheboss@mariaboss.com",
    follow: "Esther_22"
});
let user3 = new User ({
    login: "Esther_22",
    password: "12345877.",
    name: "Esther",
    surname: "Diaz",
    dateOfBirth: 2009-03-22,
    rol: "student",
    addres: "Calle clerina nº04",
    phone: 600511900,
    email: "neerd2@geek.com",
    follow: "Pedro23"
});
let user4 = new User({
    login: "Pedrore23",
    password: "contraseña1234",
    name: "Pedro",
    surname: "Esteban",
    dateOfBirth: 1982-01-23,
    rol: "director",
    addres: "Calle cielo nº01",
    phone: 622800400,
    email: "pedrotheboss@pedroboss.com",
    follow: "Esther_22"
});
let photo1 = new Photos({
    nombreUsuario: "Pedrore23",
    url: "https://wallsdesk.com/wp-content/uploads/2016/11/Morning-Photos.jpg",
    titulo: "Atardecer",
    descripcion: "atardecer en Alemania"
});
let photo2 = new Photos({
    nombreUsuario: "Esther_22",
    url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhddesktopwallpapers.in%2Fwp-content%2Fuploads%2F2015%2F09%2Fcreek-pictures-680x425.jpg&f=1&nofb=1",
    titulo: "Rio rabioso"
});
let photo3 = new Photos({
    nombreUsuario: "Esther_22",
    url: "https://hddesktopwallpapers.in/wp-content/uploads/2015/09/wave-pictures.jpg",
    titulo: "Ola hawai",
    descripcion: "surf en Hawai"
});
let photo4 = new Photos({
    nombreUsuario: "Esther_22",
    url: "https://www.bambootravel.co.uk/files/img_cache/44224/1400__1503590339_Krabi.jpg?1503590346",
    titulo: "Descanso",
    descripcion: "Vivir la vida"
});

//Insertamos todos los documentos, de los modelos User y Photo
// User.insertMany([user1, user2, user3, user4])
//     .then(function()
//     {
//         console.log("Documento guardado correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// Photos.insertMany([photo1, photo2, photo3, photo4])
//     .then(function(data)
//     {
//         console.log("Photos guardadas correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// User.find({})
//     .then(function(data)
//     {
//         console.log("Photos guardadas correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

//Actualizo la info sobre usuarios y fotos
// User.updateMany({login: "Pedrore23"}, {photos: ["611cf6162a0f4f5d0cd1fead"]})
//     .then(function(data)
//     {
//         console.log("Photos guardadas correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// User.updateMany({login: "Esther_22"}, {photos: ["611cf6162a0f4f5d0cd1feae", "611cf6162a0f4f5d0cd1feaf", "611cf6162a0f4f5d0cd1feb0"]})
//     .then(function(data)
//     {
//         console.log("Photos guardadas correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// Photos.updateOne({_id: "611cf6162a0f4f5d0cd1fead"}, {usuario: "611cf6162a0f4f5d0cd1feac"})
//     .then(function(data)
//     {
//         console.log("Photos actualizada correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// Photos.updateOne({_id: "611cf6162a0f4f5d0cd1feae"}, {usuario: "611cf6162a0f4f5d0cd1feab"})
//     .then(function(data)
//     {
//         console.log("Photos actualizada correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// Photos.updateOne({_id: "611cf6162a0f4f5d0cd1feaf"}, {usuario: "611cf6162a0f4f5d0cd1feab"})
//     .then(function(data)
//     {
//         console.log("Photos actualizada correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// Photos.updateOne({_id: "611cf6162a0f4f5d0cd1feb0"}, {usuario: "611cf6162a0f4f5d0cd1feab"})
//     .then(function(data)
//     {
//         console.log("Photos actualizada correctamente");
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

//Busqueda de una foto y dar información sobre el usuario
// Photos.find({titulo: "Atardecer"}).populate("usuario")
//     .then(function(data)
//     {
//         console.log("Información sobre la foto y el usuario", data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })


//Actualizo la información de los seguidores
// User.updateOne({login: "Juan2344"}, {follows: ["611cf6162a0f4f5d0cd1feab", "611cf6162a0f4f5d0cd1feaa", "611cf6162a0f4f5d0cd1feac"]})
//     .then(function(data)
//     {
//         console.log("Actualización de los follows", data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// User.updateOne({login: "Maria03"}, {follows: ["611cf6162a0f4f5d0cd1feac"]})
//     .then(function(data)
//     {
//         console.log("Actualización de los follows", data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// User.updateOne({login: "Esther_22"}, {follows: []})
//     .then(function(data)
//     {
//         console.log("Actualización de los follows", data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

// User.updateOne({login: "Pedrore23"}, {follows: ["611cf6162a0f4f5d0cd1feab"]})
//     .then(function(data)
//     {
//         console.log("Actualización de los follows", data);
//         mongoose.disconnect();
//     })
//     .catch(function (err)
//     {
//         console.log(err);
//         mongoose.disconnect();
//     })

//Mostrar fotos de los usuarios que seguimos
async function mostrarTimeLine(id) {
    User.find({_id: id})
    .populate({
    "path" : "follows",
    "populate" : {
        "path": "photos"
    }})
    .then(function(data)
    {
        console.log(data[0].follows[0]);
        console.log("Actualización de los follows", data);
        mongoose.disconnect();
    })
    .catch(function (err)
    {
        console.log(err);
        mongoose.disconnect();
    })
}

//Opcion Loca
    // const usuario = User.find({_id: "611cf6162a0f4f5d0cd1fea9"}, {follows: 1, login: 1})
    // .then(function(data)
    // {
    //     console.log(`El usuario ${data[0].login}, sigue a ${data[0].follows.length}`);
    //     const nume = data[0].follows.length;
    //     for (let i = 0; i < nume; i++) {
    //         const fin = nume - 1;
    //         User.find({_id: data[0].follows[i]}, {login: 1})
    //         .then(function(data1)
    //         {
    //             const infoFoto = data[0].follows[i]
    //             Photos.find({usuario: infoFoto}, {_id: 0, usuario: 0, __v: 0}).populate("usuario")
    //             .then(function(data2)
    //             {
    //                 console.log(`Fotos del usuario ${data1[0].login}:`);
    //                 console.log(data2);
    //             })
    //             .catch(function (err)
    //             {
    //                 console.log(err);
    //                 mongoose.disconnect();
    //             })
    //         })
    //         .catch(function (err)
    //         {
    //             console.log(err);
    //         })
    //     }
    // })