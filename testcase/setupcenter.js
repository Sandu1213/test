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
        
       
        step('#5.1 modify user profile', async function () {
            await ext.switchTabpage(page_config.setupCenter.profile.key);
            // let profilepage = [page_config.setupCenter.profile.nickname,p]
            // let profileinfo = []
            let path = await td.getSyspath();
            let Bool = await td.isWindows();
            console.log("platform is " + Bool + ";path is " + path);

            let file = testdata.sites.setup1.windowicon_path;
            let pic = (Bool) ? file : (file.replace(/\\/gi,'/'));
            let imgsrc = path + pic;
            await console.log(imgsrc);
            //await ext.uploadRemoteFile(loc, imgsrc);
            await td.waitpage(10000);
            //await td.submitData();
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



