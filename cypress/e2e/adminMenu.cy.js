/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
  cy.navigateToAdminOptions();
});

//! unitas_background is the class of the body element inside the iFrame pageContent
//Page is rendered with pageContainer first, then iFrame of pageContent, then and iFrame of content
describe("visual regression tests for accounts reports", () => {
  it("should take a picture of the admin page on load", () => {
    cy.compareSnapshot("admin", 0.3);
  });

  it.only("should take a picture the user admin page", () => {
    //cy.get("#AdminOpts").should("be.visible");
    cy.iframe("#pageContent").within(() => {
      cy.get(".unitas_background").should("exist");
    });

    // cy.get("#frame1")
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find(".unitas_background")
      .should("exist");

    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form"]')
      .should("exist");

    //finds the table that stores the admin options
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find("#AdminOpts")
      .should("exist");

    //finds the anchor elements that store the admin options
    //(20 items text tags match what is displayed in table aa clickable options)
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find("#AdminOpts")
      .find("td")
      .find("a")
      .should("exist");

    cy.wait(2000);
    //!a href="../shared/useradmin_sel.asp?action=0&usr=unitassup"

    //todo: check iFrame plugin for cypress docs
    cy.iframe("#pageContent").get(".unitas_background").should("exist");

    cy.enter("#pageContent").then((getiFrameBody) => {});
  });

  //end of describe scope
});

//cy.get('[name="form"]').should("be.visible");
