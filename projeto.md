cucumber-gherkin
  cucumber: preprocessador de testes
  gherkin: linguagem do bdd
    cypress-cucumber-preprocessor: plugin para usar cucumber com cypress


mochawesome
  formato de relatório nativo do cypress para gerar relatórios de testes
  para adicionar ao projeto:

    mocha: biblioteca de execução de testes
    mochawesome: gera arquivo .json por spec
    mochawesome-merge: une todos os .json em um único arquivo json
    mochawesome-report-generator: gerar relatório html baseado no json
    cypress-multi-reporters: gerar multiplos tipos de relatórios ao final de cada execução

cucumber html report: gerar relatórios dos testes em html

dependencias:
  cucumber-html-reporter