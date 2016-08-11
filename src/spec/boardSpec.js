describe("Tic-Tac-Toe Board", function() {
  it("initializes correctly with given id", function() {
    let b = new Board(10)
    expect(b.board).toEqual('.........'.split(''))
    expect(b.id).toEqual(10)
  })

  it('#autoPlay should return the (hard-coded for now) array', () => {
    let b = new Board()
    expect(b.autoPlay()).toEqual([8, 7, 6, 5, 4, 3, 2, 0, 1])
  })

  it('#isFull returns true when appropriate', () => {
    let b = new Board()
    b.board = 'XOXOXOXOX'
    expect(b.isFull()).toEqual(true)
  })

  it('#isFull returns false when appropriate', () => {
    let b = new Board()
    b.board = 'XOXOX.XOX'
    expect(b.isFull()).toEqual(false)
  })
})