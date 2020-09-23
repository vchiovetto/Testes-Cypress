const email = "git2020teste@outlook.com"; // Insira um email
const password = "git2020teste"; // Insira uma senha

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://www.americanas.com.br/");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Validar login", () => {
    cy.get(".usr-grt-text").click();
    cy.get("#h_usr-signin").click();
    cy.get("#email-input").type(email);
    cy.get("#password-input").type(password);
    cy.get("#login-button").click();
  });
});
