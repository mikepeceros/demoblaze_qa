class LoginPage {
    constructor() {
        this.loginModal = '#logInModal'
        this.userName = '#loginusername'
        this.password = '#loginpassword'
        this.primaryBtn = '.btn-primary'
    }


    doLogin(user, pwd) {
        cy.get(this.userName).type(user)
        cy.get(this.password).type(pwd)
        cy.get(this.loginModal).find(this.primaryBtn).click()
    }
}

export default LoginPage;