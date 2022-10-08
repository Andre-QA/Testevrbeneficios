/// <reference types="cypress" />

describe('Work with basic elements', ()=>{
before(()=>{

    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
})

beforeEach(()=>{
    cy.reload()

    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
})
it('Text', ()=>{
    
    cy.get('body').should('contain', 'Cuidado')
    cy.get('span').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    cy.get('.facilAchar').should('not.be.have.text', 'Amor')
})

it('Links', ()=>{
    
    cy.get('[href="#"]').click()
    cy.get('#resultado').should('have.text', 'Voltou!')

    cy.reload()

   cy.get('#resultado').should('have.not.text', 'Voltou!')
   cy.contains('Voltar').click()
   cy.get('#resultado').should('have.text', 'Voltou!')


})

it('TextFields', ()=>{

    cy.get('#formNome').type('Andre Ricardo')
    cy.get('#formNome').should('have.value', 'Andre Ricardo')
    cy.get('#elementosForm\\:sugestoes').type('TextArea')
    .should('have.value', 'TextArea')
    cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('asdfg')
    .should('have.value', 'asdfg')
    cy.get('[data-cy="dataSobrenome"]').type('Teste12345{backspace}{backspace}')
    .should('have.value', 'Teste123')

    cy.get('#elementosForm\\:sugestoes')
    .clear()
    .type('Erro{selectall}acerto', {delay: 200})
    .should('have.value', 'acerto')
})

it('RadioButton', ()=>{

    cy.get('#formSexoFem')
    .click()
    .should('be.checked')

    cy.get('#formSexoMasc').should('not.be.checked')

    cy.get("[name=formSexo]").should('have.length', 2)
})

it.only('Checkbox', ()=>{
    cy.get('#formComidaPizza')
    .click()
    .should('be.checked')

    cy.get('[name=formComidaFavorita').click({multiple: true})
    cy.get('#formComidaPizza').should('not.be.checked')
    cy.get('#formComidaVegetariana').should('be.checked')



})

it.only('Combo', ()=>{
    cy.get('[data-test="dataEscolaridade"]')
    .select('2o grau completo')
    .should('have.value', '2graucomp')


})

it.only('Combo multiplo', ()=>{
    cy.get('[data-testid="dataEsportes"]').select(['natacao', 'Corrida', 'nada'])




})

})

