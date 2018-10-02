Feature('Axway_test2.js');

Before((I, manager_login, manager_menus, manager_settingsMenu, portal_login, portal_menus, portal_applicationsMenu, portal_usersMenu, manager_clientRegistryMenu) => {
    I.amOnPage('https://192.168.46.113:8075/');
    manager_login.loginMasterAdmin1();
    manager_menus.clickSettings1();
    manager_settingsMenu.clickApiManagerSettings1();

    //Create Organization
    manager_menus.clickClientRegistry1();
    manager_clientRegistryMenu.clickOrganizations1();
    manager_clientRegistryMenu.createAutomationOrganization1();

    //Create Organization with Generate Codes
    manager_menus.clickClientRegistry1();
    manager_clientRegistryMenu.clickOrganizations1();
    manager_clientRegistryMenu.createAutomationOrganization1();

    //Create Organization Administrator
    manager_menus.clickClientRegistry1();
    manager_clientRegistryMenu.clickApplicationDevelopers();
    manager_clientRegistryMenu.createOrgAdministrator();

    //Create Application Developer
    manager_menus.clickClientRegistry1();
    manager_clientRegistryMenu.clickApplicationDevelopers1();
    manager_clientRegistryMenu.createAppDeveloper1();  

    //Create Application in Portal
    portal_applicationsMenus.clickCreateApplication1();
    portal_applicationsMenus.clickCreateApplication1();

});

Scenario('1 - Lgin Joomla Administrator and Create User.', (I, administrator_login, administrator_menus, administrator_users, manager_login) => {
    
    //administrator_users.clickManage();

    //administrator_users.clicAddNewUser();

    //administrator_users.clickNew();

    //administrator_users.createUser();

    I.amOnPage('https://192.168.46.5:8075');

    // manager_login.loginMasterAdmin();

 });
