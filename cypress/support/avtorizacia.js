Cypress.Commands.add('log', (Email1, Password1) => { 

        
        cy.get('.menu-pop > .rprof').click()
        //რეგისტრირებული "ელ.ფოსტის" ველის შევსება
        cy.get(':nth-child(5) > .imail').type(Email1)
        //ველის "პაროლი"-ს შევსება
        cy.get('.ipass').type(Password1)
        //ღილაკზე "ავტორიზაცია" დაჭერა
        cy.get('.avtorization > .input-shablon > .form-button').click()
        /* ჩანს ღილაკი "პროფილი" */
        cy.get('.menu-pop > .iprof').should("be.visible")
        })