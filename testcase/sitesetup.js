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
let page_config = require('./page_elements');
let testdata = require('./data/test_data');

module.exports = async function siteSetupTest(){
    describe('site setup validate', async function () {
        this.timeout(0);
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
            sitename.forEach(function (values) {
                console.log("the Info is " + values);
            });
        });

        step('#4.9.2.1 modify the common settings - avatar', async function () {
            let loc = page_config.mysite.operation.setup.common.icon_input;            
            let path = process.cwd();
            let platform = process.platform;
            console.log("platform is "+ platform +";path is " + path);
            let imgsrc = path + testdata.sites.setup1.icon_path;
            await ext.uploadFile(loc, imgsrc);
            await td.clickBylocator(page_config.mysite.operation.setup.common.icon_save_btn);
            await td.waitpage(2000);
            await td.clickBylocator(page_config.mysite.operation.setup.common.savebtn);
            await td.waitpage(2000);
            await td.getElementText(page_config.mysite.operation.setup.common.saveResult).then(function (values) {
                td.checkResult('contain', values, testdata.sites.setup1.checkRes.savesuccess);
            }); 
        });

        step('#4.9.2.2 modify the common settings - sitename', async function () {           
            //验证设置不合理的网站名称(主要是关键字过滤相关)
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

        step('#4.9.2.4 modify the common settings - siteLabels', async function () {
            //验证设置错误的标签
            let loc = [page_config.mysite.operation.setup.common.sitelabels.input, page_config.mysite.operation.setup.common.sitelabels.addbtn];
            let data = testdata.sites.setup1.invalidsitelabels;
            let checkdata = testdata.sites.setup1.checkRes.savelabel;
            data.forEach(async function (value,index) {
                await console.log("value is " + value);
                await ext.setsiteLabels(loc, value);
                await td.waitpage(1000);
                await td.getElementText(page_config.mysite.operation.setup.common.sitelabels.check).then(function (values) {
                    td.checkResult('equal', values, checkdata[index]);
                });
                await td.waitpage(2000);
            });
            //验证设置正确的标签
            // let newdata = testdata.sites.setup1.sitelabels;
            // newdata.forEach(async function (value, index) {
            //     await ext.setsiteLabels(loc, value); 
            //     await td.waitpage(500);
            // });
            // // await td.checkResult('equal',a,"最多支持20个标签");
            // await td.clickBylocator(page_config.mysite.operation.setup.common.savebtn);
            // await td.waitpage(2000);
            // await td.getElementText(page_config.mysite.operation.setup.common.notice).then(function (values) {
            //     td.checkResult('equal', values, testdata.sites.setup1.checkRes.savesuccess);
            // });          
        });


        step('#4.9.3 setup again and check the result', async function () {
            
        });

        step('#4.9.4 verify the Datasource', async function () {

        });

        step('#4.9.5 the Domain name setup and validate', async function () {

        });

        step('#4.9.6 the permissions setup and validate', async function () {

        });
    });
};



