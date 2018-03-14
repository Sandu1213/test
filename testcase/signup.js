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

const page_config = require('./config/data/page_elements');
const testdata = require('./config/data/test_data');
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

        step('#1.1 verify all info is empty', async function () {

            try {  
                await ext.SignUp(testdata.signup.emptyaccount.username, testdata.signup.emptyaccount.password, testdata.signup.emptyaccount.cellphone);
                let imgname = 'case1.1' + await com.getTime();               
                await td.SaveScreenshot(path, imgname);  
                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (values) {                    
                    if(Array.isArray(values)){
                        for(let i in values){
                            console.log("index is "+ i);
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.emptyAllinfo[i]);
                        }
                    }
                });                
            } catch (error) {
                console.log(error);
            }

        });
        
        step('#1.2 verify username is empty', async function () {
            try {                
                await ext.SignUp(testdata.signup.emptyaccount.username, testdata.signup.account.password, testdata.signup.account.cellphone[0]);
                let imgname = 'case1.2' + await com.getTime();               
                await td.SaveScreenshot(path, imgname);
                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.emptyAccountinfo[i]);
                        }
                    }
                });                
            } catch (error) {
                console.log(error);
            }

        });
        
        step('#1.3 verify username rules', async function () {

            try {
                await ext.SignUp(testdata.signup.accountrules.username, testdata.signup.account.password, testdata.signup.account.cellphone[0]);                
                let imgname = 'case1.3' + await com.getTime();
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.rulesinfo[i]);
                        }
                    }
                });          
            } catch (error) {
                console.log(error);
            }

        });

        
        step('#1.4 verify username is Number', async function () {

            try {
                await ext.SignUp(testdata.signup.numberaccount.username, testdata.signup.account.password, testdata.signup.account.cellphone[0]);
                let imgname = 'case1.4' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.numAccountinfo[i]);
                        }
                    }
                });   
            } catch (error) {
                console.log(error);
            }

        });


        step('#1.5 verify username contain the sensitive word ', async function () {
            try {
                await ext.SignUp(testdata.signup.invalidaccount.username, testdata.signup.account.password, testdata.signup.account.cellphone[0]);
                let imgname = 'case1.5' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.filteraccountinfo[i]);
                        }
                    }
                });
            } catch (error) {
                console.log(error);
            }
        });

        step('#1.6 verify username length is over limit ', async function () {
            try {

                let username = 'test' + com.GenStr(30);
                let password = 'pwd' + com.GenStr(6);
                let content = username + '/' + password + '\n';
                console.log('Account info is ' + content);

                await ext.SignUp(username, password, testdata.signup.account.cellphone[0]);
                let imgname = 'case1.6' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.overaccount[i]);
                        }
                    }
                });
            } catch (error) {
                console.log(error);
            }
        });

        step('#1.7 verify password is empty', async function () {

            try {
                await ext.SignUp(testdata.signup.account.username, testdata.signup.emptyaccount.password, testdata.signup.account.cellphone[0]);               
                let imgname = 'case1.7' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.invaildpwd[i]);
                        }
                    }
                });
            } catch (error) {
                console.log(error);
            }

        });

        step('#1.8 verify password length', async function () {

            try {
                await ext.SignUp(testdata.signup.account.username, testdata.signup.invalidaccount.password, testdata.signup.account.cellphone[0]);
                let imgname = 'case1.8' + await com.getTime();                
                await td.SaveScreenshot(path, imgname);
                
                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.invaildpwd[i]);
                        }
                    }
                });
            }catch (error) {
                console.log(error);
            }

        });

        step('#1.9 verify invaild phone Number', async function () {

            try {
                await ext.getSMScode(testdata.signup.account.username, testdata.signup.account.password, testdata.signup.invalidaccount.cellphone);
                let imgname = 'case1.9' + await com.getTime();
                await td.SaveScreenshot(path, imgname);

                return td.getEleTxtBySelecter(page_config.signUp.checktext).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.vaildcellphone[i]);
                        }
                    }
                });
            } catch (error) {
                console.log(error);
            }

        });

        step('#1.10 verify has bound phone Number', async function () {

            try {
                await ext.getSMScode(testdata.signup.account.username, testdata.signup.account.password, testdata.signup.account.cellphone[0]);
                let locarr = [page_config.signUp.smsCode, page_config.signUp.signupbtn];
                let dataarr = testdata.signup.account.smsCode;                
                await td.submitData(locarr, dataarr, 1000);
                let imgname = 'case1.10' + await com.getTime();
                await td.SaveScreenshot(path, imgname);
                await td.waitpage(1000);
                return td.getEleTxtBySelecter(page_config.signUp.checkrepeatinfo).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.repeatphone);
                        }
                    }
                });
            } catch (error) {
                console.log(error);
            }

        });

        step('#1.11 verify invaild smsCode', async function () {

            try {
                await ext.getSMScode(testdata.signup.account.username, testdata.signup.account.password, testdata.signup.account.cellphone[3]);
                let locarr = [page_config.signUp.smsCode, page_config.signUp.signupbtn];
                let dataarr = testdata.signup.invalidaccount.smsCode;
                await td.submitData(locarr, dataarr, 1000);
                let imgname = 'case1.11' + await com.getTime();
                await td.SaveScreenshot(path, imgname);
                await td.waitpage(1000);
                return td.getEleTxtBySelecter(page_config.signUp.checkrepeatinfo).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.errorSMScode);
                        }
                    }
                });
            } catch (error) {
                console.log(error);
            }

        });

        step('#1.12 verify right account with back to Home page',async function () {

            try {
                let username = 'test' + com.GenStr(4);
                let password = testdata.signup.account.password;
                let content = username + '/' + password + '\n';
                console.log('Account info is ' + content);
                await com.saveFile(filename,content);
                await td.clickBylocator(page_config.homepage.signupbtn, 2000);
                await td.waitpage(3000);
                await ext.getSMScode(username, password, testdata.signup.account.cellphone[2]);
                let locarr = [page_config.signUp.smsCode, page_config.signUp.signupbtn];
                let dataarr = testdata.signup.account.smsCode;
                await td.submitData(locarr, dataarr, 1000);
                await td.waitpage(15000);
                await td.getElement(page_config.signUp.success);                
                await td.clickBylocator(page_config.signUp.backbtn);
                await td.waitpage(2000);
                //切换到绑定页面进行解绑，以便下一次再进行注册操作
                await ext.switchMenu('setupCenter');
                await td.clickBylocator(page_config.setupCenter.security.key);
                await td.clickBylocator(page_config.setupCenter.security.bindTab.key);
                //先解绑
                await td.clickBylocator(page_config.setupCenter.security.bindTab.mobile.unbindbtn);
                await ext.bindpage(testdata.setupcenter.security.bindTab.mobile.smsCode);
                //解绑成功后退出
                await ext.logout();
            }catch (error) {
                console.log(error);
            }

        });

        step('#1.13 verify right account with back to personal page',async function () {

            try {
                let username = 'test' + com.GenStr(4);
                let password = testdata.signup.account.password;
                let content = username + '/' + password + '\n';
                console.log('Account info is ' + content);
                await com.saveFile(filename, content);
                await td.clickBylocator(page_config.homepage.signupbtn, 2000);
                await td.waitpage(3000);
                await ext.getSMScode(username, password, testdata.signup.account.cellphone[2]);
                let locarr = [page_config.signUp.smsCode, page_config.signUp.signupbtn];
                let dataarr = testdata.signup.account.smsCode;
                await td.submitData(locarr, dataarr, 1000);
                await td.waitpage(15000);
                await td.getElement(page_config.signUp.success);
                await td.clickBylocator(page_config.signUp.gotohome);
                await td.waitpage(3000);
                //切换到绑定页面进行解绑，以便下一次再进行注册操作
                await ext.switchMenu('setupCenter');
                await td.clickBylocator(page_config.setupCenter.security.key);
                await td.clickBylocator(page_config.setupCenter.security.bindTab.key);
                //先解绑
                await td.clickBylocator(page_config.setupCenter.security.bindTab.mobile.unbindbtn);
                await ext.bindpage(testdata.setupcenter.security.bindTab.mobile.smsCode);
                //解绑成功后退出
                await ext.logout();
            }catch (error) {
                console.log(error);
            }
        });

        step('#1.14 verify duplicate account', async function () {

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
                await ext.getSMScode(username, password, testdata.signup.account.cellphone[3]);
                let locarr = [page_config.signUp.smsCode, page_config.signUp.signupbtn];
                let dataarr = testdata.signup.account.smsCode;
                await td.submitData(locarr, dataarr, 1000);               
                let imgname = 'case1.14' + await com.getTime();               
                await td.SaveScreenshot(path, imgname);
                await td.waitpage(1000);
                return td.getEleTxtBySelecter(page_config.signUp.checkrepeatinfo).then(function (values) {
                    if (Array.isArray(values)) {
                        for (let i in values) {
                            td.checkResult('equal', values[i], testdata.signup.expectMsg.repeataccount);
                        }
                    }
                });
            }catch (error) {
                console.log(error);
            }

        });

        after(async function () {
           //todo
        });

    });
}

