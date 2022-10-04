//I tried by adding the configurations directly in the cypress.config.ts and tsconfig.json in this version instead of creating one inside of cypress
// I am not seeing the same problem as before with the 'root' but a different one
import 'cypress-react-selector';
describe('empty spec', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
    cy.waitForReact()
  })
  it('passes', () => {
    cy.react('Title', {props: {title: 'Hello World'}}).should('have.text', 'Hello World')
  })
})