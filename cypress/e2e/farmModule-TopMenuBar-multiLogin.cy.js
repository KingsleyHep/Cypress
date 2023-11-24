/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
});

//! all of farm menu needs refactored
describe("visual regression tests for farm navigation bar options", () => {
  it("takes a picture of the dashboard page", () => {
    cy.frameLoaded("iframe#pageContent");
    cy.wait(750);
    cy.compareSnapshot("dashboard", 0.3);
  });

  it("takes a picture of the group page", () => {
    cy.iframe("#pageContent").within(() => {
      cy.get("#Tab").contains("Group").click();
      cy.iframe("#content").within(() => {
        cy.get("#TopBox").should("be.visible");
      });
    });
    cy.wait(750);
    cy.compareSnapshot("group", 0.3);
  });

  it("takes a picture of the production page", () => {
    cy.iframe("#pageContent").within(() => {
      cy.get("#Tab").contains("Production").click();
      cy.iframe("#content").within(() => {
        cy.get("#TopBox").should("be.visible");
      });
    });
    cy.wait(2500);
    cy.compareSnapshot("production", 0.3);
  });

  it("takes a picture of the placement page", () => {
    cy.iframe("#pageContent").within(() => {
      cy.get("#Tab").contains("Placement").click();
      cy.iframe("#content").within(() => {
        cy.get("#TopBox").should("be.visible");
      });
    });
    cy.wait(750);
    cy.compareSnapshot("placement", 0.3);
  });

  it("takes a picture of the schedule page", () => {
    cy.iframe("#pageContent").within(() => {
      cy.get("#Tab").contains("Schedule").click();
      cy.iframe("#content").within(() => {
        cy.get("#TopBox").should("be.visible");
      });
    });
    cy.wait(750);
    cy.compareSnapshot("schedule", 0.3);
  });

  it("takes a picture of the documents page", () => {
    cy.iframe("#pageContent").within(() => {
      cy.get("#Tab").contains("Documents").click();
      cy.iframe("#content").within(() => {
        cy.get("#TopBox").should("be.visible");
      });
    });
    cy.wait(750);
    cy.compareSnapshot("documents", 0.3);
  });

  it("takes a picture of the farm reports page", () => {
    cy.iframe("#pageContent").within(() => {
      cy.get("#Tab").contains("Reports").click();
      cy.iframe("#content").within(() => {
        cy.get("#TopBox").should("be.visible");
        //todo: resolve top box DOM element and find better way to wait
        cy.wait(5000);
        //cy.get("TopBox").should("contain", "#options");
      });
    });
    cy.wait(750);
    cy.compareSnapshot("farmReports", 0.3);
  });
  //end of describe scope
});

//end of file
