/* eslint-disable indent */
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('single pokemon page can be navigated to from front page',
    function () {
      cy.visit('http://localhost:5000')
      cy.contains('ivysaur').click()
      cy.contains('chlorophyll')
      cy.contains('overgrow')
    })
})
