describe('Login Function', () => {
    it('verify title', () => {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq','Swag Labs')

        cy.wait(3000)
        cy.get("[name='user-name']").type("problem_user") //enter username
        cy.get("[name='password']").type("secret_") //enter password
        cy.get("[id='login-button']").click() //Click login button

    
        let expName="Epic sadface: Username and password do not match any user in this service"; //verify error message
        cy.get("[data-test='error']").then((x)=>{
          let actName=x.text()
          assert.equal(actName,expName)
        })
        
    })
    })