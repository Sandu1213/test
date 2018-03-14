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
            await td.waitpage(2000);
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
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.overIntro);
            });
            //验证正常的个人简介情况
            data = testdata.setupcenter.profile.intro.valid;
            await td.submitData(profilepage, data);
            await td.waitpage(2000);
            await td.getElementText(page_config.setupCenter.profile.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.profile.checkRes.savesuccess);
            }); 
        });

        // step('#5.2 check the profile info ', async function () {

        // });

        //详细验证还可以补充（如：输入值的验证)
        step('#5.3 the new password and check ', async function () {
            await td.clickBylocator(page_config.setupCenter.security.key);
            let locs = [page_config.setupCenter.security.pwdTab.oldpwd, page_config.setupCenter.security.pwdTab.newpwd,
                page_config.setupCenter.security.pwdTab.repeatpwd, page_config.setupCenter.security.pwdTab.modifybtn];
            let data = [testdata.setupcenter.security.pwdTab.info.oldpwd.real, testdata.setupcenter.security.pwdTab.info.newpwd.vaild, testdata.setupcenter.security.pwdTab.info.repwd.vaild];
            await td.submitData(locs,data);
            await td.getElementText(page_config.setupCenter.security.Result).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.security.pwdTab.notices.success);
            });
            //验证修改密码是否生效
            await ext.logout();
            await ext.login(testdata.signIn.account.username, testdata.setupcenter.security.pwdTab.info.oldpwd.real);
            return td.getElementText(page_config.homepage.checktext).then(function (actval) {
                td.checkResult('equal', actval, testdata.signIn.expectMsg.invalidpassword);
            });        
        });

        step('#5.4 the old password and check ', async function () {
            await ext.login(testdata.signIn.account.username, testdata.setupcenter.security.pwdTab.info.newpwd.vaild);
            await ext.switchMenu('setupCenter');
            await td.clickBylocator(page_config.setupCenter.security.key);
            let locs = [page_config.setupCenter.security.pwdTab.oldpwd, page_config.setupCenter.security.pwdTab.newpwd,
                page_config.setupCenter.security.pwdTab.repeatpwd, page_config.setupCenter.security.pwdTab.modifybtn];
            let data = [testdata.setupcenter.security.pwdTab.info.newpwd.vaild, testdata.setupcenter.security.pwdTab.info.oldpwd.real, testdata.setupcenter.security.pwdTab.info.oldpwd.real];
            await td.submitData(locs, data);
            await td.getElementText(page_config.setupCenter.security.Result).then(function (values) {
                td.checkResult('contain', values, testdata.setupcenter.security.pwdTab.notices.success);
            });
            await ext.logout();
            //验证修改密码是否生效
            await ext.login(testdata.signIn.account.username, testdata.setupcenter.security.pwdTab.info.newpwd.vaild);
            await td.getElementText(page_config.homepage.checktext).then(function (actval) {
                td.checkResult('equal', actval, testdata.signIn.expectMsg.invalidpassword);
            });  
            await ext.login(testdata.signIn.account.username, testdata.setupcenter.security.pwdTab.info.oldpwd.real);    
            await td.waitpage(1000);
            await td.getElement(page_config.signIn.signsuccess);   
            await ext.logout();            
        });

        step('#5.5 binding the telephone and unbind ', async function () {
            //登入绑定手机号的账户
            await td.clickBylocator(page_config.homepage.signinbtn);
            await ext.login(testdata.signIn.bindaccount.mobile,testdata.signIn.account.password);
            await ext.switchMenu('setupCenter');
            await td.clickBylocator(page_config.setupCenter.security.key);
            await td.clickBylocator(page_config.setupCenter.security.bindTab.key);
            //先解绑
            await td.clickBylocator(page_config.setupCenter.security.bindTab.mobile.unbindbtn);
            await ext.bindpage(testdata.setupcenter.security.bindTab.mobile.smsCode);
            //解绑成功后验证
            await ext.logout();
            await ext.login(testdata.signIn.bindaccount.mobile, testdata.signIn.account.password);
            return td.getElementText(page_config.homepage.checktext).then(function (actval) {
                td.checkResult('equal', actval, testdata.signIn.expectMsg.invalidaccount);
            });             
        });

        step('#5.6 binding the telephone and unbind ', async function () {
            //登入需要重新绑定的账户
            await ext.login(testdata.signIn.bindaccount.email, testdata.signIn.account.password);
            await ext.switchMenu('setupCenter');
            await td.clickBylocator(page_config.setupCenter.security.key);
            await td.clickBylocator(page_config.setupCenter.security.bindTab.key);
            //再重新绑定
            let locs = [page_config.setupCenter.security.bindTab.mobile.text, page_config.setupCenter.security.bindTab.mobile.bindbtn];
            let data = testdata.setupcenter.security.bindTab.mobile.phoneNum;
            console.log('data is ' + data);
            await td.submitData(locs, data);
            await td.waitpage(1000);
            await ext.bindpage(testdata.setupcenter.security.bindTab.mobile.smsCode);
            //绑定成功后验证
            await ext.logout();
            await ext.login(testdata.signIn.bindaccount.mobile, testdata.signIn.account.password);
            await td.waitpage(2000);
            await td.getElement(page_config.signIn.signsuccess);     
        });


        after(async function () {
            await td.waitpage(1000);
            await ext.logout();
        });
    });
};



