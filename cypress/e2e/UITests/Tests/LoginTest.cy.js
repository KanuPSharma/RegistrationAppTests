
import login from "../Pages/login"
import register from "../Pages/register"
const uri = 'http://localhost:3000/'
describe("Login tests",()=>{
beforeEach("",()=>{
  cy.visit('http://localhost:3000/auth/login')
})

it("UI - Verify user can login with valid credentials",()=>{
      login.loginUser()
})

it("Verify new account link navigates to registration page", ()=>{
    login.clickRegisterUser()
    register.checkElementsExist()
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