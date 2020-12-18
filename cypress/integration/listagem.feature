#language: pt
Funcionalidade: Listagem

  Como usuário, desejo acessar a listagem para que
  possa visualizar os dados cadastrados

  Cenário: Listagem sem registros
    Dado que o site não possui registros
    Quando acessar a listagem
    Então devo visualizar a listagem vazia

  Cenário: Listagem com um único registro
    Dado que o site possui apenas um registro
    Quando acessar a listagem
    Então devo visualizar apenas com um registro