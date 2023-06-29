/// <reference types = "cypress"/>
import enderecoPage from "../../support/page-objects/endereco.page";
const dadosEndereco = require('../../fixtures/endereco.json');

describe('Funcionalidades endereços - Entrega e Faturamento', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario , dados.senha)
        })
        
        
    });

    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento ('Gilson', 'Modesto', 'FIAT', 'Brasil', 'Rua Caobi', '15', 'Duque de Caxias', 'Rio de Janeiro', '21210000', '988884444', 'email@fiat.com')

        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento (dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)

        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    });




});





