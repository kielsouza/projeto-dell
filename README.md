
# Projeto Dell IT Academy
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/kielsouza/projeto-dell/blob/master/README.en-us.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/kielsouza/projeto-dell/blob/master/README.md)

- Esta atividade consiste no desenvolvimento de uma simulação para um sistema de transporte interestadual de cargas.
- Os dados de distância entre as cidades estão disponíveis no arquivo CSV anexo. 
- Neste arquivo, a primeira linha contém os nomes das cidades para onde ocorrem os transportes; as demais linhas do arquivo constituem uma matriz de distâncias entre as respectivas cidades.
- A transportadora Dely tem sua frota composta por caminhões de portes distintos: um modelo de caminhão de porte pequeno transporta até 1 toneladas e possui o custo de R$ 4,87 por km rodado; um caminhão de médio porte transporta até 4 toneladas e possui o custo de R$ 11,92 por km rodado; e um caminhão de grande porte transporta até 10 toneladas e possui o custo de R$ 27,44 por km rodado.
- Na tabela abaixo, está disponível a relação de custo por km para cada modalidade de transporte.

|  Itens                    | Preço por Km (R$/km) |
|           :---:           |        :----:        |
| Caminhão de pequeno porte |         4,87         |
| Caminhão de médio porte   |         11,92        |
| Caminhão de grande porte  |         37,44        |

#### Observação: para essa atividade, deverão ser ignoradas as dimensões dos produtos transportados, apenas seus pesos são relevantes.

- Na tabela abaixo estão disponíveis alguns itens de transporte, apenas como exemplo.

|  Itens                    | Peso (kg) |
|           :---:           |  :----:   |
| Celular                   |    0.5    |
| Geladeira                 |    60.0   |
| Freezer                   |    100.0  |
| Cadeira                   |    5.0    |
| Luminária                 |    0.8    |
| Lavadora de Roupa         |    120    |


## Funcionalidades

### 1 - [Consultar trechos x modalidade]
- O programa deverá representar em modo texto ou gráfico os trechos disponíveis para realização dos transportes, de modo a permitir que o usuário indique o nome de duas cidades e a modalidade de transporte: o programa deverá mostrar a distância rodoviária entre elas e o custo total calculado para o trecho; se um nome de cidade não existir, informar ao usuário;
- Por exemplo: de PORTO ALEGRE para SÃO PAULO, utilizando um caminhão de pequeno porte, a distância é de XXX km e o custo será de R$ xxx,00.

### 2 - [Cadastrar transporte]
- O programa deverá permitir ao usuário listar uma sequência de cidades e adicionar uma lista de itens a transportar (e seus pesos).
- O programa deverá calcular a distância total a ser percorrida e identificar o modelo de caminhão mais adequado para este transporte, bem como os custos envolvidos (por trecho e totais).
- Por exemplo: de PORTO ALEGRE para SÃO PAULO, a distância a ser percorrida é de X km, para transporte dos produtos X, Y , Z será necessário utilizar 2 caminhões de porte PEQUENO e um de porte MÉDIO, de forma a resultar no menor custo de transporte por km rodado. O valor total do transporte dos itens é R$ xxx,00, sendo R$ xxx,00 é o custo unitário médio.

### Para realizar esta questão, considere os seguintes cenários de exemplo:

#### Cenário 1:
A empresa TikStop deseja transportar o total de 300 celulares, 50 geladeiras, 70 freezers e 2000 luminárias. O transporte deverá partir da cidade de Porto Alegre, com parada em Florianópolis onde serão descarregados 25 geladeiras, 50 freezers e 100 celulares. O restante da carga seguirá até a cidade de Curitiba.

#### Cenário 2:
A empresa LeMour deseja transportar o total de 500 celulares, 100 geladeiras, 200 freezers, 98 cadeiras. O transporte deverá partir da cidade de Maceió, com parada em Goiânia onde serão descarregados 90 geladeiras, 200 freezers e 20 celulares. O restante da carga seguirá até São Paulo.

##### Observação: para alguns cenários de uso poderá ser necessário alocar mais de um caminhão para dar conta da carga.
    
### 3 - [Dados estatísticos]
- O programa deverá exibir um relatório dos transportes até então cadastrados.
- Para cada um deverá ser apresentado o custo total, o custo por trecho, o custo médio por km, o custo médio por tipo de produto, o custo total por trecho, o custo total para cada modalidade de transporte, o número total de veículos deslocados e o total de itens transportados. 

### 4 - [Finalizar o programa]
- O programa deve permitir que o usuário encerre o programa a qualquer momento.

### Observações finais:

1. Você pode exibir as informações solicitadas da maneira que achar mais conveniente e útil, utilizando caracteres, símbolos, números, espaços, interface gráfica, páginas web, etc. Use a criatividade e mostre o que você sabe!

2. Sugere-se o desenvolvimento de um programa na linguagem de sua preferência, com uma interface também de sua preferência podendo ser gráfica ou textual/console, com um menu com as opções enumeradas nos requisitos;

3. Você deve escrever o código que realiza as funções requeridas e armazena os dados lidos em memória (do jeito que você quiser). 

4. Não é necessário gravar dados em nenhum formato, nem usar sistemas de banco de dados.

5. O programa deverá lidar com dados de entrada inválidos e informar uma mensagem adequada caso ocorram. Lembre-se de demonstrar isso nas capturas de tela ao realizar os testes.
    
