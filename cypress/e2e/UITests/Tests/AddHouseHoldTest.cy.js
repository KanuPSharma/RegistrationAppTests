import household from "../Pages/household"
import login from "../Pages/login"
describe("Test Addition of household data", () => {

    beforeEach("Launch Login Page", () => {
        cy.visit(Cypress.config('url')+'auth/login')
    })

    it("Verify that household data can be added for the related user", () => {
        cy.fixture("user").then((data) => {
            const login_user = data.addHouseholdLogin
            login.loginUser(login_user.email, login_user.password)
        })
        cy.fixture("user").then((data) => {
            const user1 = data.users[0]
            cy.log('Add household data for user 1')
            cy.wait(15000)
            household.addRecord(user1.relationship, user1.name.first, user1.name.last, user1.phone, user1.identity, user1.race, user1.other)
            const user2 = data.users[1]
            cy.wait(15000)
            cy.log('Add household data for user 2')
            household.addRecord(user2.relationship, user2.name.first, user2.name.last, user2.phone, user2.identity, user2.race, user2.other)
        })
    })
    it('Delete Household record',()=>{
        cy.fixture("user").then((data) => {
            const login_user = data.addHouseholdLogin
            login.loginUser(login_user.email, login_user.password)
            cy.wait(10000)
        })
        household.deleteHouseholdRecord()
    })
})