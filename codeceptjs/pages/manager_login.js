
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    initialConfigurationYes: { xpath: '/html/body/div[17]/div[2]/div/div/span[1]/span' },
    initialConfigurationNo: { css: '#uniqName_0_45 > div > span:nth-child(2) > span' },
},
  memberLoginLocators: {
    loginName: { xpath: '//*[@id="dijit__WidgetsInTemplateMixin_0-username"]' },
    password: { xpath: '//*[@id="dijit__WidgetsInTemplateMixin_0-password"]' },
    login: { xpath: '//*[@id="dijit_form_Button_0_label"]' }
  },
  registerLocators: {
    fullName: { xpath: '/html/body/div/div/div[4]/div[2]/form[1]/div[1]/div[1]/div/div[2]/input' },
    registrationCode: { xpath: '/html/body/div/div/div[4]/div[2]/form[1]/div[1]/div[2]/div/div[2]/input' },
    email: { xpath: '/html/body/div/div/div[4]/div[2]/form[1]/div[2]/div[2]/input' },
    password: { xpath: '/html/body/div/div/div[4]/div[2]/form[1]/div[3]/div[2]/input' },
    confirmPassword: { xpath: '/html/body/div/div/div[4]/div[2]/form[1]/div[5]/div[2]/input' },
    register: { xpath: '/html/body/div/div/div[4]/div[2]/form[1]/div[6]/div/div/span/span/span' }
  },
  forgotPasswordLocators: {
    email: { xpath: '/html/body/div/div/div[4]/div[3]/form/div[1]/div[2]/input' },
    submit: { xpath: '/html/body/div/div/div[4]/div[3]/form/div[4]/span/span/span' }
  },
  memberLoginLocators1: {
    loginName1: { name: 'username' },
    password1: { name: 'password' },
    login1: { id: 'dijit_form_Button_0' }
  },
  loginMasterAdmin() {
    I.wait(2);
    I.fillField(this.memberLoginLocators.loginName, 'apiadmin');
    I.fillField(this.memberLoginLocators.password, 'changeme');
    I.click(this.memberLoginLocators.login);
    I.wait(15);
  },
  loginOrgAdministrator(){
    I.wait(2);
    I.fillField(this.memberLoginLocators.loginName, 'OrgAdministrator');
    I.fillField(this.memberLoginLocators.password, 'SECRET123');
    I.click(this.memberLoginLocators.login);
    I.wait(2);
  },
  clickInitialConfigurationYes(){
    I.click(this.locators.initialConfigurationYes);
  },
  clickInitialConfigurationNo(){
    I.click(this.locators.initialConfigurationNo);
  },
  clickInitialConfigurationX(){
    I.click(this.locators.x);
  },
  loginMasterAdmin1() {
    I.wait(5);
    I.fillField(this.memberLoginLocators1.loginName1, 'apiadmin');
    I.fillField(this.memberLoginLocators1.password1, 'changeme');
    I.click(this.memberLoginLocators1.login1);
    I.wait(15);
  }
}
