
import login from "../Pages/login"
const uri = 'http://localhost:3000/'
const uname = Cypress.config('email')
describe("UI Login tests", () => {
  beforeEach("Visit the webpage", () => {
    cy.visit('/auth/login')
    cy.url().should("include", "auth/login") 
  })
  
  it("UI - Verify user can login with valid credentials", () => {
    cy.fixture("user").then((data) => {
      const login_user = data.login
      cy.log('Enter valid login credentials username:' + `${login_user.email}`)
      login.loginUser(login_user.email, login_user.password)
      cy.log('User can successfully login');
    })
  })

  it("UI - Verify Error message is displated on login with invalid credentials", () => {
    cy.fixture("user").then((data) => {
      const invalid_login_user=data.invalidUser 
      cy.log('Enter invalid login credentials username: ' + `${invalid_login_user.email}`)     
      login.loginInvalidCredentials(invalid_login_user.email,invalid_login_user.password)
      cy.log('Verify Error message is displayed');
      login.elements.txtErrorMessage().should('be.visible')
      })
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