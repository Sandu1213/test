

/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: Automation Test entrance
 */
'use strict';
const dev = require('../common/dev');
const config = require('../config/config.json');
let driver = dev.driver;
let models = config.testScope;
let tag = 1;  //标识
let url = config.url;
if (String(process.argv[3]).includes('keepwork.com')){
    url = process.argv[3];
}

// let url = process.argv[3] || config.url;
console.log("test site is :" + url +"\n");
const ts = require('../testcase/testscope');
var chai = require('chai');
let expect = chai.expect;

function chooseModel(params) {
    switch (params) {
        case 'signupTest':
            ts.sigupTest();
            break;
        case 'loginTest':
            ts.loginTest();
            break;
        case 'domain':
            ts.domainTest();
            break;
        default:
            console.log('the model is not found~')
            break;
    }
}

describe('running test cases',async function(){
    this.timeout(0);  //5 * 60 * 1000
    
    before(async function () {
        try {
            await driver.manage().window().setPosition(200, 100); 
            //await driver.manage().window().setSize(1600,900);
            //await driver.manage().window().maximize(); //窗口最大化 (docker-chrome-debug是正常的)
            //driver.manage().timeouts().pageLoadTimeout(10000); //页面加载时长不能超过10s
            await driver.get(url);                      
            await driver.sleep(3000);
           
        } catch (error) {
            console.log(error);
        }
    });
     
    
        try { 
            // while(tag > 0){
            //     if(models.length > 0)
            //     {    
                       //let name = models.shift();
            //         console.log('name is ' + name +';')
                    await step('model Test', async function () {
                        
                        //await console.log("name "+name);
                        // await chooseModel(name); 
                        await ts.sigupTest();                      
                        await ts.loginTest();
                        await ts.domainTest(); 
                        //await ts.siteManagementTest();
                    });
            //     }else{
            //         tag = 0;
            //     }           
            // }
        }catch (error) {
            console.log(error);
        }
    
    
    
    after(function () {
        driver.quit();
    });

});  
    
   


