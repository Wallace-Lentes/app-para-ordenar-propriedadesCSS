// importa uma biblioteca que lê uma linha do fluxo de entrada padrão.
import readline from 'readline';

// importa uma biblioteca que é usado para adicionar cor e estilo ao texto de saida.
import chalk from 'chalk';

// Cria uma interface para leitura de entrada e saida das propriedades.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cria uma lista vazia
const propriedadesCSS = [];

// Cria uma função para receber as propriedades pelo terminal e preencher a lista.
function entradaPropriedades(){
    rl.question('Digite suas propriedade de CSS, ao terminar digite "sair" para encerrar): ', entrada => {
        // Ao digitar 'sair', o terminal para de pedir para digitar e exibe a lista.
        if (entrada == "sair") {
            rl.close();
        
        // As propriedades digitadas sarão exibidas em Maiusculo.    
        } else {
            propriedadesCSS.push(entrada.toUpperCase());
            entradaPropriedades();
        }
    });
}

// Quando digitar 'sair', todas as propriedades sarão exibidas em Ordem alfabetica de A-Z e em ordem numerica.
rl.on('close', () => {
    const propriedadesOrdenadas = propriedadesCSS.sort();
    console.log(chalk.blue('\nPropriedades ordenadas de A-Z:'));
    propriedadesOrdenadas.forEach(propriedade => {
        console.log(chalk.green(propriedade));
    });
    process.exit(0);
});

entradaPropriedades();