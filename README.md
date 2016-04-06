# Análise do mapa do impeachment da Presidente Dilma

Esse repositório tem uma extração de dados da página http://mapa.vemprarua.net/br/.

Lá, a gente vê uma lista com:
 * Parlamentar;
 * Casa (Senado/Câmara);
 * Partido;
 * UF;
 * Posição com relação ao impeachment (contra, a favor, indeciso);
 * Link para página com maiores informações sobre o parlamentar;

# Ambiente

Toda a parte de integração de dados é implementada com o Pentaho Data Integration.

As visualizações também serão construídas no topo da plataforma Pentaho de Business Analytics, em sua distribuição Community Edition.

### Dependências:

Para o Pentaho Data Integration, adicionar a lib **jodd-x.x.jar** em `data-integration/lib`. A biblioteca ser baixada em http://jodd.org/download/.

# Análise

O Intuito desse repositório, é implementar com Pentaho, uma solução para ingestão desses dados e apresentação de informações de diversas maneiras através de:
 * Cubos OLAP;
 * Visões analíticas;
 * Painéis de visualizações de dados.


# TO-DO / Contribuições

Para definir melhor o que será entregue, serão escritos tickets [issues] nesse repositório.

Para a organização do repositório com soluções Pentaho, favor seguir as dicas de organização de pastas dos vídeos:
 * [GIT - Guia de Sobrevivência [Parte 1]](https://www.youtube.com/watch?v=qABTttlQ1Qk)
 * [GIT - Guia de Sobrevivência [Parte 2]](https://www.youtube.com/watch?v=0Z2Afm4yZLY)
