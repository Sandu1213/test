/**
 *  create by Duke (2018/01/15)
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

module.exports = async function userCenterTest() {
    describe('setupcenter validate', async function () {
        this.timeout(0);
        before(async function () {
            await td.clickBylocator(page_config.homepage.signinbtn, 2000);
            await td.waitpage(2000);
            await ext.login(testdata.signIn.account.username, testdata.signIn.account.password);
            await td.waitpage(5000);
            await ext.switchMenu('setupCenter');
            await td.waitpage(2000);
        });
        
       
        step('#5.1.1 modify user profile - avatar', async function () {
            //await ext.switchTabpage(page_config.setupCenter.profile.key); 
            console.log('kkkkkkkkkkkkkkkkkkkkkk');
            let loc = page_config.setupCenter.profile.inputavatar;           
            let file = testdata.setupcenter.profile.avatar;   
            let path = await td.getSyspath();
            let Bool = await td.isWindows();
            //let file = file;
            let pic = (Bool) ? file : (file.replace(/\\/gi, '/'));
            let imgsrc = path + pic;
            console.log('img' + imgsrc);
            await ext.uploadRemoteFile(loc, imgsrc);         
            //await ext.setAvatar(loc,file);
            console.log("======")
            await td.clickBylocator(page_config.setupCenter.profile.saveavatarbtn);
            await td.waitpage(1000);
            await td.clickBylocator(page_config.setupCenter.profile.Savebtn);
            await td.waitpage(2000);
            await td.getElementText(page_config.setupCenter.profile.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.savesuccess);
            }); 
        });

        step('#5.1.2 modify user profile - nickname', async function () { 
            //验证不符合要求的昵称
            let profilepage = [page_config.setupCenter.profile.nickname, page_config.setupCenter.profile.Savebtn];
            let data = testdata.setupcenter.profile.nickname.invalid;
            await td.submitData(profilepage,data);
            await td.waitpage(1000);
            await td.getElementText(page_config.setupCenter.profile.notice).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.warning);
            }); 
            //验证符合要求的昵称
            data = testdata.setupcenter.profile.nickname.valid;
            await td.submitData(profilepage, data);
            await td.waitpage(2000);
            await td.getElementText(page_config.setupCenter.profile.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.savesuccess);
            }); 
        });

        step('#5.1.3 modify user profile - sex', async function () {
            //设置性别为男性           
            await td.clickBylocator(page_config.setupCenter.profile.sex.male);
            await td.clickBylocator(page_config.setupCenter.profile.Savebtn)
            await td.waitpage(2000);
            await td.getElementText(page_config.setupCenter.profile.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.savesuccess);
            });
            //设置性别为女性          
            await td.clickBylocator(page_config.setupCenter.profile.sex.female);
            await td.clickBylocator(page_config.setupCenter.profile.Savebtn)
            await td.waitpage(2000);
            await td.getElementText(page_config.setupCenter.profile.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.savesuccess);
            });
            //设置性别为保密                     
            await td.clickBylocator(page_config.setupCenter.profile.sex.secrecy);
            await td.clickBylocator(page_config.setupCenter.profile.Savebtn)
            await td.waitpage(2000);
            await td.getElementText(page_config.setupCenter.profile.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.savesuccess);
            });
        });

        step('#5.1.4 modify user profile - position', async function () {
            //验证不符合要求的位置情况
            let profilepage = [page_config.setupCenter.profile.position, page_config.setupCenter.profile.Savebtn]
            let data = testdata.setupcenter.profile.position.invalid;
            await td.submitData(profilepage, data);
            await td.waitpage(1000);
            await td.getElementText(page_config.setupCenter.profile.notice).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.warning);
            });
            //验证位置超限的情况
            data = testdata.setupcenter.profile.position.overlimit;
            await td.submitData(profilepage, data);
            await td.waitpage(1000);
            await td.getElementText(page_config.setupCenter.profile.overPos).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.overPosition);
            }); 
            //验证正常的位置情况
            data = testdata.setupcenter.profile.position.valid;
            await td.submitData(profilepage, data);
            await td.waitpage(1000);
            await td.getElementText(page_config.setupCenter.profile.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.savesuccess);
            }); 
        });

        step('#5.1.5 modify user profile - intro', async function () {
            //验证不符合要求的个人简介情况
            let profilepage = [page_config.setupCenter.profile.intro, page_config.setupCenter.profile.Savebtn]
            let data = testdata.setupcenter.profile.intro.invalid;
            await td.submitData(profilepage, data);
            await td.waitpage(1000);
            await td.getElementText(page_config.setupCenter.profile.notice).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.warning);
            });
            //验证个人简介超限的情况
            data = testdata.setupcenter.profile.intro.overlimit;
            await td.submitData(profilepage, data);
            await td.waitpage(1000);
            await td.getElementText(page_config.setupCenter.profile.overIntro).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.overPosition);
            });
            //验证正常的个人简介情况
            data = testdata.setupcenter.profile.intro.valid;
            await td.submitData(profilepage, data);
            await td.waitpage(1000);
            await td.getElementText(page_config.setupCenter.profile.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.savesuccess);
            }); 
        });

        step('#5.2 check the profile info ', async function () {

        });

        step('#5.3 modify the password  and check ', async function () {

        });

        step('#5.4 modify the password ', async function () {

        });

        after(async function () {
            // await td.waitpage(1000);
            // await ext.logout();
        });
    });
};



