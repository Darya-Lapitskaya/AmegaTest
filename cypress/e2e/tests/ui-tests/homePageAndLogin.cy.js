describe("home page", () => {

  //to be improved: put selectors in a separate file
  const navBarTradingTab = '[data-cy="nav_trading"]';
  const navBarKnowledge = '[data-cy="nav_knowledge_hub"]';
  const navBarPartnership = '[data-cy="nav_partnership"]';
  const navBarCompany = '[data-cy="nav_company"]';
  const navBarForex = 'div[data-cy="nav_trading"] ul.sc-7c78dd2d-5.lmMpyY li a';
  const signInBtn = '[data-cy="sign_in"]';
  const emailField = 'input[name="email"]';
  const passwordField = 'input[name="password"]';
  const signInSubmitBtn = 'input[data-testid="test-submit"]';

  beforeEach(() => {
    cy.visit('/');
  })

  it("check navbar elements om main page", () => {
    cy.get(navBarTradingTab).contains(
      "Trading"
    );
    cy.get(navBarKnowledge).contains(
      "Knowledge hub"
    );
    cy.get(navBarPartnership).contains(
      "Partnership"
    );

    cy.get(navBarCompany).contains(
      "Company"
    );
  })

  it("check Forex page is opened", () => {

    cy.get(navBarForex).contains('Forex').click({ force: true });
    cy.url().should('include', '/forex');
  })


  it(" successful sigh in ", () => {

    cy.get(signInBtn).click();
    cy.get(emailField).type('d.kov0809@gmail.com'); //to be improved: put credentials in a different place, do not use them here directly 
    cy.get(passwordField).type('$Admin999');
    cy.get(signInSubmitBtn).click();
    cy.url().should('eq', 'https://client.amega.finance/');

  });

})
