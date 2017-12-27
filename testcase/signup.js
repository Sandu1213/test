/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: verify function SignUp
 */
'use strict';
const dev = require('../common/dev');
const com = require('../common/common_method');
const extend_method = require('../common/extend_method');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
let ext = new extend_method(dev.driver);

const page_config = require('./page_elements');
const testdata = require('./data/test_data')
let path = 'report/image/'+ dev.date + '/';

let filename = 'account.txt';


module.exports = async function signupTest() {

    describe('signup test',async function () {
        this.timeout(0);
        before(async function () {
            await td.clickBylocator(page_config.homepage.signupbtn, 2000);
            await td.waitpage(3000);
            let imgname = 'signup' + await com.getTime();
            await td.SaveScreenshot(path, imgname);           
        });


        
        step('#1.1 verify username and password is empty', async function () {

            try {
                await ext.SignUp(testdata.signup.emptyaccount.username, testdata.signup.emptyaccount.password);
                let imgname = 'case1.1' + await com.getTime();               
                await td.SaveScreenshot(path, imgname);  

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (res) {
                    td.checkResult('equal', String(res[0]), testdata.signup.expectMsg.emptyusername);
                });
            } catch (error) {
                console.log(error);
            }

        });
        
        step('#1.2 verify username is empty', async function () {
            try {
                await ext.SignUp(testdata.signup.emptyaccount.username, testdata.signup.account.password);
                let imgname = 'case1.2' + await com.getTime();               
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (res) {
                    td.checkResult('equal', String(res[0]).trim(), testdata.signup.expectMsg.emptyusername);
                });
            } catch (error) {
                console.log(error);
            }

        });
        
        step('#1.3 verify username rules', async function () {

            try {

                await ext.SignUp(testdata.signup.zhaccount.username, testdata.signup.account.password);                
                let imgname = 'case1.3' + await com.getTime();
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (res) {                    
                    td.checkResult('equal', String(res[0]).trim(), testdata.signup.expectMsg.zhusername);
                });
            } catch (error) {
                console.log(error);
            }

        });

        step('#1.4 verify password is empty', async function () {

            try {
                await ext.SignUp(testdata.signup.account.username, testdata.signup.emptyaccount.password);                
                let imgname = 'case1.4' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);
                               
                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (res) {                    
                    td.checkResult('equal', String(res[1]).trim(), testdata.signup.expectMsg.emptypassword);
                });
            } catch (error) {
                console.log(error);
            }

        });

        step('#1.5 verify username is Number', async function () {

            try {
                await ext.SignUp(testdata.signup.numberaccount.username, testdata.signup.account.password);
                let imgname = 'case1.5' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (res) {                    
                    td.checkResult('equal', String(res[0]).trim(), testdata.signup.expectMsg.numberaccount);
                });
            } catch (error) {
                console.log(error);
            }

        });

        step('#1.6 verify password length', async function () {

            try {
                
                await ext.SignUp(testdata.signup.account.username, testdata.signup.invalidaccount.password);
                let imgname = 'case1.6' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);
                
                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (res) {
                    td.checkResult('equal', String(res[1]).trim(), testdata.signup.expectMsg.invalidpassword);
                });
            }catch (error) {
                console.log(error);
            }

        });

        step('#1.7 verify username contain the sensitive word ', async function () {
            try {
                await ext.SignUp(testdata.signup.invalidaccount.username, testdata.signup.account.password);
                let imgname = 'case1.7' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);
                
                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (res) {
                    td.checkResult('equal', String(res[0]).trim(), testdata.signup.expectMsg.filteraccount);
                });
            } catch (error) {
                console.log(error);
            }
        });

        step('#1.8 verify username length is over limit ', async function () {
            try {
                
                let username = 'test' + com.GenStr(30);
                let password = 'pwd' + com.GenStr(6);
                let content = username + '/' + password + '\n';
                console.log('Account info is ' + content);

                await ext.SignUp(username, password);
                let imgname = 'case1.8' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (res) {
                    td.checkResult('equal', String(res[0]).trim(), testdata.signup.expectMsg.overaccount);
                });
            } catch (error) {
                console.log(error);
            }
        });

        step('#1.9 verify right account with back to Home page',async function () {

            try {
                let username = 'test' + com.GenStr(4);
                let password = testdata.signup.account.password;
                let content = username + '/' + password + '\n';
                console.log('Account info is ' + content);
                await com.saveFile(filename,content);
                await ext.SignUp(username, password);
                await td.waitpage(15000);
                await td.getElement(page_config.signUp.success);
                await td.clickBylocator(page_config.signUp.backbtn);
                await td.waitpage(2000);
                await ext.logout();
            }catch (error) {
                console.log(error);
            }

        });

        step('#1.10 verify right account with back to personal page',async function () {

            try {
                let username = 'test' + com.GenStr(4);
                let password = testdata.signup.account.password;
                let content = username + '/' + password + '\n';
                console.log('Account info is ' + content);
                await com.saveFile(filename, content);
                await td.clickBylocator(page_config.homepage.signupbtn, 2000);
                await td.waitpage(3000);
                await ext.SignUp(username, password);
                await td.waitpage(15000);
                await td.getElement(page_config.signUp.success);
                await td.clickBylocator(page_config.signUp.gotohome);
                await td.waitpage(3000);
                await ext.logout();
            }catch (error) {
                console.log(error);
            }
        });

        step('#1.11 verify duplicate account', async function () {

            try {
                let offset = { start: 0, end: 16 };
                let username = '';
                let password = '';
                let readstream = await com.readFile(filename,offset);
                await readstream.on('data',async function(data){
                    let arr = String(data).split('/');                   
                    username = arr[0];
                    password = arr[1]; 
                    let content = username + '/' + password + '\n';
                    console.log('repeatAccount info is ' + content);                   
                });
                
                await td.clickBylocator(page_config.homepage.signupbtn, 2000);
                await td.waitpage(2000);               
                await ext.SignUp(username, password);                
                let imgname = 'case1.11' + await com.getTime();               
                await td.SaveScreenshot(path, imgname);
                return td.getEleTxtBySelecter(page_config.signUp.repeattext).then(function (res) {
                    td.checkResult('equal', String(res[0]).trim(), testdata.signup.expectMsg.repeataccount);
                });
            }catch (error) {
                console.log(error);
            }

        });

        step('#1.12 verify Third-party account', async function () {
            //只有线上环境的第三方帐号才能用
            try {
                await td.waitpage(2000);
                
            } catch (error) {
                console.log(error);
            }

        });

    });
}

