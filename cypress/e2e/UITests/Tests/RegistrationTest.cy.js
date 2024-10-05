
import register from "../Pages/register"
import login from "../Pages/login"
describe("Registration UI tests", () => {

    beforeEach("Load Login Page with registration link", () => {
        cy.log('Visit Login page')
        cy.visit(Cypress.config('url')+'auth/login')
      })
        
    it("UI - Verify Registration page is loaded successfully",()=>{
        cy.log('Launch Registration page')
        login.clickRegisterUserLink()
        //Assertion
        cy.url().should("include", "auth/register") 
        cy.wait(5000)
        cy.log('Verify Registration page is loaded')
        register.checkRegisterPageElements()
    })
    
    it("UI - Verify a new user can be registered",()=>{
        cy.log('Click on Registration link')
        login.clickRegisterUserLink()
        cy.log('Register a new user')
        register.registerUser()
    })

    it("UI - Verify invlid Password data error",()=>{
        login.clickRegisterUserLink()
        cy.fixture("user").then((data) => {
        const password = data.invalidPassword
        register.registerUserInvalidDataError(password)
        })
    })

})