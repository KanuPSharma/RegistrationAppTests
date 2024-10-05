@ -1,6 +1,7 @@
class household {
    elements = {
        btnAddRecord: () => cy.get('button').contains('Add record'),
        btnPreviousMonth: () => cy.get('[name="previous-month"]'),
        btnRelationship: () => cy.get("div[id='relationship']").find('button'),
        selectRelationship: () => cy.get("select[name='relationship']"),
        inputFirstName: () => cy.get("input[name='firstName']"),
@ -18,18 +19,22 @@ class household {
        btnCancel: () => cy.get('button').contains('Cancel'),
        btnUpdate: () => cy.get('button').contains('Update'),
        btnOK: () => cy.get('button').contains('OK'),
        btnAddHousehold: () => cy.get('button').contains('Add household')
        btnAddHousehold: () => cy.get('button').contains('Add household'),
        lnkDelete: (num) => cy.get(`:nth-child(${num}) > .w-full > .actions > [name="delete-record-button btn"]`),
        lnkButtonDialog: () => cy.get('div[role="alertdialog"]').find('button').contains('Delete'),

    }

    addRecord(relationship, firstName, lastName, phone, identity, race, other) {
        cy.wait(10000)
    addRecord(relationship, firstName, lastName, phone, identity, race, other) {        
        this.elements.btnAddRecord().scrollIntoView()
        this.elements.btnAddRecord().click()
        this.elements.btnRelationship().click()
        this.selectDropDown(relationship)
        this.elements.selectRelationship().select(relationship, { force: true }).invoke('val').should('eq', relationship)
        this.elements.inputFirstName().type(firstName)
        this.elements.inputLastName().type(lastName)
        this.elements.inputDate().click()
        this.elements.btnDatePicker().contains('5').click()
        this.elements.btnDatePicker().contains('2').click()
        this.elements.inputTele().type(phone)
        this.elements.btnRole().click()
        this.elements.btnIdentity().click({ force: true })
@ -42,5 +47,23 @@ class household {
        this.elements.btnOK().click()
    }

    selectDropDown(option) {
        cy.get("button[role='combobox']").each(($el, index, $list) => {
            cy.log($el)
        })
    }
    deleteHouseholdRecord() {       
        let itemCount
        cy.get('div[class="records-container w-full mt-4 grid sm:grid-cols-12 gap-2"]').then(($el) => {
            itemCount = Cypress.$($el).children().length;
            cy.log('Total number of household: '+itemCount)
            for (let i = 1; i < itemCount-1; i++) {
                this.elements.lnkDelete(i).click({ force: true })
                this.elements.lnkButtonDialog().click()
                cy.wait(3000)
            }
        })
        
    }
}
module.exports = new household()