
import register from "../Pages/register"

describe("Registration UI tests", () => {

    beforeEach("Load Registration Page", () => {
        cy.visit('http://localhost:3000/auth/register')
    })

    it("Check Registration Page is Loaded", () => {
        register.checkElementsExist()
    })

    it("Check User can be registered", () => {
        register.registerUser()
    })

})