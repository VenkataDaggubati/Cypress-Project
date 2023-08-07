describe('Login Function', () => {
    it('verify title', () => {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq','Swag Labs')

        cy.wait(3000)
        cy.get("[name='user-name']").type("standard_user") //enter username
        cy.get("[name='password']").type("secret_sauce") //enter password
        cy.get("[id='login-button']").click() //Click login button

         cy.get("[id='add-to-cart-sauce-labs-bike-light']").click() //add item to cart
         cy.get("[class='shopping_cart_link']").click() //click on cart
         cy.get("[id='checkout']").click() // click on checkout

         cy.get("[id='first-name']").type("Venky")// enter first name
         cy.get("[name='lastName']").type("Daggu") // enter last name
         cy.get("[id='postal-code']").type("SE280GH") // enter zipcode
         cy.get("[id='continue']").click() // click on continue
         cy.get("[id='finish']").click() // click on continue

         let expName="Checkout: Complete!"; //confirm the order
        cy.get("[class='title']").then((x)=>{
          let actName=x.text()
          assert.equal(actName,expName)
    })
})
    })