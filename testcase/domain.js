/**
 * Create on 2017/12/08
 * Author : Duke
 * Description: verify function create website
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
let path = 'report/image/' + dev.date + '/';

let filename = 'account.txt';


module.exports = async function domainTest() {

    describe('create website test', async function () {
        this.timeout(0);
        before(async function () {
            await td.clickBylocator(page_config.homepage.signinbtn, 2000);
            await td.waitpage(2000);
            await ext.login(testdata.signIn.account.username,testdata.signIn.account.password);
            await td.waitpage(3000);
           
        });

        step('#3.1.1  check blank-templates  ', async function () {

            try {
                await ext.enterDomain();                
                let current_window = dev.driver.getWindowHandle();
                await ext.tmppreview(page_config.tmppage.personal.key, page_config.tmppage.personal.contains.blank.select,
                    page_config.tmppage.personal.contains.blank.preview);
                
                await td.switchToNewWindow(current_window.value_);                                
                await ext.checkPreviewResult(page_config.tmppage.personal.contains.blank.Prepagecheck,
                    testdata.tmppage.personal.blankpage);
                let imgname = 'blankpreview' + com.getTime();
                await td.SaveScreenshot(path, imgname);
                await td.waitpage(2000);
                await td.closeNewwindow();                
                await td.switchToDefaultWindow(current_window.value_);
                
                
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.1.2 create blank-templates site ', async function () {

            try { 
                
                let sitename = 'blank' + String(com.GenStr(3,'alphanumeric')).toLowerCase();
                console.log('sitename: ' + sitename);
                await ext.selectTemplates(page_config.tmppage.personal.key,page_config.tmppage.personal.contains.blank.select,sitename);
                
                // if(td.getElement(page_config.realNamepage.title)){
                    // await ext.realName(testdata.realName.cellphone,'1234');
                // }

                let imgname = 'case3.1.2' + com.getTime();                
                await td.SaveScreenshot(path, imgname);                
                return td.getElement(page_config.tmppage.domain.checksuccess);
               
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.2.1 check basic-templates  ', async function () {

            try {
                await ext.enterDomain();
                let current_window = dev.driver.getWindowHandle();
                await ext.tmppreview(page_config.tmppage.personal.key, page_config.tmppage.personal.contains.basic.select,
                    page_config.tmppage.personal.contains.basic.preview);
                
                await td.switchToNewWindow(current_window.value_);
                await ext.checkPreviewResult(page_config.tmppage.personal.contains.basic.Prepagecheck,
                    testdata.tmppage.personal.basicpage);
                let imgname = 'basicpreview' + com.getTime();                
                await td.SaveScreenshot(path, imgname);                
                await td.waitpage(2000);
                await td.closeNewwindow();
                await td.waitpage(1000);
                await td.switchToDefaultWindow(current_window.value_);
                
                
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.2.2 create basic-templates site', async function () {
            try {
                //await ext.enterDomain();
                let sitename = 'basic' + String(com.GenStr(3, 'alphanumeric')).toLowerCase();
                console.log('sitename: '+ sitename);
                await ext.selectTemplates(page_config.tmppage.personal.key,page_config.tmppage.personal.contains.basic.select, sitename);                 
                await console.log("filename32 is" + imgname);
                await td.SaveScreenshot(path, imgname);
                return td.getElement(page_config.tmppage.domain.checksuccess);
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.3.1 check resume-templates  ', async function () {

            try {
                await ext.enterDomain();
                let current_window = dev.driver.getWindowHandle();
                await ext.tmppreview(page_config.tmppage.personal.key, page_config.tmppage.personal.contains.resume.select,
                    page_config.tmppage.personal.contains.resume.preview);
                
                await td.switchToNewWindow(current_window.value_);
                await ext.checkPreviewResult(page_config.tmppage.personal.contains.resume.Prepagecheck,
                    testdata.tmppage.personal.resumepage);
                let imgname = 'resumepreview' + com.getTime();
                await td.SaveScreenshot(path, imgname);
                
                await td.waitpage(2000);
                await td.closeNewwindow();
                await td.waitpage(1000);
                await td.switchToDefaultWindow(current_window.value_);
                

            } catch (error) {
                console.log(error);
            }

        });

        step('#3.3.2 create resume-templates site', async function () {

            try {
                let sitename = 'resume' + String(com.GenStr(3, 'alphanumeric')).toLowerCase();
                await ext.selectTemplates(page_config.tmppage.personal.key,page_config.tmppage.personal.contains.resume.select, sitename);             
                
                let imgname = 'case3.3.2' + com.getTime();                
                await td.SaveScreenshot(path, imgname);
                return td.getElement(page_config.tmppage.domain.checksuccess);
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.4.1 check vip-templates  ', async function () {

            try {
                await ext.enterDomain();
                let current_window = dev.driver.getWindowHandle();
                await ext.tmppreview(page_config.tmppage.personal.key, page_config.tmppage.personal.contains.vip.select,
                    page_config.tmppage.personal.contains.vip.preview);
                
                await td.switchToNewWindow(current_window.value_);
                
                await ext.checkPreviewResult(page_config.tmppage.personal.contains.vip.Prepagecheck,
                   testdata.tmppage.personal.vippage);
                let imgname = 'vippreview' + com.getTime();
                await td.SaveScreenshot(path, imgname);
                await td.waitpage(2000);
                await td.closeNewwindow();
                await td.waitpage(1000);
                await td.switchToDefaultWindow(current_window.value_);
                

            } catch (error) {
                console.log(error);
            }

        });

        step('#3.4.2 create vip-templates site', async function () {

            try {
               
                let sitename = 'vip' + String(com.GenStr(3, 'alphanumeric')).toLowerCase();                
                await ext.selectTemplates(page_config.tmppage.personal.key,page_config.tmppage.personal.contains.vip.select,sitename);
                let imgname = 'case3.4.2' + com.getTime();               
                await td.SaveScreenshot(path, imgname);
               
                return td.getElement(page_config.tmppage.domain.checksuccess);
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.5.1 check company1-templates  ', async function () {

            try {
                await ext.enterDomain();
                let current_window = dev.driver.getWindowHandle();
                await ext.tmppreview(page_config.tmppage.company.key, page_config.tmppage.company.contains.company1.select,
                    page_config.tmppage.company.contains.company1.preview);
                
                await td.switchToNewWindow(current_window.value_);                
                await ext.checkPreviewResult(page_config.tmppage.company.contains.company1.Prepagecheck,
                    testdata.tmppage.company.prepage1);
                let imgname = 'company1preview' + com.getTime();
                await td.SaveScreenshot(path, imgname);
                await td.waitpage(2000);
                await td.closeNewwindow();
                await td.waitpage(1000);
                await td.switchToDefaultWindow(current_window.value_);


            } catch (error) {
                console.log(error);
            }

        });

        step('#3.5.2 create company1-templates site', async function () {

            try {                
                let sitename = 'company1' + String(com.GenStr(3, 'alphanumeric')).toLowerCase();                
                await ext.selectTemplates(page_config.tmppage.company.key,page_config.tmppage.company.contains.company1.select, sitename);
                let imgname = 'case3.5.2' + com.getTime();               
                await td.SaveScreenshot(path, imgname);
                return td.getElement(page_config.tmppage.domain.checksuccess);
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.6.1 check company2-templates  ', async function () {

            try {
                await ext.enterDomain();
                let current_window = dev.driver.getWindowHandle();
                await ext.tmppreview(page_config.tmppage.company.key, page_config.tmppage.company.contains.company2.select,
                    page_config.tmppage.company.contains.company2.preview);
               
                await td.switchToNewWindow(current_window.value_);                
                await ext.checkPreviewResult(page_config.tmppage.company.contains.company2.Prepagecheck,
                    testdata.tmppage.company.prepage2);
                let imgname = 'company2preview' + com.getTime();
                await td.SaveScreenshot(path, imgname);
                await td.waitpage(2000);
                await td.closeNewwindow();
                await td.waitpage(1000);
                await td.switchToDefaultWindow(current_window.value_);


            } catch (error) {
                console.log(error);
            }

        });
        
        step('#3.6.2 create company2-templates site', async function () {

            try {
                let sitename = 'company2' + String(com.GenStr(3, 'alphanumeric')).toLowerCase();                
                await ext.selectTemplates(page_config.tmppage.company.key,page_config.tmppage.company.contains.company2.select, sitename);
                let imgname = 'case3.6.2' + com.getTime();               
                await td.SaveScreenshot(path, imgname);

                return td.getElement(page_config.tmppage.domain.checksuccess);
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.7.1 check group-templates  ', async function () {

            try {
                await ext.enterDomain();
                let current_window = dev.driver.getWindowHandle();
                await ext.tmppreview(page_config.tmppage.group.key, page_config.tmppage.group.contains.group.select,
                    page_config.tmppage.group.contains.group.preview);                
                await td.switchToNewWindow(current_window.value_);
                
                await ext.checkPreviewResult(page_config.tmppage.group.contains.group.Prepagecheck,
                    testdata.tmppage.group.prepage);
                let imgname = 'grouppreview' + com.getTime();
                await td.SaveScreenshot(path, imgname);
                await td.waitpage(2000);
                await td.closeNewwindow();
                await td.waitpage(1000);
                await td.switchToDefaultWindow(current_window.value_);

            } catch (error) {
                console.log(error);
            }

        });

        step('#3.7.2 create group-templates site', async function () {

            try {
                let sitename = 'group' + String(com.GenStr(3, 'alphanumeric')).toLowerCase();                
                await ext.selectTemplates(page_config.tmppage.group.key,page_config.tmppage.group.contains.group.select, sitename);
                let imgname = 'case3.7.2' + com.getTime();                
                await td.SaveScreenshot(path, imgname);

                return td.getElement(page_config.tmppage.domain.checksuccess);
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.8.1 check game-templates  ', async function () {

            try {
                await ext.enterDomain();
                let current_window = dev.driver.getWindowHandle();
                await ext.tmppreview(page_config.tmppage.game.key, page_config.tmppage.game.contains.game.select,
                    page_config.tmppage.game.contains.game.preview);                
                await td.switchToNewWindow(current_window.value_);
                
                await ext.checkPreviewResult(page_config.tmppage.game.contains.game.Prepagecheck,
                    testdata.tmppage.game.prepage);
                let imgname = 'gamepreview' + com.getTime();
                await td.SaveScreenshot(path, imgname);
                await td.waitpage(2000);
                await td.closeNewwindow();
                await td.waitpage(1000);
                await td.switchToDefaultWindow(current_window.value_);


            } catch (error) {
                console.log(error);
            }

        });

        step('#3.8.2 create game-templates site', async function () {

            try {
                let sitename = 'game' + String(com.GenStr(3, 'alphanumeric')).toLowerCase();                
                await ext.selectTemplates(page_config.tmppage.game.key,page_config.tmppage.game.contains.game.select, sitename);
                let imgname = 'case3.8.2' + com.getTime();                
                await td.SaveScreenshot(path, imgname);

                return td.getElement(page_config.tmppage.domain.checksuccess);
            } catch (error) {
                console.log(error);
            }

        });

        step('#3.9 create course-templates site', async function () {

            try {
                await ext.enterDomain();
                let current_window = dev.driver.getWindowHandle();
                let sitename = 'course' + String(com.GenStr(3, 'alphanumeric')).toLowerCase();
                await td.clickBylocator(page_config.tmppage.course.key);
                await td.waitpage(1000);
                await td.clickBylocator(page_config.tmppage.course.contains.course.select);
                await td.waitpage(500);
                await td.clickBylocator(page_config.tmppage.domain.next);
                await td.waitpage(5000);
                await td.switchToIFrame(td.getElement(page_config.tmppage.course.contains.course.iframe));
                await td.waitpage(2000);
                await td.clickBylocator(page_config.tmppage.course.contains.course.login);
                await td.waitpage(2000);
                let allwindows = await dev.driver.getAllWindowHandles();
                //await console.log(current_window.value_);
                //await console.log("---------------------");
                //await console.log(allwindows);
                allwindows.forEach(function(window) {
                    //console.log("window is " + window);
                    if (window != current_window.value_)
                    {
                        //console.log("switch is " + window);
                        dev.driver.switchTo().window(window);
                    }
                });
                await ext.login('test001','123456');
                await td.waitpage(6000);
                await td.clickBylocator(page_config.tmppage.course.contains.course.agree_btn);
                await td.waitpage(1000);
                await dev.driver.switchTo().window(current_window);
                await td.waitpage(1000);
                await td.switchToIFrame(td.getElement(page_config.tmppage.course.contains.course.iframe));
                await td.clickBylocator(page_config.tmppage.course.contains.course.close_btn);
                await td.waitpage(1000);
                let imgname = 'case3.9' + com.getTime();
                //await console.log("filename39 is" + imgname);
                await td.SaveScreenshot(path, imgname);
                
                return td.getElement(page_config.tmppage.course.checksuccess1);
            } catch (error) {
                console.log(error);
            }


        });
        
        after(async function () {
            await td.switchToMainpage();
            await td.waitpage(1500);
            await dev.driver.navigate().back();
            await dev.driver.navigate().back();
            await dev.driver.navigate().back();
            await td.waitpage(2000);
            await ext.logout();
        });

    });
}

