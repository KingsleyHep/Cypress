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

//! fix/replace with workaround or as selectAnyFarm
Cypress.Commands.add("navigateToFarmReports", () => {
  cy.iframe("#pageContent").within(() => {
    cy.frameLoaded("iframe#content");
    cy.get("#Tab").contains("Reports").click();
    cy.frameLoaded("iframe#content");
  });
});

//todo: fix element traversal
Cypress.Commands.add("navigateToAccountsReports", () => {
  cy.get("#DropDownContainer").within(() => {
    cy.get("#menuIconsDD").select("Accounts");
  });

  cy.iframe("#pageContent").within(() => {
    cy.get("#Tab").within(() => {
      //cy.get("#Reports").trigger("click");
      cy.get("#Reports").should("be.visible");
      cy.get("#Reports").within(() => {
        cy.get("#ReportsUrl").should("exist"); //.trigger("click");
        cy.get("#ReportsUrl").should("be.visible");
      });

      //cy.get("td#Reports").trigger("click");
      //cy.get('td[id="Reports"]').trigger("click");
      //cy.get("td.centreTab.nonselectedTab").trigger("click");
    });
  });
});

Cypress.Commands.add("navigateToAdminOptions", () => {
  cy.get("#DropDownContainer").within(() => {
    cy.get("#menuIconsDD").select("Admin");
  });
});

Cypress.Commands.add("getBody", (docId) => {
  cy.get(docId).its("0.contentDocument").its("body");
});
