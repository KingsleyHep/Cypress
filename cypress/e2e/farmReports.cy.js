/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
  cy.navigateToReports();
  cy.waitForIframe("#pageContent");
});
describe.only("visual regression tests for farm reports", () => {
  it("should take a picture of the reports page on load", () => {
    cy.get("#pageContainer").within(() => {
      cy.get("#ScreenSizedDiv").should("exist").should("be.visible");
      cy.get("#content").should("exist").should("be.visible");

      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        cy.get("#ScreenSizedDiv").should("exist").should("be.visible");
        cy.get("#content").should("exist").should("be.visible");

        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#ScreenSizedDiv").should("exist").should("be.visible");
          cy.get("#content").should("exist").should("be.visible");

          cy.get('iframe[id="content"]').then(function ($innerframe) {
            const $innerbody = $innerframe.contents().find("body");
            cy.get("#ScreenSizedDiv").should("exist").should("be.visible");
            cy.get("#content").should("exist").should("be.visible");

            cy.wrap($innerbody).within(() => {
              console.log("inner body:", $innerbody);

              cy.get("#ScreenSizedDiv").should("exist").should("be.visible");
              cy.get("#content").should("exist").should("be.visible");
            });
          });
        });
      });
    });
  });

  //end of describe scope
});
