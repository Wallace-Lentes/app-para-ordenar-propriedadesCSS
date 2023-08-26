# Ordenção de lista

## Leitor de Propriedades CSS

Este é um simples aplicativo de linha de comando para ler propriedades CSS do usuário e exibi-las em ordem alfabética.

## Funcionalidades

- Lê propriedades CSS do usuário a partir da linha de comando.
- Exibe as propriedades digitadas em maiúsculas e na cor verde.
- Ordena as propriedades em ordem alfabética de A a Z e em ordem numérica.
- Encerra a entrada de propriedades quando o usuário digita "sair".

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

## Como Usar

1. Clone este repositório em sua máquina.

2. Abra o terminal na pasta do projeto.

3. Instale as dependências executando o seguinte comando:
    `npm install axios`
    `npm install chalk`
    `npm install readline`

4. Execute o aplicativo com o seguinte comando:
    `npm start`

5. Digite suas propriedades CSS. Digite "sair" quando terminar.
Exemplo:
`Digite suas propriedades de CSS, ao terminar digite "sair" para encerrar:` mensagem exibida no terminal.
Digite: 
`font-size`
`margin`
`color`
`sair`

6. O aplicativo exibirá as propriedades digitadas em ordem alfabética e numérica.
Será exibido no terminal:
`Propriedades ordenadas de A-Z:` na cor azul.
`color` na cor verde.
`font-size` na cor verde.
`margin` na cor verde.

## Bibliotecas Utilizadas

- [`readline`](https://nodejs.org/api/readline.html): Biblioteca para ler linhas do fluxo de entrada e saida padrão.
- [`chalk`](https://www.npmjs.com/package/chalk): Biblioteca para adicionar estilo ao texto de saída no console, como exemplo a cor.

## Contribuição

Contribuições são bem-vindas! Se você tiver melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](https://opensource.org/licenses/) para obter mais detalhes.
