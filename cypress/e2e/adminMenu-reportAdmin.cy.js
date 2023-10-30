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

  //!  start of should take pictures the user admin page options

  //todo: report admin options
  it("should take pictures of the report admin page options", () => {
    //PSR Standards
    //cy.get("#pageContent").should("exist", { timeout: 40000 });
    cy.wait(1500);
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/f_std_maint.asp?fgrp=PSR"]')
          .click();
      });
    cy.compareSnapshot("PSR Standards on load", 0.3);
    //click search
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[name="search"]').click();
      });
    //screenshot results
    cy.wait(1500);
    cy.compareSnapshot("PSR Standards search results", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });
    //PSL Standards
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/f_std_maint.asp?fgrp=PSL"]')
          .click();
      });
    cy.compareSnapshot("PSL Standards on load", 0.3);
    //click search
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[value="Search"]').click();
      });
    //screenshot results
    cy.wait(1500);
    cy.compareSnapshot("PSL Standards search results", 0.3);

    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });

    //Egg Weight Percentages
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/EggWeightStandardMaintenance.aspx?"]')
          .click();
      });
    cy.wait(1500);
    cy.compareSnapshot("egg weight percentages on load", 0.4);
    //click refresh
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#Refresh").click();
      });
    //screenshot results
    //todo refresh image needs a reliable element to wait for
    cy.compareSnapshot("egg weight refresh results", 0.4);

    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });

    //Standard Types
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/f_std_type_maint.asp?"]')
          .click();
      });
    cy.compareSnapshot("standard types maintenance on load", 0.4);
    //click search
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="USearch"]').click();
      });
    //screenshot results

    cy.compareSnapshot("standard types maintenance search results", 0.4);

    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });

    //end of report admin page options
  });

  //end of describe scope
});
