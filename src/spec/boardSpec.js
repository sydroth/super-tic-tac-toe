describe("Tic-Tac-Toe Board", function() {
  it("initializes correctly with given id", function() {
    let b = new Board(10)
    expect(b.board).toEqual('.........'.split(''))
    expect(b.id).toEqual(10)
  })
})