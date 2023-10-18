/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
  cy.navigateToAdminOptions();
});

//Page is rendered with pageContainer first, then iFrame of pageContent, then and iFrame of content
describe("visual regression tests for accounts reports", () => {
  it("should take a picture of the admin page on load", () => {
    cy.compareSnapshot("admin", 0.3);
  });

  it.only("should take a picture the user admin page", () => {
    //cy.get("#AdminOpts").should("be.visible");
    cy.iframe("#pageContent").within(() => {
      cy.get(".unitas_background").should("exist");
      //cy.get(".unitas_background").its('0.contentDocument.body').

      //cy.get(".unitas_background").children();
      // const insideUnitasBackground = cy.get(".unitas_background").children();
      // insideUnitasBackground.should("exist");
    });

    cy.iframe("#pageContent").find(".unitas_background").should("exist");
    const pageContentiFrame = cy.iframe("#pageContent").find("#document");
    //!return to docs and start here'
    cy.enter("#pageContent").then((getiFrameBody) => {
      getiFrameBody().find(".unitas_background").should("exist");
      getiFrameBody().find("#AdminOpts").children().should("exist");
    });
  });

  //end of describe scope
});

//cy.get('[name="form"]').should("be.visible");
