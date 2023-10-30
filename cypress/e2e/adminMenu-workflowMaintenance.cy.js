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
describe("visual regression tests admin pages", () => {
  //todo: workflow maintenance
  it("should take pictures of the workflow maintenance page options", () => {
    //lists
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find(
            'a[href="../shared/call_dot_net_page.asp?page=../canvas/CanvasListMaintenance.aspx"]'
          )
          .click();
      });
    //todo: replace wait with element that is visible
    cy.wait(1800);
    cy.compareSnapshot("list maintenance on load", 0.3);
    //click list
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#List").click();
      });
    cy.compareSnapshot("list maintenance on search", 0.3);
  });

  //end of describe scope
});
