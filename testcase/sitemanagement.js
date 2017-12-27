'use strict';
const dev = require('../common/dev');
//const com = require('../common/common_method');
const extend_method = require('../common/extend_method');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
let ext = new extend_method(dev.driver);
let page_config = require('./page_elements');
let testdata = require('./data/test_data');

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
                let siteNum = await ext.getCurrentWebsiteNum();
                let sitearr = await ext.getWebsiteInfo(10);
                
                console.log("序号     站点名称   站点地址   创建时间");
                sitearr.forEach(function(value,index){
                    console.log('NO.' + (index + 1) + ': ' + value.name + ' '+ value.address + ' '+ value.date );
                });
                
            } catch (error) {
                throw new Error(error);
            }
            
        });

        step("#4.2 the private site Num validate", async function () {
            

        });

        step("#4.3 delete the site", async function () {
            let loc = { "css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(4)" };
            let ops = 'cancel';
            await ext.delWebsite(loc,ops);
            await ext.delWebsite(loc);
            
        });

        step("#4.4 check the site Num again", async function () {
           await td.waitpage(2000);
           let newNUM = await ext.getCurrentWebsiteNum();
           return td.checkResult('equal',newNUM,'45');

        });

        step("#4.5  create a new site", async function () {
            let sitename = '11'; 
            await td.clickBylocator(page_config.mysite.create);
            await ext.selectTemplates(page_config.tmppage.personal.key, page_config.tmppage.personal.contains.basic.select, sitename); 
            await td.getElement(page_config.tmppage.domain.checksuccess);
        });
        
        step("#4.6  check the site Num again", async function () {
            
            await ext.switchMenu('siteManagement');
            await td.waitpage(3000);
            let newNUM = await ext.getCurrentWebsiteNum();
            return td.checkResult('equal', newNUM, '46');
        });  
        
        step("#4.7 check the site Info", async function () {


        });

        step("#4.8 set the site setup", async function () {


        });

        step("#4.9  modify the site default content", async function () {


        });
        
        step("#4.10  access the site", async function () {
            let loc = { "css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(1)" };
            await td.clickBylocator(loc);

        });

        

        

        

    });
};