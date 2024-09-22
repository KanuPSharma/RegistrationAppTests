class login {
    elements = {
        inputEmail: () => cy.get("input[name='email']"),
        inputPassword: () => cy.get("input[name='password']"),
        btnLogin: () => cy.get("button[id='login-button']"),
        btnAddRecord: () => cy.get("button").contains('Add record')
    }
    loginUser() {
        this.elements.inputEmail().type('fake.tester@example.com')
        this.elements.inputPassword().type('Passcode')
        this.elements.btnLogin().click()
    }
}
module.exports = new login()