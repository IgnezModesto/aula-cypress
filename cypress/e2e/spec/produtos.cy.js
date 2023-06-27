/// <reference types = "cypress"/>

describe('Funcionalidade de Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            .eq(3)
            .click()
    });

    
    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 5

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

it('Deve adicionar produtos ao carrinho - Usando comandos customizados', () => {
    cy.addProdutos('Ariel Roll Sleeve Sweatshirt' , 'XS' , 'Blue' , 3)
});









});