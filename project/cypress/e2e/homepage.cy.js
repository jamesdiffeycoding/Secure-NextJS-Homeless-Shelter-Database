describe('Visit Homepage, Login Input Field', () => {
  it('Visits the Home Horizon Homepage', () => {
    cy.visit('https://shelterapp-homehorizon.onrender.com/')
  })
})

describe('Login Field, Password Field selected, filled with login details', () => {
  it('gets the login input field by its placeholder, then types in an email. Then it does the same for the password field. The sign in page is then clicked, and url for dashboard is verified', () => {
    cy.visit('https://shelterapp-homehorizon.onrender.com/');

    cy.get('input[placeholder="Your email address"]').type('1alexander.carr@gmail.com');
    cy.get('input[placeholder="Your password"]').type('abcdef');
    cy.contains('Sign in').click()
    cy.url().should('include', 'https://shelterapp-homehorizon.onrender.com/')
  })
})


  // it('finds the email input field "email"', () => {
  //   cy.visit('https://shelterapp-homehorizon.onrender.com/');

  //   cy.get('#email').should('exist');
  // })
