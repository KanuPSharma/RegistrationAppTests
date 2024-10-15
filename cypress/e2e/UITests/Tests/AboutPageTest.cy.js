import aboutPage from "../Pages/aboutPage"
describe('Tests on About Page in Registration App',()=>{
    beforeEach("Launch URL",()=>{
        cy.visit("/")
        aboutPage.verifyHeadingText()
    })
    it('Verify nav bar links exist on About Page',()=>{
        aboutPage.checkLinksExist()    
    })
    it('Verify nav bar Links are not broken',()=>{
        aboutPage.checkLinksNotBroken() 
    })
})