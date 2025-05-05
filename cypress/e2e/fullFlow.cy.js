describe('Full App Flow', () => {
    it('Registers, logs in, and views dashboard', () => {
        cy.visit('http://localhost:5173/register');


        cy.get('input[placeholder="Enter your name"]').type('Cypress User');
        cy.get('input[placeholder="Enter your email"]').type('cypress@test.com');
        cy.get('input[placeholder="Create a password"]').type('password123');
        cy.get('button').contains(/register/i).click();


        cy.visit('http://localhost:5173/login');
        cy.get('input[placeholder="Enter your email"]').type('cypress@test.com');
        cy.get('input[placeholder="Enter your password"]').type('password123');
        cy.get('button').contains(/login/i).click();


        cy.contains(/dashboard/i);
    });
});
