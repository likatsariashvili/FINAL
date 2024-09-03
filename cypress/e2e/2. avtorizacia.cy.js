import data  from "../../../cypress/fixtures/avtorizacia.json"

//ავტორიზაცია რეგისტრირებული მომხმარებლით

describe('template spec 1', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
//ავტორიზაცია რეგისტრირებული მომხმარებლით


cy.fixture("avtorizacia.json").then((Data)=>{
cy.log(Data.Email1, Data.Password1);

})
  })
})

