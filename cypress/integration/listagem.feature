Feature: Listagem

  Como usuário, desejo acessar a listagem para que
  possa visualizar os dados cadastrados

  Scenario: Listagem sem registros
    Given que o site não possui registros
    When acessar a listagem
    Then devo visualizar a listagem vazia

  Scenario: Listagem com um único registro
    Given que o site possui apenas um registro
    When acessar a listagem
    Then devo visualizar apenas com um registro