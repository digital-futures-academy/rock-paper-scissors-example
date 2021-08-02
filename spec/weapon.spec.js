const Weapon = require('../src/weapon.js')

describe('Weapon', function() {
  let weapon

  describe('supports random types', function() {
    it('chooses a random type when no args passed', function() {
      spyOn(Math, 'random').and.returnValue(0.2)
      const weapon = new Weapon()
      expect(weapon.type).toEqual('paper')
    })

    it('chooses a random type when no args passed', function() {
      spyOn(Math, 'random').and.returnValue(0.5)
      const weapon = new Weapon()
      expect(weapon.type).toEqual('rock')
    })

    it('chooses a random type when no args passed', function() {
      spyOn(Math, 'random').and.returnValue(0.7)
      const weapon = new Weapon()
      expect(weapon.type).toEqual('scissors')
    })
  })

  describe('scissors', function() {
    it('wins against paper', function() {
      const scissors = new Weapon('scissors')
      const paper = new Weapon('paper')
      expect(scissors.against(paper)).toEqual('win')
    })

    it('loses against rock', function() {
      const scissors = new Weapon('scissors')
      const rock = new Weapon('rock')
      expect(scissors.against(rock)).toEqual('lose')
    })

    it('draws against scissors', function() {
      const scissors = new Weapon('scissors')
      const scissors2 = new Weapon('scissors')
      expect(scissors.against(scissors2)).toEqual('draw')
    })
  })

  describe('paper', function() {
    it('draws against paper', function() {
      const paper = new Weapon('paper')
      const paper2 = new Weapon('paper')
      expect(paper.against(paper2)).toEqual('draw')
    })

    it('loses against scissors', function() {
      const paper = new Weapon('paper')
      const scissors = new Weapon('scissors')
      expect(paper.against(scissors)).toEqual('lose')
    })

    it('wins against rock', function() {
      const paper = new Weapon('paper')
      const rock = new Weapon('rock')
      expect(paper.against(rock)).toEqual('win')
    })
  })

  describe('rock', function() {
    it('loses against paper', function() {
      const rock = new Weapon('rock')
      const paper = new Weapon('paper')
      expect(rock.against(paper)).toEqual('lose')
    })

    it('wins against scissors', function() {
      const rock = new Weapon('rock')
      const scissors = new Weapon('scissors')
      expect(rock.against(scissors)).toEqual('win')
    })

    it('draws against rock', function() {
      const rock = new Weapon('rock')
      const rock2 = new Weapon('rock')
      expect(rock.against(rock2)).toEqual('draw')
    })
  })
})
