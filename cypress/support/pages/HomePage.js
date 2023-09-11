class HomePage {
    constructor() {
        this.loginMenu = '#login2'
        this.signUpMenu = '#signin2'
    }


    openLoginForm() {
        cy.get(this.loginMenu).click()
    }

    openSignUpForm() {
        cy.get(this.signUpMenu).click()
    }
}

export default HomePage;