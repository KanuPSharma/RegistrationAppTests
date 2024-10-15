class aboutPage {
    elements = {
        lnkAbout: () => cy.get('a').contains('About'),
        lnkDoc: () => cy.get('a').contains('Docs'),
        lnkSwagger: () => cy.get('a').contains('Swagger'),
        txtHeading: () => cy.get('h2')
    }
    verifyHeadingText() {
        this.elements.txtHeading()
            .invoke('text')
            .should('include', 'Welcome')
    }
    checkLinksExist() {
        this.elements.lnkAbout()
            .should('exist')
        this.elements.lnkDoc()
            .should('exist')
        this.elements.lnkSwagger()
            .should('exist')
    }
    checkLinksNotBroken() {
        cy.on('window:confirm', cy.stub().as('confirm'))
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wrap('passed').as('ctrl')
        cy.get("a").each($el => {
            if ($el.prop('href').length > 0) {
                const message = $el.text()
                expect($el, message)
                    .to.have.attr("href")
                    .not.contain("undefined")
                cy.log($el.attr('href'))
            }
        })
    }
}
module.exports = new aboutPage()