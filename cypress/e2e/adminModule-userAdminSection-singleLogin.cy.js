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
  //todo: refactor to create let docbody update
  it("should take a picture of the admin page on load", () => {
    cy.compareSnapshot("system admin", 0.3);
  });

  //!  start of should take pictures the user admin page options
  it.only("should take pictures the user admin page options", () => {
    //user admin menu options
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          //href for user admin page
          .find('a[href="../shared/useradmin_sel.asp?action=0&usr=unitassup"]')
          .click();
      });
    cy.compareSnapshot("user administration", 0.3);

    //todo: user maintenance
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find(".AdminOpts")
      .then((body) => {
        //todo: fix to use href
        cy.wrap(body).find("td").contains("User Maintenance").click();
        //.find('a[href="../shared/usermaint.asp?action=0&amp;usr=unitassup"]');
        //.find('a[href="../shared/usermaint.asp?action=0&amp;usr=unitassup"]')
        //.click();
      });
    cy.compareSnapshot("customer user maintenance on load", 0.3);
    //click search button
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="USearch"]').click();
      });

    //take screenshote of search result
    cy.compareSnapshot("customer user maintenance search results", 0.3);
    //navigate to user maintenance using back button
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });

    //todo: group maintenance
    //navigate to group maintenance
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find(".AdminOpts")
      .then((body) => {
        //todo: fix to use href
        cy.wrap(body).find("td").contains("Group Maintenance").click();
      });
    //take screenshot on load
    cy.wait(300);
    cy.compareSnapshot("customer group maintenance on load", 0.3);
    //search doesn't change iframe painted
    //navigate to user maintenance using back button
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="GM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });
    //todo: message groups
    //navigate to group maintenance
    cy.get("#pageContent")
      .its("0.contentDocument")
      //located by id on user admin page
      .its("body")
      .find(".AdminOpts")
      .then((body) => {
        //todo: fix to use href
        cy.wrap(body).find("td").contains("Message Groups").click();
      });
    cy.compareSnapshot("message groups on load", 0.3);
    //click search button
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find("#Search").click();
      });
    cy.compareSnapshot("message groups search results", 0.3);
    //navigate to user maintenance using back button
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });

    //todo: check iFrame plugin for cypress docs
    // cy.iframe("#pageContent").get(".unitas_background").should("exist");
    // cy.enter("#pageContent").then((getiFrameBody) => {});

    //! end of should take pictures the user admin page options
  });

  //end of describe scope
});
