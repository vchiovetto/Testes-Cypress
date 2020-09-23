describe("Prazo de entrega", () => {
  beforeEach(() => {
    cy.visit("https://www.mercadolivre.com.br/");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  const pesquisa = () => {
    cy.get(".nav-search").eq(0).type("camiseta maculina");
    cy.get(".nav-icon-search").click();
  };

  it("Pesquisar camiseta masculina", () => {
    pesquisa();
  });

  it("Clicar no primeiro link de uma pesquisa", () => {
    pesquisa();
    cy.get(".ui-search-result__wrapper").eq(0).click();
  });

  it("Selecionar a opção para calcular o prazo de entrega", () => {
    pesquisa();
    cy.get(".ui-search-result__wrapper").eq(0).click();

    cy.get(
      ".ui-pdp-container__row--shipping-summary > .ui-pdp-media > .ui-pdp-media__body > .ui-pdp-action-modal > .ui-pdp-action-modal__link"
    ).click();
    cy.get("[data-testid=zip-code-textfield]").type("06210030");
    cy.get("[data-testid=button-use-zipcode]").click();
    cy.get(".region").should("have.text", "Osasco, CEP: 06210030");
  });
});
