CREATE TABLE dw.fato_impeachment(
    voto VARCHAR(10)
  , parlamentar VARCHAR(80)
  , condicao VARCHAR(30)
  , sexo varchar(20)
  , foto VARCHAR(255)
  , uf VARCHAR(10)
  , sigla_partido VARCHAR(20)
  , partido VARCHAR(80)
  , composicao_legenda VARCHAR(120)
  , ocupacao VARCHAR(255)
  , dt_nascimento timestamp
  , idade_data_eleicao int
  , grau_instrucao VARCHAR(255)
  , estado_civil VARCHAR(80)
  , raca VARCHAR(20)
  , uf_nascimento VARCHAR(10)
  , municipio_nascimento VARCHAR(255)
  , email varchar(255)
  , despesa_maxima DOUBLE PRECISION
  , faixa_etaria VARCHAR(20)
  , nome_candidato_comparacao varchar(120)
  , nome_comparacao varchar(120)
  , regiao VARCHAR(20)
  , idade_atual int
  , quantidade int
);
