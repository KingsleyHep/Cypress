/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
});

//! all of farm menu needs refactored
describe.only("visual regression tests for farm navigation bar options", () => {
  it("takes a picture of the dashboard page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("dashboard", 0.2);
        });
      });
    });
  });

  it("takes a picture of the group page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Group").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("group", 0.2);
        });
      });
    });
  });

  it("takes a picture of the production page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Production").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("production", 0.2);
        });
      });
    });
  });

  it("takes a picture of the schedule page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Schedule").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("schedule", 0.2);
        });
      });
    });
  });

  it("takes a picture of the documents page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Documents").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("documents", 0.2);
        });
      });
    });
  });

  it("takes a picture of the farm reports page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Reports").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("reports", 0.2);
        });
      });
    });
  });
  //end of describe scope
});
