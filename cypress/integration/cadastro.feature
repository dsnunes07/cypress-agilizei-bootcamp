Feature: Cadastro

  Como usuário, desejo realizar um cadastro para que
  possa acessar o sistema

  Scenario: Cadastro de usuário no site
    Given que acesso o site
    When informar meus dados
    And salvar
    Then devo ser cadastrado com sucesso