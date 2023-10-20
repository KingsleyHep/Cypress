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

  it("should take pictures the user admin page options", () => {
    //! - user admin menu options
    cy.get("#pageContent")
      .its("0.contentDocument")
      .its("body")
      //located by id on main sys admin page
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
      //located by id on user admin page
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
      //located by id on user admin page
      .its("body")
      .find(".AdminOpts")
      .then((body) => {
        //todo: fix to use href
        cy.wrap(body).find("td").contains("Group Maintenance").click();
      });
    //take screenshot on load
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
  });

  //todo: report admin options
  it("should take pictures of the report admin page options", () => {
    //PSR Standards
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
    // //click product selection button
    // cy.get("#pageContent")
    //   .its("0.contentDocument")
    //   .its("body")
    //   .find('[name="form1"]')
    //   .then((body) => {
    //     cy.wrap(body).find("#Product").click();
    //   });
    // cy.compareSnapshot("product maintenance product selection", 0.3);

    // //close product selection popup
    // cy.get(
    //   ".ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable"
    // ).should("exist");
    // cy.get(
    //   ".ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-draggable.ui-resizable"
    // ).within(() => {
    //   cy.get('a[href="#"]').click();
    // });

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
    cy.logout();
  });

  //todo: workflow maintenance
  it("should take pictures of the workflow maintenance page options", () => {
    //lists
  });
  //todo: certificates and contracts
  it("should take pictures of the certificates and contracts page options", () => {
    //certificate types
    //farm certificates
    //contract types
  });
  //end of describe scope
});
