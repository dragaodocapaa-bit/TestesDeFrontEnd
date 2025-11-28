describe("Teste página de cadastro", () => {

  const url_page = 'http://127.0.0.1:5500/index.html'

  beforeEach(() => {
    cy.visit(url_page);
  });

  it("Deve exibir erro ao tentar enviar com campos vazios", () => {
    cy.get("#btnCadastrar").click();

    cy.get("#mensagem")
      .should("be.visible")
      .should("have.class", "erro")
      .and("contain", "Erro: Por favor, preencha todos os campos.");
  });

  it("Deve exibir erro ao inserir email inválido", () => {
    cy.get("#nome").type("João");
    cy.get("#email").type("email-invalido");
    cy.get("#usuario").type("joao123");
    cy.get("#senha").type("12345678");
    cy.get("#confirmaSenha").type("12345678");

    cy.get("#btnCadastrar").click();

    cy.get("#mensagem")
      .should("be.visible")
      .and("have.class", "erro");
  });

  it("Deve exibir erro quando a senha tiver menos de 8 caracteres", () => {
    cy.get("#nome").type("Maria");
    cy.get("#email").type("maria@teste.com");
    cy.get("#usuario").type("maria123");
    cy.get("#senha").type("123");
    cy.get("#confirmaSenha").type("123");

    cy.get("#btnCadastrar").click();

    cy.get("#mensagem")
      .should("be.visible")
      .should("have.class", "erro")
      .and("contain", "Erro: A senha deve ter pelo menos 8 dígitos.");
  });

  it("Deve exibir erro quando as senhas não coincidem", () => {
    cy.get("#nome").type("Pedro");
    cy.get("#email").type("pedro@teste.com");
    cy.get("#usuario").type("pedro123");
    cy.get("#senha").type("12345678");
    cy.get("#confirmaSenha").type("00000000");

    cy.get("#btnCadastrar").click();

    cy.get("#mensagem")
      .should("be.visible")
      .should("have.class", "erro")
      .and("contain", "Erro: As senhas não coincidem.");
  });

  it("Deve realizar o cadastro com sucesso quando tudo estiver correto", () => {
    cy.get("#nome").type("Ana");
    cy.get("#email").type("ana@teste.com");
    cy.get("#usuario").type("ana123");
    cy.get("#senha").type("12345678");
    cy.get("#confirmaSenha").type("12345678");

    cy.get("#btnCadastrar").click();

    cy.get("#mensagem")
      .should("be.visible")
      .should("have.class", "sucesso")
      .and("contain", "Cadastro realizado com sucesso!");
  });

});


