describe('RPS example', function() {
  it('shows a lovely greeting', function() {
    cy.visit('/')
    cy.contains("hi, mse-2103-a!")
    cy.contains("What's your name?")
  })

  it('shows an input field and button for name', function() {
    cy.visit('/')
    cy.get('#player1-name-textbox').type('Edward')
    cy.get('#name-submit').click()
    cy.contains("Current Player: Edward!")
    cy.url().should('include', '/game')
  })

  it('plays the game as rock', function() {
    cy.visit('/')
    cy.get('#player1-name-textbox').type('Edward')
    cy.get('#name-submit').click()
    cy.get('#choice-rock').click()
    cy.get('body').then($body => {
      if ($body.text().includes('Computer chose rock')) {
        cy.get('#game-result').should('contain', "You drew!")
      } else if ($body.text().includes('Computer chose paper')) {
        cy.get('#game-result').should('contain', "You lost!")
      } else {
        cy.get('#game-result').should('contain', "You won!")
      }
    })
  })

  it('plays the game as paper', function() {
    cy.visit('/')
    cy.get('#player1-name-textbox').type('Edward')
    cy.get('#name-submit').click()
    cy.get('#choice-paper').click()
    cy.get('body').then($body => {
      if ($body.text().includes('Computer chose rock')) {
        cy.get('#game-result').should('contain', "You won!")
      } else if ($body.text().includes('Computer chose paper')) {
        cy.get('#game-result').should('contain', "You drew!")
      } else {
        cy.get('#game-result').should('contain', "You lost!")
      }
    })
  })

  it('plays the game as scissors', function() {
    cy.visit('/')
    cy.get('#player1-name-textbox').type('Edward')
    cy.get('#name-submit').click()
    cy.get('#choice-scissors').click()
    cy.get('body').then($body => {
      if ($body.text().includes('Computer chose rock')) {
        cy.get('#game-result').should('contain', "You lost!")
      } else if ($body.text().includes('Computer chose paper')) {
        cy.get('#game-result').should('contain', "You won!")
      } else {
        cy.get('#game-result').should('contain', "You drew!")
      }
    })
  })
})
