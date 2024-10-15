import household from "../Pages/household"
import login from "../Pages/login"
let user1={}
let user2={}
describe("Test Addition of household data", () => {

    beforeEach("Launch Login Page", () => {
        cy.log('Visit Login Page')
        cy.visit('/auth/login')
        cy.url().should('include','auth/login')
        cy.fixture("user").then((data) => {
            const login_user = data.addHouseholdLogin
            cy.log('Enter valid login credentials username:' + `${login_user.email}`)
            login.loginUser(login_user.email, login_user.password)
            cy.log('User can successfully login');                     
            user1=data.users[0]
            user2=data.users[1]
        })
    })
    it("Verify that household data can be added for the related user", () => {
        cy.fixture("user").then((data) => {
            cy.log('Add household data for user 1')
            household.addRecord(user1.relationship, user1.name.first, user1.name.last, user1.phone, user1.identity, user1.race, user1.other)
            cy.wait(15000)
            cy.log('Add household data for user 2')
            household.addRecord(user2.relationship, user2.name.first, user2.name.last, user2.phone, user2.identity, user2.race, user2.other)
        })
    })

    it('Verify form data',()=>{
        household.verifyFormData()
                  
    })
    it('Edit household form data',()=>{        
        household.editHouseHoldRecord(user2.phone)                
    })

    it('Delete Household record',()=>{        
        household.deleteHouseholdRecord()
    })

})