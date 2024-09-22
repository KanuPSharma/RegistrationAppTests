class register {
    elements = {
        inputName: () => cy.get('input[name="name"]'),
        inputEmail: () => cy.get('input[name="email"]'),
        inputPassword: () => cy.get('input[name="password"]'),
        btnSubmit: () => cy.get('button[name="sign-up-button"]'),
        ptextRegSuccess: () => cy.get('p'),
    }
    checkElementsExist() {
        this.elements.inputName().should('be.visible')
        this.elements.inputEmail().should('be.visible')
        this.elements.inputPassword().should('be.visible')
        this.elements.btnSubmit().should('be.visible')
    }
    registerUser() {
        const uname = this.generateRandomString(3)
        Cypress.env('username',uname)
        cy.log('Username: '+`${Cypress.env('username')}`)
        this.elements.inputName().type(`${uname}`)
        this.elements.inputEmail().type(`${uname}@example.com`)
        this.elements.inputPassword().type('passcode1')
        this.elements.btnSubmit().click()
        cy.wait(5000)
        this.elements.ptextRegSuccess().should('be.visible')
        const query = `select name from "User" where email = '${uname}@example.com'`
        cy.task("connectDB",`${query}`).then((res)=>{
            cy.log(res.name)            
        })
    }
    
    generateRandomString(length) {
        const characters = 'ABCDEFGHIJK';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 1; i < length; i++) {
            const num =(Math.random() * charactersLength)
            cy.log(num)
            result += 'FAKE'+characters.charAt(Math.floor(num));
        }
        return result;
    }  
}
module.exports = new register()//