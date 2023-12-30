// // cypress/integration/your_test_spec.js
// describe('Dashboard', () => {
//     before(() => {
//       cy.signInDashboard('/dashboard'); // Replace with the actual dashboard path
//     });
//     it('should have the expected behavior', () => {
//       // Your test assertions and actions go here
//       // For example:
//       // cy.get('.dashboard-title').should('contain', 'Welcome to the Dashboard');
//     });
//   });

describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    })
    // it('does something on a secured page', function () {
    //     const { username, password } = this.currentUser
    //     cy.login(username, password)
    // In your spec file (e.g., cypress/integration/your_test_spec.js)

it('does something on a secured page', function () {
    const username = 'mdjasimrchowdhury@gmail.com';
    const password = '123456';
  
    // Use the cy.login command with the specific username and password
    cy.login(username, password);
  
    // Now you are logged in, and you can perform the rest of your test
    // For example, interact with elements on the secured page
    // cy.get('.some-element').click();
  
    // ...rest of your test
  });
  
    })