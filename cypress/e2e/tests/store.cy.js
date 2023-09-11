/// <reference types="cypress" />

import HomePage from "../../support/pages/HomePage";
import LoginPage from "../../support/pages/LoginPage";
import SingupPage from "../../support/pages/SignupPage";

// Welcome to Cypress!
const homePage = new HomePage();
const singupPage = new SingupPage();
const loginPage = new LoginPage();

function makeUser(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

describe('example to-do app', () => {

  const usr = makeUser(20)
  const pwd = "randomPwd"

    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/')
    })


    it('TEST 1', () => {
      homePage.openSignUpForm()
      singupPage.doSingUp(usr, pwd)
      cy.contains
      cy.on('window:alert',(t)=>{
        expect(t).to.contains('Sign up successful.')
      })
      loginPage.doLogin(usr, pwd)
    })
    
    it('TEST 2', () => {
      homePage.openLoginForm()
      loginPage.doLogin(usr, pwd)
    })
    
    it('TEST 3', () => {
      homePage.openLoginForm()
      loginPage.doLogin(usr, pwd)
    })

    it('TEST 4', () => {
      homePage.openLoginForm()
      loginPage.doLogin("test1", "pwd")
    })



  });

