/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: verify function SignIn
 */
'use strict';
const dev = require('../common/dev');
const com = require('../common/common_method');
const extend_method = require('../common/extend_method');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
let ext = new extend_method(dev.driver);

const page_config = require('./config/data/page_elements');
const testdata = require('./config/data/test_data');
let path = 'report/image/' + dev.date + '/';

let filename = 'account.txt';

module.exports = async function loginTest() {
    describe('Login test',async function () {
        this.timeout(0);
        
        before(async function(){
            await td.clickBylocator(page_config.homepage.signinbtn, 2000);
            await td.waitpage(5000);
        })

        step('#2.1 verify username and password is empty',async function () {

            try {
                await ext.login(testdata.signIn.emptyaccount.username,testdata.signIn.emptyaccount.password);
                
                return td.getElementText(page_config.homepage.checktext).then(function (actval) {
                    td.checkResult('equal', actval, testdata.signIn.expectMsg.emptyaccount);
                });   
            } catch (error) {
                console.log(error);
            }

        });

        step('#2.2 verify the password is empty', async function () {

            try {
                await ext.login(testdata.signIn.account.username, testdata.signIn.emptyaccount.password);
                return td.getElementText(page_config.homepage.checktext).then(function (actval) {
                    td.checkResult('equal', actval, testdata.signIn.expectMsg.emptypassword);
                });                 
            } catch (error) {
                console.log(error);
            }

        });

        step('#2.3 verify the password is wrong', async function () {

            try {
                await ext.login(testdata.signIn.account.username, testdata.signIn.invalidaccount.password);
                return td.getElementText(page_config.homepage.checktext).then(function (actval) {
                    td.checkResult('equal', actval, testdata.signIn.expectMsg.invalidpassword);
                });                
            } catch (error) {
                console.log(error);
            }

        });

        step('#2.4 verify the account is not existed', async function () {

            try {
                await ext.login(testdata.signIn.invalidaccount.username, testdata.signIn.account.password);
                return td.getElementText(page_config.homepage.checktext).then(function (actval) {
                    td.checkResult('equal', actval, testdata.signIn.expectMsg.invalidaccount);
                });  
            } catch (error) {
                console.log(error);
            }

        });

        step('#2.5 verify the account type is Number', async function () {

            try {
                await ext.login(testdata.signIn.numberaccount.username, testdata.signIn.numberaccount.password);
                await td.waitpage(5000);
                await td.getElement(page_config.signIn.signsuccess);
                await ext.logout();
                 
            } catch (error) {
                console.log(error);
            }

        });

        step('#2.6 verify the account which bound telephone ', async function () {

            try {
                let username = testdata.signIn.bindaccount.mobile;
                let password = testdata.signIn.account.password;
               
                await td.waitpage(1000);
                await td.clickBylocator(page_config.homepage.signinbtn, 2000);
                await td.waitpage(2000);
                await ext.login(username, password);
                await td.waitpage(5000);
                await td.getElement(page_config.signIn.signsuccess);
                await ext.logout();
            } catch (error) {
                console.log(error);
            }

        });
        step('#2.7 verify the account which bound email', async function () {

            try {
                let username = testdata.signIn.bindaccount.email;
                let password = testdata.signIn.account.password;
                await td.waitpage(1000);
                await td.clickBylocator(page_config.homepage.signinbtn, 2000);
                await td.waitpage(2000);
                await ext.login(username, password);
                await td.waitpage(5000);
                await td.getElement(page_config.signIn.signsuccess);
                await ext.logout();
            } catch (error) {
                console.log(error);
            }

        });

        step('#2.8 verify the keepwork account ', async function () {

            try {
                await td.clickBylocator(page_config.homepage.signinbtn, 2000);
                await td.waitpage(2000);
                await ext.login(testdata.signIn.account.username, testdata.signIn.account.password);
                await td.waitpage(5000);
                await td.getElement(page_config.signIn.signsuccess);
                await ext.logout();
            } catch (error) {
                console.log(error);
            }

        });

        step('#2.9 verify unbound telephone account', async function () {

            try {
                
            } catch (error) {
                console.log(error);
            }

        });

        step('#2.10 verify unbound email account', async function () {

            try {

            } catch (error) {
                console.log(error);
            }

        });

        step('#2.11 verify Third-party account', async function () {

            try {

            } catch (error) {
                console.log(error);
            }

        });

        
    
    });

}
