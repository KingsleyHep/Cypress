/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
  cy.navigateToFarmReports();
  cy.waitForIframe("#pageContent");
});

//Page is rendered with pageContainer first, then iFrame of pageContent, then and iFrame of content
describe.only("visual regression tests for farm reports", () => {
  it("should take a picture of the reports page on load", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const insideIFrameIdPageContent = $iframe.contents().find("body");
        //elements outside the iframe #content
        cy.wrap(insideIFrameIdPageContent).within(() => {
          cy.get("#ScreenSizedDiv").should("exist").should("be.visible");
          cy.get("#content").should("exist").should("be.visible");

          //!elements that should be inside the iframe #content
          cy.get('iframe[id="content"]').then(function ($innerframe) {
            const insideIFrameIdContent = $innerframe.contents().find("body");
            cy.wrap(insideIFrameIdContent).within(() => {
              cy.get("#TopBox").should("exist").should("be.visible");
              //todo: resolve top box DOM element
              cy.get("#TopBox").then(($topBox) => {
                const insideTopBox = $topBox.contents().find("body");
                //!can't find these elements inside the iframe #TopBox
                cy.wrap(insideTopBox).within(() => {
                  cy.get("#ViewRep").should("exist").should("be.visible");
                  cy.get("#options").should("exist").should("be.visible");
                  cy.get("#Title").should("exist").should("be.visible");
                });
              });
            });
          });
        });
      }); // end of #pageContent iframe scope
    }); // end of #pageContainer scope
  }); // end of it should take a picture of the reports page on load scope

  //end of describe scope
});
