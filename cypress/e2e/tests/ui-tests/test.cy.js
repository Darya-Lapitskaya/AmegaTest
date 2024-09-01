
const url = 'https://www.amega.finance/'

//const cypress = require("cypress")


describe("home page", () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit(url)
  })


  it("check navbar elements", () => {
    cy.get('[data-cy="nav_trading"]').contains(
      "Trading"
    );
    cy.get('[data-cy="nav_knowledge_hub"]').contains(
      "Knowledge hub"
    );

    cy.get('[data-cy="nav_partnership"]').contains(
      "Partnership"
    );
    
    cy.get('[data-cy="nav_company"]').contains(
      "Company"
    );
  })

  it("check Forex page is opened", () => {
  
    cy.get('div[data-cy="nav_trading"] ul.sc-7c78dd2d-5.lmMpyY li a').contains('Forex').click( {force: true} );
    cy.url().should('include', '/forex');
  })


  it("open sigh in page", () => {

    cy.get('[data-cy="sign_in"]').click();
    cy.get('input[name="email"]').type('d.kov0809@gmail.com');
    cy.get('input[name="password"]').type('$Admin93');
    cy.get('input[data-testid="test-submit"]').click();
    cy.url().should('eq', 'https://client.amega.finance/');
    //cy.getAllSessionStorage();
 
    }); 
   // add crear session after all cy.clearAllSessionStorage();
   //cy.clearAllSessionStorage();
  

    

  })

  


  /*

  it("navigate to each page", () => {
    cy.get("sc-9007b1a1-1 dvzNQS").should.be
  })


  it("sign in if logged in", () => {
    cy.get("sc-9007b1a1-1 dvzNQS").should.be
  })


  it("sign in if logged out", () => {
    cy.get("sc-9007b1a1-1 dvzNQS").should.be
  })


  it("click tabs in client app", () => {
    cy.get("sc-9007b1a1-1 dvzNQS").should.be
  })

  it("show cashback previous week", () => {
    cy.get("sc-9007b1a1-1 dvzNQS").should.be
  })


  it("sign out", () => {
    cy.get("sc-9007b1a1-1 dvzNQS").should.be
  })
    */

