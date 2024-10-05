class login {
    elements = {
        inputEmail: () => cy.get("input[name='email']"),
        inputPassword: () => cy.get("input[name='password']"),
        btnLogin: () => cy.get("button[id='login-button']"),
        btnAddRecord: () => cy.get("button").contains('Add record'),
        linkRegistration:()=>cy.get("a[href='/auth/register']"),
        txtErrorMessage:()=>cy.contains('Email does not exist!')
    }
    checkLoginPageElements(){
        this.elements.inputEmail().should('be.visible')
        this.elements.inputPassword().should('be.visible')
        this.elements.btnLogin().should('be.visible')
        this.elements.linkRegistration().should('be.visible')
    }
    loginUser(username, password) {
        
        this.elements.inputEmail().type(username)
        this.elements.inputPassword().type(password)
        this.elements.btnLogin().click()
    }
    loginInvalidCredentials(username,password){
        this.elements.inputEmail().type(username)
        this.elements.inputPassword().type(password)
        this.elements.btnLogin().click()
        this.elements.txtErrorMessage().should('be.visible')
    }
    loginUserwithValidCredentials(username,password){
        this.elements.inputEmail().type(username)
        this.elements.inputPassword().type(password)
        this.elements.btnLogin().click()
    }
    clickRegisterUserLink(){
        this.elements.linkRegistration().click()
    }
    
}
module.exports = new login()