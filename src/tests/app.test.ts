describe('App', () => {
  it('The App must be exposed on port 8080', async () => {
    const port = await (global as any).environment
      .getContainer('app')
      .getMappedPort(3000)
    expect(port).toBe(3000)
  })
})
