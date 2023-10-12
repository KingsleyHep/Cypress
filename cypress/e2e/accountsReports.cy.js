/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
  cy.navigateToAccountsReports();
});

//Page is rendered with pageContainer first, then iFrame of pageContent, then and iFrame of content
describe.only("visual regression tests for accounts reports", () => {
  it.only("should take a picture of the  accounts reports page on load", () => {
    cy.compareSnapshot("accountsReports on load", 2.5);
  });

  it("should take a picture of the first report in the menu", () => {
    cy.get("#Reports").should("exist").should("be.visible");
    cy.compareSnapshot("accountsReports first report", 2.5);
  });

  //its' scope
}); //end of describe scope
