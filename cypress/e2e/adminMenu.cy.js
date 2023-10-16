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
    cy.get(
      'a[href="../shared/useradmin_sel.asp?action=0&amp;usr=unitassup"]'
    ).click();
    const link = document.querySelector(
      'a[href="../shared/useradmin_sel.asp?action=0&amp;usr=unitassup"]'
    );
    link.click();
    cy.get(
      'a[title="Manage the levels, group assignments and outlet access for the users in your organisation"]'
    ).click();
    const linkb = document.querySelector(
      'a[title="Manage the levels, group assignments and outlet access for the users in your organisation"]'
    );
    linkb.click();
    cy.contains("User Administration").click();
    const linkc = document.querySelector("a");
    if (linkc.textContent === "User Administration") {
      linkc.click();
    }
    cy.get('a font[color="#e8386f"]').click();
    const linkd = document.querySelector('a font[color="#e8386f"]');
    linkd.click();
    const adminOptsTable = document.getElementById("adminOpts");
    cy.wrap(adminOptsTable).should("be.visible");
    cy.compareSnapshot("userAdmin", 0.3);
    cy.iframe("#pageContent").within(() => {
      // cy.get(
      //   'a[href="../shared/useradmin_sel.asp?action=0&amp;usr=unitassup"]'
      // ).click();
      // const link = document.querySelector(
      //   'a[href="../shared/useradmin_sel.asp?action=0&amp;usr=unitassup"]'
      // );
      // link.click();
      // cy.get(
      //   'a[title="Manage the levels, group assignments and outlet access for the users in your organisation"]'
      // ).click();
      // const linkb = document.querySelector(
      //   'a[title="Manage the levels, group assignments and outlet access for the users in your organisation"]'
      // );
      // linkb.click();
      //cy.contains("User Administration").click();
      // const linkc = document.querySelector("a");
      // if (linkc.textContent === "User Administration") {
      //   linkc.click();
      // }
      // cy.get('a font[color="#e8386f"]').click();
      // const linkd = document.querySelector('a font[color="#e8386f"]');
      // linkd.click();
      // const adminOptsTable = document.getElementById("adminOpts");
      // cy.wrap(adminOptsTable).should("be.visible");
      // cy.compareSnapshot("userAdmin", 0.3);
    });
  });

  //end of describe scope
});
