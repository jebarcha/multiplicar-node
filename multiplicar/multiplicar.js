// requires:
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('========================'.green);
    // console.log(`Hey aqui va a listar la tabla ${base}, limite hasta ${limite}`);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${2 * i}`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${2 * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};