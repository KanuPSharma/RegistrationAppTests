class register {
    elements = {
        inputName: () => cy.get('input[name="name"]'),
        inputEmail: () => cy.get('input[name="email"]'),
        inputPassword: () => cy.get('input[name="password"]'),
        btnSubmit: () => cy.get('button[name="sign-up-button"]'),
        ptextRegSuccess: () => cy.get('p'),       
        ptextEmailError:() => cy.get('p').contains('has to be proper email format.'),
        ptextPasswordError:() => cy.get('p').contains('Maximum 20 characters.')
    }
    
    checkRegisterPageElements() {
        this.elements.inputName().should('be.visible')
        .and('have.prop','placeholder')
        this.elements.inputEmail().should('be.visible')
        this.elements.inputPassword().should('be.visible')
        this.elements.btnSubmit().should('be.visible')
    }
    registerUser() {
        const uname = this.generateRandomString(4)            
        cy.log('Username: '+`${uname}`)
        this.elements.inputName().type(`${uname}`)
        this.elements.inputEmail().type(`${uname}@example.com`)
        this.elements.inputPassword().type('passcode1')
        this.elements.btnSubmit().click()
        cy.wait(5000)
        this.elements.ptextRegSuccess().should('be.visible')
    }
    registerUserInvalidDataError(password) {
        const uname = this.generateRandomString(4)            
        cy.log('Username: '+`${uname}`)
        this.elements.inputName().type(`${uname}`)
        this.elements.inputEmail().type(`${uname}@example.com`)            
        this.elements.inputPassword().type(password)
        this.elements.btnSubmit().click()
        cy.wait(5000)
        this.elements.ptextPasswordError().should('be.visible')
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