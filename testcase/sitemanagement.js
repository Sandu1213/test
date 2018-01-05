'use strict';
const dev = require('../common/dev');
//const com = require('../common/common_method');
const extend_method = require('../common/extend_method');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
let ext = new extend_method(dev.driver);
let page_config = require('./page_elements');
let testdata = require('./data/test_data');
let sites = 0;  //网站数量
const ts = require('../testcase/testscope');

module.exports = async function siteManagementTest() {
    describe("SiteManagement test",async function() {
        this.timeout(0);
        before(async function() {
            await td.clickBylocator(page_config.homepage.signinbtn, 2000);
            await td.waitpage(2000);
            await ext.login(testdata.signIn.account.username, testdata.signIn.account.password);
            await td.waitpage(5000);
            await ext.switchMenu('siteManagement');
            await td.waitpage(5000);
        });

        step("#4.1 the siteNum validate and collect the siteinfo ", async function() {
            try {
                await td.SaveScreenshot('report/image/' + dev.date + '/', 'siteNum'+dev.time);
                let siteNum = await ext.getCurrentWebsiteNum(); //获取当前网站的数量               
                sites = siteNum;
                if (sites > 0){
                    let sitearr = await ext.getWebsiteInfo(sites);
                    console.log("序号     站点名称   站点地址   创建时间");
                    sitearr.forEach(function (value, index) {
                        console.log('NO.' + (index + 1) + ': ' + value.name + ' ' + value.address + ' ' + value.date);
                    });
                }else{
                    console.log('you need to create site first!');
                }
            } catch (error) {
                throw new Error(error);
            }
            
        });

        step("#4.2 the private site Num validate", async function () {
            if(sites > 0){
                let sign = await ext.getPrivateWebsite(sites);
                console.log('The private sites Num is ' + sign.num +'\n');
                if(sign.num > 0){                    
                    sign.details.forEach(function (value) {
                        console.log("The sites is " + value);
                    });
                }               
            }else{
                console.log('the site Num is zero, please try again later.')
            }

        });

        step("#4.3  create a new site", async function () {
            let site = await ext.getWebsiteInfo(1);
            for(let index in site){
               if(String(site[index].address).slice(-2) == '11'){
                   let loc = page_config.mysite.operation.remove;
                   await ext.delWebsite(loc);
                   await td.waitpage(2000);
                   sites = sites - 1;
                }                
            }           
            let sitename = testdata.sites.sitename; //目的是默认让最新的网站排在第一位便于核对(也可随机自定义，但后续校验需要调整下)
            await td.clickBylocator(page_config.mysite.create);
            await td.waitpage(2000);
            await ext.selectTemplates(page_config.tmppage.personal.key, page_config.tmppage.personal.contains.blank.select, sitename); 
            await td.getElement(page_config.tmppage.domain.checksuccess);
        });
        
        step("#4.4 check the site Num again", async function () {            
            await ext.switchMenu('siteManagement');
            await td.waitpage(2000);
            let newNUM = await ext.getCurrentWebsiteNum();            
            return td.checkResult('equal', newNUM, String(Number(sites)+1));
        });  
        
        step("#4.5 check the site Info", async function () {
            let site = await ext.getWebsiteInfo(1);
            let address = 'keepwork.com/' + testdata.signIn.account.username + '/' + testdata.sites.sitename;
            return site.forEach(function(val) {
                td.checkResult('equal', val.name, testdata.sites.sitename);
                td.checkResult('equal', val.address, address);
                //td.checkResult('equal', val.date, dev.date);
            });

        });

        step("#4.6  access the new site and check the content", async function () {           
            await td.clickBylocator(page_config.mysite.operation.see);
            await td.waitpage(1000);
            let current_window = dev.driver.getWindowHandle();
            await td.switchToNewWindow(current_window.value_);
            await ext.checkPreviewResult(page_config.mysite.checkpage.first, testdata.sites.check.pageval);
            let imgname = 'newsitecontent' + dev.time;
            await td.SaveScreenshot('report/image/' + dev.date + '/', imgname);
            await td.waitpage(2000);
            await td.closeNewwindow();
            await td.waitpage(1000);
            await td.switchToDefaultWindow(current_window.value_);
           
        });

        step("#4.7  modify the site default content", async function () {
            await td.clickBylocator(page_config.mysite.operation.edit);
            await td.waitpage(5000);
            let content = testdata.sites.content;
            await ext.AddSiteContent(content);
            await td.waitpage(2000);
            await td.getElementText(page_config.mysite.editArea.saveSuccess).then(function (values) {
                td.checkResult('equal', values, testdata.sites.saveResult.success);
            }); 
            await td.clickBylocator(page_config.mysite.editArea.backtoPersonalpage);
            await td.waitpage(2000);
        });
        
        step("#4.8  access the new site again and check the modify content", async function () {
            await ext.switchMenu('siteManagement');
            await td.waitpage(5000);
            await td.clickBylocator(page_config.mysite.operation.see);
            await td.waitpage(2000);            
            let current_window = dev.driver.getWindowHandle();
            await td.switchToNewWindow(current_window.value_);
            await ext.checkPreviewResult(page_config.mysite.checkpage.second, testdata.sites.check.pagevalagain);
            let imgname = 'modifycontent' + dev.time;
            await td.SaveScreenshot('report/image/' + dev.date + '/', imgname);
            await td.waitpage(2000);
            await td.closeNewwindow();
            await td.waitpage(1000);
            await td.switchToDefaultWindow(current_window.value_);
            
        });

        // step("#4.9 setup the site ", async function () {            
        //     await ts.siteSetupTest();
        // });
        
        step("#4.10 delete the site", async function () {
            let loc = page_config.mysite.operation.remove;
            let ops = 'cancel';
            //先取消删除再进行删除操作
            await ext.delWebsite(loc,ops);
            await ext.delWebsite(loc);
        });

        step("#4.11 check the site Num again", async function () {
           await td.waitpage(2000);
           let newNUM = await ext.getCurrentWebsiteNum();
           console.log('After Del , the siteNum is ' + sites);
           return td.checkResult('equal',newNUM,String(sites));
        });

        after(async function () {            
            await td.waitpage(1000);
            await ext.logout();
        });

    });
};