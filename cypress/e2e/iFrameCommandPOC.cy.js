/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
});
describe("creating methods for accessing the iFrames in PoultryManager", () => {
  it.only("identifies and manipulates the iFrame on the farm menu", () => {
    cy.navigateToFarmReports();
  });

  it("identifies and manipulates the iFrame on the accounts menu", () => {
    cy.navigateToAccountsReports();
  });
});
