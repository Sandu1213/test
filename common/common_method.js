/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: 
 */
'use strict';
var webdriver = require('selenium-webdriver');
var randomstring = require('randomstring');
const fs = require('fs');
const ops = {
    flags: 'a+',
    encoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
}

class common_func{

  /**
   * @return Driver
   */
	static initWebDriver() {
        
        let driver = new webdriver.Builder().withCapabilities
            (webdriver.Capabilities.chrome()).build()
        // let driver = new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build();
        return driver;
    } 
   
   /**
    * @params length  --define the length of the random String.
    * @params charset --define the character scope(alphanumeric/alphabetic/numeric/custom)
    * @return random Num or random String
    */
    static GenStr(length = 3, charset = 'numeric'){
     	let str = randomstring.generate({
     	    length:length,
     	    charset:charset
        });
        return str;
    }

   static getDate(){
        let d = new Date();
        let day = d.getDate();
        if(day < 10){
            day = '0' + day;
        }        
        let date = d.getFullYear() + '' + (d.getMonth()+1) +  '' + day;        
     	return date;

   }

   static getTime(){
    	let d = new Date();        
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec =  d.getSeconds();
        if(hour < 10){
            hour = '0' + hour;
        }
        if(min < 10){
            min = '0' + min;
        }
    	if(sec < 10)
    	{
            sec = '0' + sec;
        }

    	let time = hour + '' + min + '' +  sec;          
        return time;
   }
   
    static saveFile(filename, content){
        var wstream = fs.createWriteStream(filename, ops);
        wstream.write(content);
        wstream.end();
    }

    static async readFile(filename,offset){
        
        var readstream = await fs.createReadStream(filename,offset)
        return readstream;
   }
}


module.exports = common_func;
