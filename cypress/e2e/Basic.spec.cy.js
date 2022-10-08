/// <reference types="cypress" />


describe('Cypress basics', ()=>{

    it.only('Shoud visit a page and assert title', ()=>{

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        //cy.title = cy.title()
        //console.log(title)
cy.pause()
        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .should('contain', 'Campo').debug()

    })

    it.only('Shoud find and interact with an element', ()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple')
        .should('have.value', 'Obrigado!')


    })
})