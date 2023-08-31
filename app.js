// importa uma biblioteca que lê uma linha do fluxo de entrada padrão.
import readline from 'readline';
// // importa uma biblioteca que é usado para adicionar cor e estilo ao texto de saida.
import chalk from 'chalk';

// Classe para ordenar e exibir as propriedades.
class SorteioDePropriedades {
    constructor() {
        // Cria uma lista vazia.
        this.propriedadesCSS = [];
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.rl.on('close', () => this.exibirPropriedadesOrdenadas());
    }

    iniciar() {
        this.entradaPropriedades();
    }
    
// Recebe as propriedades pelo terminal e preencher a lista.
    entradaPropriedades() {
        this.rl.question('Digite suas propriedades de CSS, ao terminar digite "sair" para encerrar): ', entrada => {
            // Ao digitar 'sair', o terminal para de pedir para digitar e exibe a lista.
            if (entrada === 'sair') {
                this.rl.close();
            } 
            // As propriedades digitadas sarão exibidas em Maiusculo.    
            else {
                this.propriedadesCSS.push(entrada.toUpperCase());
                this.entradaPropriedades();
            }
        });
    }

// Quando digitar 'sair', todas as propriedades sarão exibidas em Ordem alfabetica de A-Z e em ordem numerica.
    exibirPropriedadesOrdenadas() {
        const propriedadesOrdenadas = this.propriedadesCSS.sort();
        console.log(chalk.blue('\nPropriedades ordenadas de A-Z:'));
        propriedadesOrdenadas.forEach(propriedade => {
            console.log(chalk.green(propriedade));
        });
        process.exit(0);
    }
}

const sorter = new SorteioDePropriedades();
sorter.iniciar();
