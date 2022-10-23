import {search} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on the landing page", function () {
    beforeEach(function () {
        cy.visit('/')

    });
     it("search - I Should be able to click search button", function () {
         cy.get(search.searchField).click()
         cy.get(search.searchField).type(search.searchText)
         cy.get(search.searchBtn).click()
         cy.get(search.popupAds).click()
         cy.get(search.appleiphone13FieldBtn).click()
         

      


      
    
    })
  });