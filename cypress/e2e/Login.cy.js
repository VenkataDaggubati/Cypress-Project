describe('Login Function', () => {
    it('verify title', () => {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq','Swag Labs')

        cy.wait(3000)
        cy.get("[name='user-name']").type("problem_user") //enter username
        cy.get("[name='password']").type("secret_sauce") //enter password
        cy.get("[id='login-button']").click() //Click login button

    })
    
    })
