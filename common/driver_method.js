/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: 
 */
'use strict';
var webdriver = require('selenium-webdriver');
var fs = require('fs');
var until = webdriver.until;
var chai = require('chai');
let expect = chai.expect;
let mkdirp = require('mkdirp');

class driver_method{
    
	constructor(driver) {
        this.driver = driver;
        //this.args = args;       
    }
       
   /**
   	* @params locators --- findElement by locators (eg:webdriver.js#L885)
   	* @return elements info    
   	*/
    async getElement(locator, waitTime = 15000) {
        const elements = [];
        try{  
            if (Array.isArray(locator)) {
                for(let i = 0; i < locator.length; i++){                   
                    let element = await this.driver.wait(until.elementLocated(locator[i]), waitTime);
                    await elements.push(element);
                }
                return elements;
            }
            let els = await (this.driver.wait(until.elementLocated(locator), waitTime));            
            return els;
        } catch (error){
            throw new Error(error);
        }
    }

    
    async getElementText(locator) {
        try{                       
            let elements = await this.getElement(locator);            
            let txt = await elements.getText();
            return txt;
        }catch(error){
            throw new Error(error);
        }
    }
    
    getElementsText(locator, sleepTime = 1000) {

        try {
            let driver = this.driver;
            let elsTxt = [];
            this.getElement(locator).then(function (elements) {
                if (Array.isArray(elements)) {
                    for (let i = 0; i < elements.length; i++) {
                        let txt = elements[i].getText(); 
                        console.log("txt iiiiii" + txt);                       
                        driver.sleep(sleepTime);
                        elsTxt.push(txt);
                    }
                } else {
                    let txt = elements.getText();
                    driver.sleep(sleepTime);
                    elsTxt.push(txt);
                }
            });
            console.log("array is " + elsTxt)
            return elsTxt;   
        }
        catch (error) {
            throw new Error(error);
            return false;
        }

    }
    
    async clickBylocator(locator, sleepTime = 1000) {
        try {            
            let driver = this.driver;

            await this.getElement(locator).then(async function (elements) {

                if (Array.isArray(elements)){
                    for (let i = 0; i < elements.length; i++) {
                        await elements[i].click();
                        await driver.sleep(sleepTime);
                    }
                }else{
                    await elements.click();
                    await driver.sleep(sleepTime);
                }
            });
        }
        catch (error) {
            throw new Error(error);
        }

    }

    clickNum(locator, num,sleepTime = 1000) {
        try {
            let driver = this.driver;
            
            this.getElement(locator).then(function (elements) {

                if (Array.isArray(elements)) {
                    for (let i = 0; i < elements.length; i++) {
                        elements[i].click();
                        driver.sleep(sleepTime);
                    }
                } else {
                    while(num >0){
                        console.log('num is ' + num);
                        elements.click();
                        driver.sleep(sleepTime);
                        num = num -1;
                    }                    
                }
            });
            
        }
        catch (error) {
            throw new Error(error);
        }

    }
    //切换到iframe页，可传递index/id/name/webElement等
    switchToIFrame(iframe = 0){
        this.driver.switchTo().frame(iframe);
    }
    //从iframe切换主页面
    switchToMainpage(){
        this.driver.switchTo().defaultContent();
    }
    //切换到新窗口
    async switchToNewWindow(current_window){
        let driver = this.driver;
        let allwindows = await driver.getAllWindowHandles();
        //console.log('Allwindow is '+ allwindows);
        if(Array.isArray(allwindows) && (allwindows.length > 1)){
            allwindows.forEach(function (window) {
                // console.log("window is " + window);
                if (window != current_window) {
                    //console.log("switch is " + window);
                    driver.switchTo().window(window);
                }
            });
        }else{
            console.log('don\'t need to switch the window')
        }
        
    }

    //关闭新窗口
    async closeNewwindow(){
        let driver = this.driver;
        await driver.close();
    }

    //返回主窗口
    async switchToDefaultWindow(window){
        await this.driver.switchTo().window(window);
    }
    //清空输入框内容
    async clearText(element){
        try {
           await element.clear(); 
        } catch (error) {
            throw new Error(error);
        }

    }
    
    async inputData(locator, data, sleepTime = 1000) {

        try {
            let elements = await this.getElement(locator);
            let driver = this.driver;
            if (Array.isArray(elements) && Array.isArray(data)){
                for (let i = 0; i < elements.length; i++) {                   
                    await this.clearText(elements[i]);
                    await elements[i].sendKeys(data[i]);
                    await driver.sleep(sleepTime);
                }
            }else{
                await this.clearText(elements);                
                await elements.sendKeys(data);
                await driver.sleep(sleepTime);
            }
        }
        catch (error) {
            throw new Error(error);
        }

    }

    async waitpage(ms){
        try {
            return await (new Promise(resolve => setTimeout(() => resolve(), ms)));
            
        } catch (error) {
            throw new Error(error);
        }
    }

    
    async submitData(locator, data, sleepTime = 1000) {
        try {
            if (locator.slice(0, -1).length === 1) {
                await this.inputData(locator.slice(0, -1)[0], data, sleepTime);
            } else {
                await this.inputData(locator.slice(0, -1), data, sleepTime);
            }
            await this.clickBylocator(locator[locator.length - 1], sleepTime);            
        } catch (error) {
            throw new Error(error);
        }
        
    }

    getEleTxtByClassName(locator, num = 0) {
        try {
            let script =
                "var els=document.getElementsByClassName('" + locator + "');"
                + "var elsTxt=[];" +
                "for(let i=0;i<els.length;i++){" +
                "(function(i){" +
                "var txt=els[i].innerText;" +
                "elsTxt.push(txt);" +
                "}(i))" +
                "}" + "return elsTxt;";

            let pObj = Promise.resolve(this.driver.executeScript(script));
            return pObj.then(function (values) {
                return values;
            });
        }
        catch (e) {
            throw new Error(e);
        }

    }

    getEleTxtBySelecter(selecter = "", num = 0) {

        try {
            let script =
                "var els=document.querySelectorAll('" + selecter + "');"
                + "var elsTxt=[];" +
                "for(let i=0;i<els.length;i++){" +
                "(function(i){" +
                "var txt=els[i].innerText;" +
                "elsTxt.push(txt);" +
                "}(i))" +
                "}" + "return elsTxt;";

            let pObj = Promise.resolve(this.driver.executeScript(script));            
            return pObj.then(function (values) {               
                return values;
            });
        }
        catch (error) {
            throw new Error(error);
        }

    }

    scrollTo(locator,begin,end){

    }
    
    checkResult(type,autual,expected){
       console.log("autual val is :  "+ autual + ", expected val is "+ expected);
       if(type == 'equal'){
            return expect(autual).to.eql(expected);
       }else if(type == 'contain'){
            return expect(autual).to.contain(expected);
       }
       
    }

    SaveScreenshot(dirpath,filename){
   	   try{
              
            if (!fs.existsSync(dirpath)){
                mkdirp(dirpath, function (err) {
                    if (err){
                        console.error(err);
                    }
                });
            }
           
	   	   	return this.driver.takeScreenshot().then(function (data) {
                    fs.writeFile(dirpath + filename +'.png', 
                        data.replace(/^data:image\/png;base64,/, ''), 'base64', function (err) {
	                        if (err) throw err;
	                })
	            });
   	    }catch(error){
            console.error(error);
    	}  
    }
    
}


module.exports = driver_method;
