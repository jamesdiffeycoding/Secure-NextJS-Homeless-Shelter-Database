describe('home page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })
   it('the h1 contains the correct text', () => {
    cy.get("[data-test='hero-heading']").should("exist").contains("Home Horizon")
  })
  
  //  it.only('it allows users to write their email address', () => {
  //   cy.get("email")
  // })


})

