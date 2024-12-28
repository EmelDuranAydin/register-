import { errorMessages } from "../../src/components/register";
describe('Register Page', () => {
  beforeEach(()=>{
    cy.visit('http://127.0.0.1:5173');
  })
  describe('Error Messages', () => {
  it('name input throws error for 2 chars', () => {
    //cy.visit('http://localhost:5173/');
    cy.get("[data-cy='ad-input']").type("em");
    cy.contains(errorMessages.ad);
  });
  it('surname input throws error for 2 chars', () => {
    //cy.visit('http://localhost:5173/');
    cy.get("[data-cy='soyad-input']").type("ay");
    cy.contains(errorMessages.soyad);
});
it('Email input throws error for emel@wit.', () => {
  //cy.visit('http://localhost:5173/');
  cy.get("[data-cy='email-input']").type("emel@wit.");
  cy.contains(errorMessages.email);
});
it('Password input throws error for 1234', () => {
  //cy.visit('http://localhost:5173/');
  cy.get("[data-cy='password-input']").type("1234");
  cy.contains(errorMessages.password);
});
it('button is disabled for unvalidated ', () => {
  //cy.visit('http://localhost:5173/');
  cy.get("[data-cy='password-input']").type("1234");
  cy.get("[data-cy='submit-button']").should("be.disabled");
});
});
describe('Form input validated', () => {
  it('button enabled for validated inputs', () => {
    //cy.visit('http://localhost:5173/');
    cy.get("[data-cy='ad-input']").type("Emel");
    cy.get("[data-cy='soyad-input']").type("Aydin");
    cy.get("[data-cy='email-input']").type("emel@wit.com.tr");
    cy.get("[data-cy='password-input']").type("1234Aa**");
    cy.get("[data-cy='submit-button']").should("not.be.disabled");
  }); 
});
});