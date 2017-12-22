'use strict';
const dev = require('../common/dev');
const extend_method = require('../common/extend_method');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
let ext = new extend_method(dev.driver);
let page_config = require('./page_elements');
let testdata = require('./data/test_data');

module.exports = async function domainTest() {
    describe("SiteManagement test",async function() {
        this.timeout(0);
        before(async function() {
            await td.clickBylocator(page_config.homepage.signinbtn, 2000);
            await td.waitpage(2000);
            await ext.login(1, testdata.signIn.account.username, testdata.signIn.account.password);
            await td.waitpage(5000);
            await ext.switchMenu('siteManagement');
            await td.waitpage(5000);
        });

        step("#4.1 the siteNum validate", async function() {
            await td.getElementText(page_config.mysite.siteNum).then(function(val){
                console.log("the site is "+ val);
                td.SaveScreenshot('report/image/' + dev.date + '/','siteNum.png');
            });

            let sitearr= await td.getElementsText(page_config.mysite.siteName);
                
                console.log(sitearr.length);
                console.log('sitearr is ' + sitearr);
                // sitearr.forEach(sitename => {
                //     console.log("NO." + index + ": sitename is " + sitename );
                // });
            
        });

        step("#4.2 the private site Num validate", async function () {
            

        });

        step("#4.3  get the site info ", async function () {
            

        });

    });
};