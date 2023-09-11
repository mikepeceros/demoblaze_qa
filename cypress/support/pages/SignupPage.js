class SingupPage {
    constructor() {
        this.signInModal = '#signInModal'
        this.userName = '#sign-username'
        this.password = '#sign-password'
        this.primaryBtn = '.btn-primary'
    }

    doSingUp(user, pwd) {
        cy.get(this.userName).type(user)
        cy.get(this.password).type(pwd)
        cy.get(this.signInModal).find(this.primaryBtn).click()
    }
}

export default SingupPage;