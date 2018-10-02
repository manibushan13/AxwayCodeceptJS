Feature('04 API_Portal_IAP_150_tests1.js');

Before((I, administrator_login, administrator_menus) => {
    
    I.amOnPage('https://192.168.46.6/administrator');

    administrator_login.LogInAfterPwdChange();

    administrator_menus.clickUsers();

});

Scenario('1 - Lgin Joomla Administrator and Create User.', (I, administrator_login, administrator_menus, administrator_users, manager_login) => {
    
 	//administrator_users.clickManage();

 	administrator_users.clicAddNewUser();

 	//administrator_users.clickNew();

 	//administrator_users.createUser();

 	I.amOnPage('https://192.168.46.5:8075');

 	manager_login.loginMasterAdmin();

 });


