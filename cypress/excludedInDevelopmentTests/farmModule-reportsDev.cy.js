/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
  cy.navigateToFarmReports();
});

//Page is rendered with pageContainer first, then iFrame of pageContent, then and iFrame of content
describe.only("visual regression tests for farm reports", () => {
  //todo: refactor with cypress docs resolution for DOM body
  it("should take a picture of the reports page on load", () => {
    cy.compareSnapshot("farmn reports on load", 0.3);
  }); // end of it should take a picture of the reports page on load scope

  //end of describe scope
});
