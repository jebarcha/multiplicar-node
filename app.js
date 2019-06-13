const argv = require('./config/yargs.js').argv;
const colors = require('colors');

// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red); // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        // console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        // console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo.green}`))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv);

//let argv2 = process.argv;
// console.log(argv2);

// console.log(argv.base);
// console.log('limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);