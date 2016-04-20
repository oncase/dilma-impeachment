var _resizableCharts = [];


/*
    Registro uma funcao que vai ser chamada sempre que a janela for
    redimensionada.

    Essa funcao vai chamar a atualizacao (sem chamar datasource) dos
    componentes que se registraram para tal.
 */
$(window)
    .resize(function () {
        _resizeComponents();
});




/*
    Parametros:
     - componente --- objeto do componente acessado por this dentro dos pontos
                      de acesso
     - cda        --- objeto que o resultset encaminha ao componente. acessivel
                      dentro do postFetch( cda ) - eh passado como argumento

    Essa funcao recebe um resultset pre definido, com:
     - Membro  - o membro com maior ocorrencia - os membros tem de estar
                 ordenados decrescentemente com BDESC
     - Numero  - o numero absoluto que representa aquele percentual
     - Percent - o percentual daquele numero absoluto sobre o todo

    A funcao formata os textos e cria a estrutura HTML
    O Estilo deve ser tratado via CSS
 */

function imprimeKPI( componente , cda ){

    var htmlObject = $("#"+componente.htmlObject),
        resultset = cda.resultset,
        texto = resultset[0][0],
        num = resultset[0][1],
        percent = resultset[0][2];


    percent = componente.dashboard.numberFormat(percent, '0.00%');

    var dados = '<div class="imp-legenda-num">'+  num  +'</div>'+
                '<div class="imp-legenda-percent">'+  percent  +'</div>'+
                '<div class="imp-legenda-texto"><small>'+  texto  +'</small></div>';

    htmlObject.html(dados);

}



/*
    Um componente pode se registrar na sua pre-execution para que
    sempre que a pagina for redimensionada, ele se adeque a nova largura do
    seu container. O pushResizable funciona como addToSet (trata duplicacoes).

    Exemplo de funcao pre-execution:

    function(){
      pushResizable(this);
    }

 */
function pushResizable(component) {

    for (c = 0; c < _resizableCharts.length; c++) {
        if (_resizableCharts[c].name === component.name)
            return;
    }
    console.log("[OncaseUtils] push resizable " + component.name);
    _resizableCharts.push(component);
}



/*
  Funcao principal que eh chamada  quando a janela eh redimensionada
 */
function _resizeComponents() {
    for (w = 0; w < _resizableCharts.length; w++) {
        _reRender(_resizableCharts[w]);
    }
}


/*
    Comandos passados para o componente para que ele se atualize sem
    chamar o datasource novamente
 */
function _reRender(component) {
    component.chart.options.width = _getParentWidth(component);
    component.chart.render(
        /*bypassAnimation*/ true, /*recreate*/ true, /*reload*/ false);
}


/*
    Funcao auxiliar que pega a largura do container HTML de um componente
 */
function _getParentWidth(component) {
    return $("#" + component.htmlObject)
        .width();
}
