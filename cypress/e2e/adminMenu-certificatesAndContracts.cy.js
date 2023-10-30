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
describe("visual regression tests admin pages - certificates and contracts", () => {
  //todo: certificates and contracts
  it("should take pictures of the certificates and contracts page options", () => {
    //certificate types
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/CertificateMaintenance.aspx?"]')
          .click();
      });
    //todo: replace wait with element that is visible
    cy.wait(1800);
    cy.compareSnapshot("certificate types on load", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#BackBTN").click();
      });
    //!begin here
    //farm certificates
    //contract types
  });

  //end of describe scope
});
