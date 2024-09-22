
import login from "../Pages/login"
const uri = 'http://localhost:3000/'
describe("Login tests",()=>{

it("UI - Verify user can login with valid credentials",()=>{
  cy.visit('http://localhost:3000/auth/login')
    login.loginUser()
})

it("API - METHOD POST - Login - EXPECT status response code 200", () => {
    const payload =  {'email': 'fake.tester@example.com',
    'password': 'Passcode'};
      cy.request({url: uri + 'api/auth/login',
      method: 'POST',
      body: payload,              
  }).then((resp) => {
    expect(resp.status).to.eq(200)
  })
})

})