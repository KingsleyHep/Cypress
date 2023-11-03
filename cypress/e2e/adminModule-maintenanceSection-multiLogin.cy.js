/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
  cy.navigateToAdminOptions();
});

//unitas_background is the class of the body element inside the iFrame pageContent
//Page is rendered with pageContainer first, then iFrame of pageContent, then and iFrame of content
describe("visual regression tests admin module - maintenance section - multiple logins", () => {
  it("should take pictures of the farm page", () => {
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
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
  });

  it("should take pictures of the house maintenance page", () => {
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
    //todo: complete navigation
    //click select farm
    //select farm
    //take screenshot of house maintenance on farm selection

    //! use solution in single login test
  });

  it("should take pictures of the flock page", () => {
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")

      .find("#AdminOpts")
      .then((body) => {
        cy.wrap(body)
          .find("td")
          .find('a[href="../farms/f_farm_sel1.asp?mode=C"]')
          .click();
      });
    cy.wait(750);
    cy.compareSnapshot("flock maintenance on load", 0.3);
    //click search
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      .find('[name="DM"]')
      .then((body) => {
        cy.wrap(body).find('[name="but_search"]').click();
      });

    cy.compareSnapshot("flock maintenance on search", 0.3);
  });

  it("should take pictures of the bird type maintenance page", () => {
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
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

    cy.compareSnapshot("bird type maintenance on search", 0.3);
  });

  it("should take pictures of the group codes page", () => {
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
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

    cy.compareSnapshot("group codes maintenance on search", 0.3);
  });

  it("should take pictures of the breed codes page", () => {
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
  });

  it("should take pictures of the mill page", () => {
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
    //todo: replace wait with element that is visible
    cy.wait(1500);
    cy.compareSnapshot("mill maintenance on load", 0.3);
  });

  it("should take pictures of the product maintenance page", () => {
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
    //todo: finish navigation
    //click product
    //screenshot proudct pop up
    //select product
    //screenshot product selection result

    //! use solution in single login test
  });

  it("should take pictures of the product pricing page", () => {
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
  });

  it("should take pictures of the farm types page", () => {
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

    cy.compareSnapshot("farm types on refresh", 0.3);
  });

  it("should take pictures of the templates page", () => {
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
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
  });

  it("should take pictures of the regenerate egg flow page", () => {
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")

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
  });

  //end of describe scope
});
