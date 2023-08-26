import readline from 'readline';

import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const propriedadesCSS = [];

function entradaPropriedades(){
    rl.question('Digite suas propriedade de CSS, ao terminar digite "sair" para encerrar): ', entrada => {
        if (entrada == "sair") {
            rl.close();
        } else {
            propriedadesCSS.push(entrada.toUpperCase());
            entradaPropriedades();
        }
    });
}

rl.on('close', () => {
    const propriedadesOrdenadas = propriedadesCSS.sort();
    console.log(chalk.blue('\nPropriedades ordenadas de A-Z:'));
    propriedadesOrdenadas.forEach(propriedade => {
        console.log(chalk.green(propriedade));
    });
    process.exit(0);
});

entradaPropriedades();