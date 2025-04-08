import { 
  Given,
  When,
  Then
 } from '@badeball/cypress-cucumber-preprocessor';

class Page {
  elements = {
    button: () => cy.get('a[aria-label="Sign up"]'),
    emailInput: () => cy.get('#email')
  }
}

const page = new Page();

after(() => {
  cy.clearAllLocalStorage()
})

Given('Im on the initial page', () => {
  cy.visit('/');
});

When('I click on the button', () => {
  page.elements.button().should('exist').click();
});

Then('I navigate to the data page', () => {
  cy.url().should('include', '/signup');
});

Then ('I should see the data populating the input field', () => { 
  page.elements.emailInput().invoke('val').should('not.be.empty');
});