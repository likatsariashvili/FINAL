//ერთი პროდუქტის დამატება კალათაში

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')


   // მთავარი გვერდიდზე მეინიუს აიქონ ღილაკზე დაჭერა
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
  cy.get('.price-p').should("be.visible")
  cy.get('.minus').should("be.visible")
  cy.get('.plus').should("be.visible")

  })
})