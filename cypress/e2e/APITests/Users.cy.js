const uri = 'http://localhost:3000/'
describe("User API tests", () => {
  it("POST Login User expect response 200", () => {
      const payload =  {'email': 'fake.tester@example.com',
      'password': 'Passcode'};
        cy.request({url: uri + 'api/auth/login',
        method: 'POST',
        body: payload,              
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })
  it("GET Email of user", () => {
    const endPoint = 'api/record/user/email/fake.tester@example.com'
    const url = uri + endPoint
    cy.request({ url }).then((resp) => {
      expect(resp.status).to.eq(200)
      cy.log(JSON.stringify(resp.body))
      })
  })
  it("GET user", () => {
    
    const endPoint = '/api/record/user'
    const url = uri + endPoint
    cy.request( { method: 'GET',
      url: `${url}`,
      qs : {"email": "fake.tester@example.com"},}
    ).then((resp) => {
      expect(resp.status).to.eq(200)
    })

  })
  
})