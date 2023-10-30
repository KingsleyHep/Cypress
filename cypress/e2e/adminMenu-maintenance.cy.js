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
  //todo: Maintenance options
  it("should take pictures of the maintenance page options", () => {
    //farm
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/f_farm_sel1.asp?mode=F"]')
          .click();
      });
    cy.compareSnapshot("farms maintenance on load", 0.3);
    //click search
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[name="but_search"]').click();
      });
    //screenshot results
    cy.compareSnapshot("farms maintenance on search", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });
    //house maintenance
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/HouseMaintenance.aspx"]')
          .click();
      });
    cy.compareSnapshot("houses maintenance on load", 0.3);
    //click farm button
    //todo: uncomment to test select farm
    // cy.get("#pageContent")
    //   .its("0.contentDocument")
    //   .its("body")
    //   .find('[name="form1"]')
    //   .then((body) => {
    //     cy.wrap(body).find("#FarmCode").click();
    //   });
    //todo: select a farm
    //?how to navigate to farm selection popup on this screen
    // cy.get("#statusDisplay").should("exist");
    // cy.get("#FarmerDisplay").should("exist");
    //todo take a screenshot after loading a farm
    //cy.compareSnapshot("house maintenance after loading a farm", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });
    //flock
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/f_farm_sel1.asp?mode=C"]')
          .click();
      });
    cy.compareSnapshot("flock maintenance on load", 0.3);
    //click search
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[name="but_search"]').click();
      });
    //take screenshot
    cy.compareSnapshot("flock maintenance on search", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });

    //bird type maintenance
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/f_Btyp_maint.asp"]')
          .click();
      });
    cy.compareSnapshot("bird type maintenance on load", 0.3);
    //click search
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="USearch"]').click();
      });
    //take screenshot
    cy.compareSnapshot("bird type maintenance on search", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });

    //group codes
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/f_Group_maint.asp"]')
          .click();
      });
    cy.compareSnapshot("group codes maintenance on load", 0.3);
    //click search
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="USearch"]').click();
      });
    //take screenshot of search results
    cy.compareSnapshot("group codes maintenance on search", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });

    //breed codes
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/f_Breedtyp_maint.asp"]')
          .click();
      });
    cy.compareSnapshot("breed codes maintenance on load", 0.3);
    //click search
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="USearch"]').click();
      });
    //take screenshot of search results
    cy.compareSnapshot("breed codes maintenance on search", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="OM"]')
      .then((body) => {
        cy.wrap(body).find('[name="Back"]').click();
      });

    //mill
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find(
            'a[href="../shared/call_dot_net_page.asp?page=../farms/MillMaintenance.aspx"]'
          )
          .click();
      });
    cy.compareSnapshot("mill maintenance on load", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#Back").click();
      });

    //product maintenance
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find(
            'a[href="../shared/call_dot_net_page.asp?page=../farms/ProductMaint.aspx"]'
          )
          .click();
      });
    //todo: replace wait with element that is visible
    cy.wait(1500);
    cy.compareSnapshot("product maintenance on load", 0.3);
    //todo: use same fix as other pop up problem

    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#Back").click();
      });

    //product pricing
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find(
            'a[href="../shared/call_dot_net_page.asp?page=../farms/GroupProductMaint.aspx"]'
          )
          .click();
      });
    //todo: replace wait with element that is visible
    cy.wait(1800);
    cy.compareSnapshot("product pricing on load", 0.3);

    //click price dropdown
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        //todo: find a way to click and display the dropdown
        cy.wrap(body).find("#Group").should("exist");
      });
    //take screenshot of dropdowns
    cy.compareSnapshot("product pricing dropdowns", 0.3);
    //click refresh
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#Refresh").click();
      });
    //take screenshot of refresh results
    cy.compareSnapshot("product pricing refresh results", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#Back").click();
      });

    //farm types
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find(
            'a[href="../shared/call_dot_net_page.asp?page=../farms/FarmTypes.aspx"]'
          )
          .click();
      });
    //todo: replace wait with element that is visible
    cy.wait(1800);
    cy.compareSnapshot("farm types on load", 0.3);
    //click refresh
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#Refresh").click();
      });

    cy.compareSnapshot("farm types refresh results", 0.3);
    //navigate back
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#Back").click();
      });

    //templates
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find(
            'a[href="../shared/call_dot_net_page.asp?page=../farms/FarmScheduleMaintenance.aspx"]'
          )
          .click();
      });
    //todo: replace wait with element that is visible
    cy.wait(1800);
    cy.compareSnapshot("templates on load", 0.3);
    //click schedule
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="form1"]')
      .then((body) => {
        cy.wrap(body).find("#TemplateGroupPicklist").click();
      });
    cy.compareSnapshot("templates schedule on click", 0.3);
    //click back - absent
    cy.get("#DropDownContainer").within(() => {
      cy.get("#menuIconsDD").select("Farm");
    });
    cy.navigateToAdminOptions();

    //regenerate egg flow
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find(
            'a[href="../shared/call_dot_net_page.asp?page=../farms/RegenerateEntireEggFlow.aspx"]'
          )
          .click();
      });
    //todo: replace wait with element that is visible
    cy.wait(1800);
    cy.compareSnapshot("regenerate egg flow on load", 0.3);
    //logout
    //cy.logout();
  });

  //end of describe scope
});
