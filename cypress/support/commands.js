import "cypress-iframe";
//Login function to be used in tests
Cypress.Commands.add("login", (username, password) => {
  cy.get("#UserName").type(username);
  cy.get("#Password").type(password);
  cy.get("#LoginBtn").click();
});

Cypress.Commands.add("logout", () => {
  cy.get("select").eq(0).should("be.visible");
  cy.get("select").eq(0).select("Log Out", { force: true });
});

//! use when pop up is present
//todo: make selecting refactor using iFrame
// Cypress.Commands.add("selectAnyFarm", () => {
//   cy.get("#pageContainer").within(() => {
//     cy.get('iframe[id="pageContent"]').then(function ($iframe) {
//       const $body = $iframe.contents().find("body");
//       cy.wrap($body).within(() => {
//         cy.get('iframe[id="content"]').then(function ($innerframe) {
//           const $innerbody = $innerframe.contents().find("body");
//           cy.wrap($innerbody).within(() => {
//             cy.get("table#FarmersList").first().click();
//           });
//         });
//       });
//     });
//   });
// });

Cypress.Commands.add("selectAnyFarm", () => {
  cy.iframe("#pageContent").within(() => {
    cy.frameLoaded("iframe#content").then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get("table#FarmersList").first().click();
      });
    });
  });
});

//!Navigates to the farm reports page
Cypress.Commands.add("navigateToFarmReports", () => {
  cy.iframe("#pageContent").within(() => {
    cy.frameLoaded("iframe#content");
    cy.get("#Tab").contains("Reports").click();
    cy.frameLoaded("iframe#content");
  });
});

//! navigates to the accounts reports page
//todo: fix element traversal
Cypress.Commands.add("navigateToAccountsReports", () => {
  cy.get("#DropDownContainer").within(() => {
    cy.get("#menuIconsDD").select("Accounts");
  });
  cy.iframe("#pageContent").within(() => {
    cy.frameLoaded("iframe#content");
    cy.get("#Tab").contains("Reports").click();
  });
});
