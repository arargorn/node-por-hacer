const argv = require('./config/yargs').argv;
const color = require('colors');

const { porHacer, crearTarea, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');


let comando = argv._[0];
//console.log(argv.d);
switch (comando) {

    case 'crear':
        let tarea = crearTarea(argv.d);
        console.log(tarea);
        break;

    case 'listar':

        let listado = getListado();
        //console.log(listado);
        for (let tarea in listado) {
            //console.log(listado[tarea]);
            console.log('=========Por hacer========'.green);
            console.log('Tarea: ' + tarea + ' - ' + listado[tarea].descripcion);
            console.log('Estado:' + listado[tarea].completado);
            console.log('=========================='.green);
        }
        break;

    case 'actualizar':
        actualizar(argv.t, argv.c);
        break;

    case 'borrar':

        borrar(argv.t);

        break;

    default:
        console.log('El comando no es reconocido');

}