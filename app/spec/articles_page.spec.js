/// <reference types="Cypress" />

describe("The Articles Page", () => {
  it("has a search box that is in focus", () => {
    cy.visit("/");

    cy.focused().should("have.class", "search-input");
  });

  it("The search input takes input and clears on clear", () => {
    cy.visit("/");

    const str = "hello world";

    cy.get(".search-input")
      .type(str)
      .should("have.value", str);

    cy.get(".clear-button").click();

    cy.get(".search-input").should("have.value", "");
  });
});
