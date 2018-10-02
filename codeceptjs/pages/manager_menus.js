
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },
  locators: {
    monitoring: {xpath: '/html/body/div[2]/div[2]/div[1]/div'},
    clientRegistry: {xpath: '/html/body/div[2]/div[2]/div[2]/div'},
    policyManagement: {xpath: '/html/body/div[2]/div[2]/div[3]/div'},
    apiCatalog: {xpath: '/html/body/div[2]/div[2]/div[4]/div'},
    apiRegistration: {css: '#nav-api_registration > div'},
    settings: {xpath: '//*[@id="nav-settings"]/div'}
  },
  locators1: {
    monitoring: {xpath: '/html/body/div[2]/div[2]/div[1]/div'},
    clientRegistry1: {xpath: '//span[contains(@class,"icon apim-users")]'},
    policyManagement: {xpath: '/html/body/div[2]/div[2]/div[3]/div'},
    apiCatalog: {xpath: '/html/body/div[2]/div[2]/div[4]/div'},
    apiRegistration: {css: '#nav-api_registration > div'},
    settings1: {xpath: '//span[contains(@class,"icon apim-gear")]'}    
  },
  clickMonitoring(){
    I.click(this.locators.monitoring);
  },
  clickClientRegistry(){
    I.click(this.locators.clientRegistry);
  },
  clickPolicyManagement(){
    I.click(this.locators.policyManagement);
  },
  clickApiCatalog(){
    I.click(this.locators.apiCatalog);
  },
  clickApiRegistration(){
    I.click(this.locators.apiRegistration);
  },
  clickSettings(){
    I.click(this.locators.settings);
  },
  clickSettings1(){
    I.click(this.locators1.settings1);
  },
  clickClientRegistry1(){
    I.click(this.locators1.clientRegistry1);
  },
}
