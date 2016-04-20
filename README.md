# Análise do mapa do impeachment da Presidente Dilma

Esse repositório tem uma extração de dados da página http://mapa.vemprarua.net/br/, além de dados sobre a votação do impeachment da Presidente Dilma e outras informações de parlamentares vindas do TSE.

### VemPraRua

Nos dados do VemPraRua, a gente vê uma lista com:

 * Parlamentar;
 * Casa (Senado/Câmara);
 * Partido;
 * UF;
 * Posição com relação ao impeachment (contra, a favor, indeciso);
 * Link para página com maiores informações sobre o parlamentar;

### Votação x TSE

A gente montou um processo de ETL em `etl/raw-to-result`, que desagua numa tabela de fatos sobre a votação e tem diversas inforamções socio econômicas dos parlamentares.

Essa massa permitiu que montássemos um cubo OLAP e fizéssemos um dashboard montado no topo da plataforma Pentaho com CTools.

Esse painel está disponível na pasta `Treinamento/`.

São atributos presentes nessa massa de dados:

* **voto** - sim, nao, ausente, abstencao
* **parlamentar** - nome
* **condicao** - suplente, titular
* **sexo** - genero
* **foto** - url para uma foto
* **regiao** - a regiao brasileira por onde foi eleito
* **uf** - a uf pelo qual o parlamentar foi eleito
* **sigla_partido** - a sigla do partido pelo qual foi eleito
* **partido** - o nome completo do partido
* **composicao_legenda** - a composicao de partidos na legenda
* **ocupacao** - ocupacao/profissao principal do parlamentar
* **dt_nascimento** - data de nascimento do parlamentar
* **idade_data_eleicao** - a idade na data em que foi eleito
* **grau_instrucao** - grao de escolaridade
* **estado_civil** - estado civil
* **raca** - raca auto declarada
* **uf_nascimento** - uf onde nasceu o parlamentar
* **municipio_nascimento** - o municipio de nascimento
* **email** - email (nao obrigatorio)
* **despesa_maxima** - despesa maxima de campanha
* **faixa_etaria** - faixa etaria
* **idade_atual** - idade do parlamentar na data da carga dos dados.

# Ambiente

Toda a parte de integração de dados é implementada com o Pentaho Data Integration.

As visualizações também foram construídas no topo da plataforma Pentaho de Business Analytics, em sua distribuição Community Edition.

### Dependências:

**A extração do VemPraRua depende da lib Jodd**. No Pentaho Data Integration, adicionar a lib **jodd-x.x.jar** em `data-integration/lib`. A biblioteca ser baixada em http://jodd.org/download/.

# Análise

O Intuito desse repositório, é implementar com Pentaho, uma solução para ingestão desses dados e apresentação de informações de diversas maneiras através de:
 * Cubos OLAP;
 * Visões analíticas;
 * Painéis de visualizações de dados.


# Passos para subir o ambiente Câmara**x**TSE

1. Crie uma tabela no seu banco descrita por `data/ddl.postgres.sql` - se você utiliza outro SGBD, sinta-se livre para adaptar o script e enviar-nos um pull-request;
2. Abra o etl `etl/raw-to-result` e execute-o com o PDI;
3. Crie uma conexão no seu BA-Server, que aponte para o banco para onde você populou os dados;
4. Importe o arquivo `schema/Impeachment.xml` para o seu ambiente, vinculando-o à conexão que você acabou de criar;
5. zipe o conteúdo da pasta `Treinamento/` e faça upload para o seu repositório de soluções do BA Server;
6. Abra o dashboard.


# TO-DO / Contribuições

Para definir melhor o que será entregue, serão escritos tickets [issues] nesse repositório.

Para a organização do repositório com soluções Pentaho, favor seguir as dicas de organização de pastas dos vídeos:
 * [GIT - Guia de Sobrevivência [Parte 1]](https://www.youtube.com/watch?v=qABTttlQ1Qk)
 * [GIT - Guia de Sobrevivência [Parte 2]](https://www.youtube.com/watch?v=0Z2Afm4yZLY)
