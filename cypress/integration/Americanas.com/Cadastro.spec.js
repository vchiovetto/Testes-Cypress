const email = "git2020teste@outlook.com"; // Insira um email
const password = "git2020teste"; // Insira uma senha
const cpf = "11111111111"; // Insira seu cpf
const name = "Maria João"; // Insira seu nome
const birthday = "19/09/1995"; // Insira sua data de nascimento
const maleOrfemale = "F"; // Insira M para Masculino e F para Feminino
const phone = "9999999999"; // Insira seu telefone

describe("Cadastro", () => {
  beforeEach(() => {
    cy.visit("https://www.americanas.com.br/");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Validar a abertura de Recaptcha com formulário válido", () => {
    cy.get(".usr-act-text").click();
    cy.get(".usr-signup").click();
    cy.get("#email-input").type(email);
    cy.get("#password-input").type(password);
    cy.get("#cpf-input").type(cpf);
    cy.get("#name-input").type(name);
    cy.get("#birthday-input").type(birthday);
    if (maleOrfemale === "M") {
      cy.get(".radio").eq(0).click();
    } else {
      cy.get(".radio").eq(1).click();
    }
    cy.get("#phone-input").type(phone);
    cy.get(".btn").click();
  });
});
