import register  from "../../../cypress/fixtures/register.json"

//რეგისტრაცია ყველა ველის შევსებით და ღილაკის "ვეთანხმები წესებსა და პირობებს" მონიშვნით

describe('template spec', () => {
  it('Register', () => {

    cy.visit('https://testzootopia.loremipsum.ge/ka');

    cy.fixture("register.json").then((userData)=>{
      cy.login(userData.Name, userData.Email, userData.Id, userData.Phone, userData.Password);

})

  })
})
