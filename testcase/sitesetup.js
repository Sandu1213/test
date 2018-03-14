/**
 *  create by Duke (2018/01/02)
 */
'use strict';
const dev = require('../common/dev');
//const com = require('../common/common_method');
const extend_method = require('../common/extend_method');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
let ext = new extend_method(dev.driver);
const page_config = require('./config/data/page_elements');
const testdata = require('./config/data/test_data');

module.exports = async function siteSetupTest(){
    describe('site setup validate', async function () {
        this.timeout(0);
        let address = '';
        before(async function () {
            await td.clickBylocator(page_config.homepage.signinbtn, 2000);
            await td.waitpage(2000);
            await ext.login(testdata.signIn.account.username, testdata.signIn.account.password);
            await td.waitpage(5000);
            await ext.switchMenu('siteManagement');
            await td.waitpage(5000);
            await td.clickBylocator(page_config.mysite.operation.setup.key);
            await td.waitpage(2000);
        });

        step('#4.9.1 common setting content before setup ', async function () {
            let sitename = await ext.getsiteSetting();
            address = sitename[1];
            sitename.forEach(function (values) {               
                console.log("the Info is " + values);
            });            
        });

        step('#4.9.2.1 modify the common settings - avatar', async function () {
            let loc = page_config.mysite.operation.setup.common.icon_input; 
            let file_avatar = testdata.sites.setup1.siteicon;
            await ext.setAvatar(loc, file_avatar);            
            await td.clickBylocator(page_config.mysite.operation.setup.common.icon_save_btn);
            await td.waitpage(2000);
            await td.clickBylocator(page_config.mysite.operation.setup.common.savebtn);
            await td.waitpage(2000);
            await td.getElementText(page_config.mysite.operation.setup.common.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.sites.setup1.checkRes.savesuccess);
            }); 
        });

        step('#4.9.2.2 modify the common settings - sitename', async function () {           
            //验证设置不合理的网站名称(主要是关键字过滤相关)  ---相关问题已解决
            await td.waitpage(1000);
            await ext.setsiteName(page_config.mysite.operation.setup.common.sitename, testdata.sites.setup1.invalidsitename);
            await td.clickBylocator(page_config.mysite.operation.setup.common.savebtn);
            await td.waitpage(2000);
            await td.getElementText(page_config.mysite.operation.setup.common.notice).then(function (values) {
                td.checkResult('equal',values,testdata.sites.setup1.checkRes.savefailed);
            });
            //验证设置合理的网站名称
            await ext.setsiteName(page_config.mysite.operation.setup.common.sitename, testdata.sites.setup1.sitename);
            await td.clickBylocator(page_config.mysite.operation.setup.common.savebtn);
            await td.waitpage(2000);
            await td.getElementText(page_config.mysite.operation.setup.common.saveResult).then(function (values) {
                td.checkResult('equal', values, testdata.sites.setup1.checkRes.savesuccess);
            });          
        });

        step('#4.9.2.3 modify the common settings - siteIntroduction', async function () {
            //验证设置不合理的网站介绍
            await ext.setsiteIntro(page_config.mysite.operation.setup.common.siteintro, testdata.sites.setup1.invalidsiteintro);
            await td.clickBylocator(page_config.mysite.operation.setup.common.savebtn);
            await td.waitpage(2000);
            await td.getElementText(page_config.mysite.operation.setup.common.notice).then(function (values) {
                td.checkResult('equal', values, testdata.sites.setup1.checkRes.savefailed);
            });
            //验证设置合理的网站介绍
            await ext.setsiteIntro(page_config.mysite.operation.setup.common.siteintro, testdata.sites.setup1.siteintro);
            await td.clickBylocator(page_config.mysite.operation.setup.common.savebtn);
            await td.waitpage(2000);
            await td.getElementText(page_config.mysite.operation.setup.common.saveResult).then(function (values) {
                td.checkResult('equal', values, testdata.sites.setup1.checkRes.savesuccess);
            }); 
        });
      
        step('#4.9.3 modify all and check the result', async function () {
            // await ext.set
            // await ext.setsiteName(page_config.mysite.operation.setup.common.sitename, testdata.sites.setup1.sitename);
        });

        step('#4.9.4 verify the Datasource', async function () {
            await ext.switchTabpage(page_config.mysite.operation.setup.datasource.key);
            //以下是非VIP(VIP账号的校验还需要添加判断进行补充)
            await td.getElementText(page_config.mysite.operation.setup.datasource.data).then(function (values) {
                td.checkResult('equal', String(values).trim(), testdata.sites.datasource.data);
            });
        });

        step('#4.9.5 the Domain name setup and validate', async function () {
            await ext.switchTabpage(page_config.mysite.operation.setup.domainname.key);
            //let arr = await ext.getsiteSetting();
            //let address = arr[1];
            console.log('address: ' +address);
            await td.getElementText(page_config.mysite.operation.setup.domainname.webAddress).then(function (values) {
                td.checkResult('equal', values, address);
            });
            let str = address.split('/');
            let sitename = str[str.length-1];
            let domainname = testdata.signIn.account.username + '-'+ sitename + '.keepwork.com';
            console.log('domain is ' + domainname);
            await td.getElementText(page_config.mysite.operation.setup.domainname.webdomain).then(function (values) {
                td.checkResult('equal', values, domainname);
            });
            await td.getElementText(page_config.mysite.operation.setup.domainname.cname.notes).then(function (values) {
                td.checkResult('equal', values, testdata.sites.DomainName.noVip_notes);
            });
        });
        step('#4.9.6 purchase the vip account', async function () {
            await ext.buyVip(page_config.mysite.operation.setup.domainname.cname.becomevip);
        });
        // //先简单验证，后续可以扩展完善
        step('#4.9.7 permissions - add Group and member', async function () { 
            await ext.switchTabpage(page_config.mysite.operation.setup.Permissions.key);
            let groupname = testdata.sites.permissions.group.name;
            let users = testdata.sites.permissions.group.member;
            await ext.addsiteGroup(groupname);
            await ext.addGroupMember(users);            
        });

        step('#4.9.8 permissions - set the right', async function () {
            await ext.switchTabpage(page_config.mysite.operation.setup.Permissions.Rights.key);
            await ext.modifyPermission(); 
        });

        // step('#4.9.9 permissions - add Group and member', async function () {
            
        // });

        after(async function () {
            await td.waitpage(1000);
            await ext.logout();
        });
    });
};



