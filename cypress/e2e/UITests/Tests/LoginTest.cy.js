
import login from "../Pages/login"
const uri = 'http://localhost:3000/'
const uname = Cypress.config('email')
describe("UI Login tests", () => {
  beforeEach("Visit the webpage", () => {
    cy.visit('http://localhost:3000/auth/login')
  })
  
  it("UI - Verify user can login with valid credentials", () => {
    cy.fixture("user").then((data) => {
      const login_user = data.login
      login.loginUser(login_user.email, login_user.password)
    })
  })

  it("UI - Verify user cannot login with invalid credentials", () => {
    login.loginInvalidCredentials()
  })
})

describe("API tests login", () => {
  it("API - METHOD POST - Login - EXPECT status response code 200", () => {
    const payload = {
      'email': 'fake.tester@example.com',
      'password': 'Passcode'
    };
    cy.request({
      url: uri + 'api/auth/login',
      method: 'POST',
      body: payload,
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  })
})