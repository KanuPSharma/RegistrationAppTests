class household{
elements={
    btnAddRecord: () => cy.get('.no-records-card > .inline-flex'),
    btnAddRecord2: () => cy.get('button').contains('Add record'),
    btnRelationship: () => cy.get("div[id='relationship']").find('button'),
    selectRelationship:() => cy.get("select[name='relationship']"),
    inputFirstName: () => cy.get("input[name='firstName']"),
    inputLastName: () => cy.get("input[name='lastName']"),
    inputDate: () => cy.get("input[placeholder='Pick a date']"),
    btnDatePicker: () => cy.get("button[name='day']"),
    inputTele: () => cy.get("input[name='telephone']"),
    btnRole: () => cy.get("button[value='MALE']"),
    btnIdentity: () => cy.get("button[role='combobox']").eq(1),
    selectIdentity:() =>cy.get("select[name='hispanic']"),
    optionRace:() => cy.get("button[role='combobox']").eq(2),
    selectRace:()=>cy.get("select[name='race']"),
    inputRaceOther:()=>cy.get("input[name='raceOther']"),
    selectRaceOther:()=>cy.get("select[name='otherStay']"),
    btnCancel:() => cy.get('button').contains('Cancel'),
    btnUpdate:() => cy.get('button').contains('Update'),
    btnOK:() => cy.get('button').contains('OK')
}

addRecord(relationship,firstName,lastName,phone,Identity,race,other) {
    cy.wait(10000)
    this.elements.btnAddRecord2().click()
    this.elements.btnRelationship().click()   
    this.elements.selectRelationship().select(relationship,{force:true}).invoke('val').should('eq',relationship)
    this.elements.inputFirstName().type(firstName)
    this.elements.inputLastName().type(lastName)
    this.elements.inputDate().click()
    this.elements.btnDatePicker().contains('5').click()
    this.elements.inputTele().type(phone)
    this.elements.btnRole().click()
    this.elements.btnIdentity().click({force:true})    
    this.elements.selectIdentity().select(hispanic,{force:true}).invoke('val').should('eq',hispanic)
    this.elements.optionRace().click({force:true})
    this.elements.selectRace().select(race,{force:true}).invoke('val').should('eq',race)
    this.elements.inputRaceOther().click({force:true})
    this.elements.selectRaceOther().select(other,{force:true}).invoke('val').should('eq',other)
    this.elements.btnUpdate().click()
    this.elements.btnOK().click()
}
}
module.exports = new household()