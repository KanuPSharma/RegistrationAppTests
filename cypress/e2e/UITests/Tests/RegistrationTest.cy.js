
import register from "../Pages/register"
import login from "../Pages/login"
describe("Registration UI tests", () => {

    beforeEach("Load Login Page with registration link", () => {
        cy.visit(Cypress.config('url')+'auth/login')
    })
        
    it("UI - Verify Registration page is loaded successfully",()=>{
        login.clickRegisterUserLink()
        register.checkRegisterPageElements()
    })
    
    it("UI - Verify a new user can be registered",()=>{
        login.clickRegisterUserLink()
        register.registerUser()

    })

})