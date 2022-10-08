/// <reference types="cypress" />

describe('Teste para empresa VR Beneficios', ()=>{
    it('Quero navegar no site da empresa', ()=>{
     cy.visit('https://www.vr.com.br')
     cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_quickAcceptTerm').click()
     cy.get(':nth-child(3) > .vr-quick-navigation__link > .vr-quick-navigation__label').click()
     cy.get('.vr-hero__actions > .vr-button--negative').click()


     

     
    
    })
})