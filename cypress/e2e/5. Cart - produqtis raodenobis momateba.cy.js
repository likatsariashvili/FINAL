
   // შეამოწმე კალათაში ისრების გამოყენებით რაოდენობის გაზრდის დროს ჯამური რაოდენობა სწორად იცვლება და პროდუქტების ჯამური თანხა სწორად კალკულირდება


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')


     // მთავარი გვერდიდზე კატეგორიების ღილაკზე დაჭერა
     cy.get('.popmenu-burger > .burger-span').click()
     //ძაღების კატეგორიიდან საკვების ქვეკატეგორიის არჩევა
     cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click()
     cy.get('.cat-down.active > .category-holder > :nth-child(1) > .category-drop-title').click()
     cy.get('.active > :nth-child(8) > .category-drop-viewall').click()
     //პროდუქტების სიიდან პროდუქტის არჩევა და კალათაში დამატება
     cy.get(':nth-child(1) > .price-cart > .product-cart').click()
    //ზედა მარჯვენა კუთხეში კალათის ღილაკზე დაჭერა
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
    //დამატებული პროდუქტის შემოწმება: ფოტო, დასახელება, ფასი, id, მომატების/დაკლების ღილაკები
    //cy.get('.cart-item').should("be.visible")
    cy.get('.cart-img').should("be.visible")
    cy.get('.productCode').should("be.visible")
    cy.get('[href="https://testzootopia.loremipsum.ge/ka/product/1537-Bosch-HPC-PLUS-Adult-Ostrich-&-Potato-12,5-kg"] > h2').should("be.visible")
    cy.get('.price-p').should("have.text", '\n                                27 ₾\n                            ')
    cy.get('.minus').should("be.visible")
    cy.get('.plus').should("be.visible")
  // პროდუქტის ზედა მარჯვენა კუთხეში წაშლის ღილაკიზე დაჭერა და რაოდენობის 5-მდე გაზრდა
  cy.get('.plus').click()
  cy.get('.plus').click()
  cy.get('.plus').click()
  cy.get('.plus').click()
  // პროდუქტის რაოდენობა უნდა იყოს 5. ჯამური თანხა წარმატებით გაიზარდა და გახდა 22.5
  // cy.get('.spinner > input').should("contain", "5")
  cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > #cart-items-count').should("have.text", "5")
  cy.get('.price-p').should("have.text", "135 ₾")
  //cy.contains("კალათა ცარიელია").should("be.visible")*/
  })
})