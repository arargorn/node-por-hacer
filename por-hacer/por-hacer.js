const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('La tarea no se ha grabado', err)
        else console.log(`Tareas guardadas correctamente`);
    });
};

const cargarDB = () => {

    listadoPorHacer = require('../db/data.json');

}

let crearTarea = (descripcion) => {
    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    cargarDB();

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

};

let getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (i, estado = true) => {
    cargarDB();
    // Escoger tarea
    if (i < listadoPorHacer.length) {
        listadoPorHacer[i].completado = estado;
        guardarDB();
        console.log('Tarea actualizada');
    } else console.log('Error: no existe esta tarea');
};

const borrar = (i) => {
    cargarDB();
    if (i < listadoPorHacer.length) {
        listadoPorHacer.splice(i, 1);
        console.log(listadoPorHacer);
        guardarDB();
        console.log('Tarea borrada');
    } else console.log('Error: no existe esta tarea');
}

module.exports = {
    crearTarea,
    getListado,
    actualizar,
    borrar
};



/* try {
    if (fs.existsSync('./db/data.jason')) {
        console.log("The file exists.");
        fs.readFile('./db/data.jason', (err, data) => {
            console.log(String(data));
        });
    } else {

        fs.writeFile('./db/data.jason', JASON.Stringify(listadoPorHacer), (err) => console.log(err))
    }
} catch (err) {
    console.error(err);
} */