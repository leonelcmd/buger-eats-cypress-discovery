
describe('homepage', ()=> {
    it(' app deve estar online', ()=>{
        cy.viewport(1280, 780)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') 
    })
})