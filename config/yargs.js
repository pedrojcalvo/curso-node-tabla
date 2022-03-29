
const argv = require('yargs')
.options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar.'
})
.options('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Imprime la tabla por consola.'
})
.options('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Número hasta el que se multiplicará la base.',
    default: 10
})
.check((argv, options)=>{
    if( isNaN(argv.b)){
        throw 'La base tiene que ser un número.'
    }
    return true;
})
.argv;
 
module.exports = argv;
