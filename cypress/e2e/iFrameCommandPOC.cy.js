/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
  cy.navigateToAccountsReports();
});
describe.only("creating methods for accessing the iFrames in PoultryManager", () => {
  it("identifies and manipulates the iFrame on the accounts menu", () => {});
});
