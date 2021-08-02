const playUntil = (str, choice) => {
  cy.get('#game-result').then($result => {
    if ($result.text() !== str) {
      cy.get("#next-link").click()
      cy.get(`#choice-${choice}`).click()
      playUntil(str, choice)
    }
  })
}

describe("As rock (recursive loop)", function() {
  beforeEach(function() {
    cy.visit('/')
    cy.get('#player1-name-textbox').type('Edward')
    cy.get('#name-submit').click()
    cy.get('#choice-rock').click()
  })

  it('clicks until you win', function() {
    playUntil("You won!", "rock")
    cy.get('#game-result').should('contain', "You won!")
    cy.get('body').should('contain', 'Computer chose scissors')
  })

  it('clicks until you draw', function() {
    playUntil("You drew!", "rock")
    cy.get('#game-result').should('contain', "You drew!")
    cy.get('body').should('contain', 'Computer chose rock')
  })

  it('clicks until you lose', function() {
    playUntil("You lost!", "rock")
    cy.get('#game-result').should('contain', "You lost!")
    cy.get('body').should('contain', 'Computer chose paper')
  })
})

describe("As paper (recursive loop)", function() {
  beforeEach(function() {
    cy.visit('/')
    cy.get('#player1-name-textbox').type('Edward')
    cy.get('#name-submit').click()
    cy.get('#choice-paper').click()
  })

  it('clicks until you win', function() {
    playUntil("You won!", "paper")
    cy.get('#game-result').should('contain', "You won!")
    cy.get('body').should('contain', 'Computer chose rock')
  })

  it('clicks until you draw', function() {
    playUntil("You drew!", "paper")
    cy.get('#game-result').should('contain', "You drew!")
    cy.get('body').should('contain', 'Computer chose paper')
  })

  it('clicks until you lose', function() {
    playUntil("You lost!", "paper")
    cy.get('#game-result').should('contain', "You lost!")
    cy.get('body').should('contain', 'Computer chose scissors')
  })
})

describe("As scissors (recursive loop)", function() {
  beforeEach(function() {
    cy.visit('/')
    cy.get('#player1-name-textbox').type('Edward')
    cy.get('#name-submit').click()
    cy.get('#choice-scissors').click()
  })

  it('clicks until you win', function() {
    playUntil("You won!", "scissors")
    cy.get('#game-result').should('contain', "You won!")
    cy.get('body').should('contain', 'Computer chose paper')
  })

  it('clicks until you draw', function() {
    playUntil("You drew!", "scissors")
    cy.get('#game-result').should('contain', "You drew!")
    cy.get('body').should('contain', 'Computer chose scissors')
  })

  it('clicks until you lose', function() {
    playUntil("You lost!", "scissors")
    cy.get('#game-result').should('contain', "You lost!")
    cy.get('body').should('contain', 'Computer chose rock')
  })
})
