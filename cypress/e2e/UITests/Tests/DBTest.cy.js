describe("DB verifications",()=>{
    
    it("Verify House hold is created in Database",()=>{
        const query = `select name from "User" where email ='fake.tester@example.com'`
        cy.task("connectDB",`${query}`).then((res)=>{
            expect(res).to.have.keys('name')
            cy.log(resSubstring)
        });
    })
    
})