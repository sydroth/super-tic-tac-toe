describe("Example Spec", function() {
  it("confirms that 1 === 1", function() {
    b = new Board()
    expect(1).toEqual(1)
  })

  it("fails for 1 === 2", function() {
    expect(1).toEqual(2)
  })
})