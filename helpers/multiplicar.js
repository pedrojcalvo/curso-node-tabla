
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base = 1, listar = false, h) =>{

    try{
        
        let salida, consola = '';
        
        for (let cont = 1; cont <=h; cont ++){
            salida += base+' X '+cont+' = '+base*cont+'\n';
            consola += colors.blue(base)+' X '.red+colors.yellow(cont)+' = '.gray+colors.cyan(base*cont)+'\n';
        }
        
        if(listar==true){
            console.clear();
            console.log('========================'.red);
            console.log('     TABLA DEL: '.yellow.underline+colors.green.underline(base));
            console.log('========================'.red);
    
            console.log(consola);
        }
 
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `Tabla-${base}.txt`;

    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivoTabla
}
