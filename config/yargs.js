const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción en detalle de la tarea'
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea a completado', {
        tarea: {
            demand: true,
            alias: 't',
            desc: 'Actualiza la tarea a completada o pendiente'
        },
        completado: {
            default: true,
            alias: 'c'
        }
    })
    .command('borrar', 'Borra una tarea', {
        tarea: {
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;


module.exports = { argv };