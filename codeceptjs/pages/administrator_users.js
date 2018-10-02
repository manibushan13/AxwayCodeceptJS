'use strict';

let I;

module.exports = {

 _init() {
    I = require('../steps_file.js')();
  },
  accountDetails: {
    manage: { xpath: '//a[contains(text(),"Manage")]' },
    addnewuser: { xpath: '//a[contains(text(),"Add New User")]' },
    //addnewuser: { xpath: '//a[contains(text(),\'Add New User\')]' },
    newbutton: { xpath: '//div[@id="toolbar-new"]/button' },
    name: { id: 'jform_name' },
    loginname: { id: 'jform_username' },
    createpwd: { id: 'jform_password' },
    confirmpwd: { id: 'jform_password2' },
    email: { id: 'jform_email' },
    saveandclose: { xpath: '//div[@id="toolbar-save"]/button' }
  },
  assignedUserGroups: {
  	assignedusergroups: { xpath: '//a[contains(text(),"Assigned User Groups")]'},
  	registered: { id: '1group_2'},
  	administrator: { id: '1group_7'},
  	manager: { id: '1group_6'},
  	superuser: { id: '1group_8'},
  	editor: { id: '1group_4'}
  },
  clickManage(){
    I.click(this.accountDetails.manage);
    I.wait(5);
  },
  clickAddNewUser(){
    I.click(this.accountDetails.addnewuser);
    I.wait(5);
  },
  clickNew(){
  	I.click(this.accountDetails.newbutton);
  	I.wait(5);
  },
  createUser(){
    I.fillField(this.accountDetails.name, 'autotest1');
    I.fillField(this.accountDetails.loginname, 'autotest1');
    I.fillField(this.accountDetails.createpwd, 'autotest1');
    I.fillField(this.accountDetails.confirmpwd, 'autotest1');
    I.fillField(this.accountDetails.email, 'autotest1@gmail.com');
    I.click(this.accountDetails.saveandclose);
    I.wait(5);
  },
  clickAssignedUserGroups(){
  	I.click(this.assignedUserGroups.assignedusergroups);
  	I.wait(5);
  },
  assignedUserGrupsSettings(){
  	I.click(this.assignedUserGroups.assignedusergroups);
  	if (true) {I} 
  		else {}
  	I.click(this.assignedUserGroups.assignedusergroups);
    I.fillField(this.accountDetails.name, 'autotest1');
    I.fillField(this.accountDetails.loginname, 'autotest1');
    I.fillField(this.accountDetails.createpwd, 'autotest1');
    I.fillField(this.accountDetails.confirmpwd, 'autotest1');
    I.fillField(this.accountDetails.email, 'autotest1@gmail.com');
    I.click(this.accountDetails.saveandclose);
    I.wait(5);
  }
}