Cypress.Commands.add('login', (Name, Email, Id, Phone, Password) => { 
    let random=Math.round((Math.random()*1000))
    //საიტზე შესვლა
    //მთავარ გვვერდზე ზედა მარჯვენა კუთხეში ღილაკზე "შესვლა" დაჭერა
    cy.get('.menu-pop > .rprof').click()
    //ავტორიზაციის ფანჯარაზე ღილაკზე "გაიარეთ რეგისტრაცია" დაჭერა
    cy.get('.input-shablon > p > a').click()
    //ველის "სახელი გვარი" შევსება 
    cy.get(':nth-child(1) > .ismile').type(Name)
    //ველის "ელ.ფოსტა" შევსება
    cy.get(':nth-child(2) > .imail').type(random+Email)
    //ველის "პირადი ნომერი" შევსება
    cy.get('.ipir').type(random+Id)
    //ველის "ტელ" შევსება
    cy.get(':nth-child(4) > .itel').type(random+Phone)
    //ველის "პაროლი" შევსება
    cy.get(':nth-child(5) > .ipass').type(Password)
    //ველის "პაროლის გამეორება" შევსება
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(Password)
    //ღილაკის "ვეთანხმები წესებსა და პირობებს" მონიშვნა
    cy.get('#etx').click({force: true})
    //რეგისტრაციის ღილაკზე დაჭერა
    cy.get('.regsub').click()
    //ღილაკზე "go home" დაჭერა
    cy.get('.bg-transparent').click()
    //ჩანს ტექსტი "ჩემი გვერდი"
    cy.get('.menu-pop > .iprof').should("be.visible")
    //პროფილის გვერდზე გადასვლა
    cy.get('.profile').click()


 })
