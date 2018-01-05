/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: 
 */
const send = require('./sendEmail');
const dev = require('../common/dev');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
const page_config = require('../testcase/page_elements');
const subjet = "success";
let remote = require("selenium-webdriver/remote");


class extend_method{
    constructor(driver){
        this.driver = driver;
        //this.args = args;       
    } 

    async defaultlogin(){
        
        await td.clickBylocator(page_config.homepage.signupbtn, 2000);
        await td.waitpage(3000);
        await this.login(1, testdata.signIn.account.username, testdata.signIn.account.password);
        await td.waitpage(3000);
    }

    //进行登陆验证
    async login(username, password){
        await this.driver.getCurrentUrl().then(async function (url) {
            console.log('current url is ' + url);            
            try {
                if (String(url).includes('home')) {
                    let locarr = [page_config.homepage.username, page_config.homepage.password, page_config.homepage.login];
                    let dataarr = [username, password];                   
                    if (username == '' && password == '') {                        
                        await td.clickBylocator(page_config.homepage.login, 2000);
                        await td.waitpage(2000);
                    }else{                        
                        await td.submitData(locarr, dataarr, 1000);
                        await td.waitpage(2000);
                    }                    
                }else{
                    let locarr = [page_config.signIn.username, page_config.signIn.password, page_config.signIn.login];
                    let dataarr = [username, password];
                    if (username == '' && password == '') {
                        await td.clickBylocator(page_config.signIn.login, 2000);
                        await td.waitpage(2000);
                    }else{
                        await td.submitData(locarr, dataarr, 1000);
                        await td.waitpage(2000);
                    }                    
                }
            } catch (error) {
                console.error(error);
            }
        });

    }

    //进行注册
    async SignUp(username,password){
       try {
            //操作的元素及数据
            let locarr = [page_config.signUp.username, page_config.signUp.password, page_config.signUp.signupbtn];
            let dataarr = [username, password];
            if (username == '' && password == '') {
                await td.clickBylocator(page_config.signUp.signupbtn, 1000);
                await td.waitpage(1000);
            }else{
                await td.submitData(locarr, dataarr, 1000);
                await td.waitpage(2000); 
            }
       } catch (error) {
           console.error(error);
       }
       
    }

    //退出登陆
    async logout(){
        await td.clickBylocator(page_config.homepage.avator);
        await td.waitpage(2000);
        await td.clickBylocator(page_config.homepage.exit);
        await td.waitpage(2000);
    }
    
    //从个人头像位置切换菜单
    async switchMenu(menuname){
        switch (menuname) {
            case 'mainpage':
                await td.clickBylocator(page_config.homepage.avator);
                await td.waitpage(2000);
                await td.clickBylocator(page_config.homepage.mainpage);
                
                break;
            case 'siteManagement':
                await td.clickBylocator(page_config.homepage.avator);
                await td.waitpage(2000);
                await td.clickBylocator(page_config.homepage.siteManagement);
                break;
            case 'pageEditor':
                await td.clickBylocator(page_config.homepage.avator);
                await td.waitpage(2000);
                await td.clickBylocator(page_config.homepage.pageEditor);
                break;
            case 'skyDriver':
                /// bak
                break;
            case 'setup':
                /// bak
                break;
            case 'VIP':
                /// bak
                break;
            default:
                console.log('the model is not found~')
                break;
        }
    }

    //实名弹窗
    async realName(cellphone, verifycode){
        await td.inputData(page_config.realNamepage.cellphone, cellphone);
        await td.clickBylocator(page_config.realNamepage.sendcode);
        await td.inputData(page_config.realNamepage.smscode,verifycode);
        await td.clickBylocator(page_config.realNamepage.submit_btn);
    }

    //新建页面入口
    async enterDomain(){
        await this.switchMenu('mainpage');
        await td.waitpage(3000);
        await td.clickBylocator(page_config.personalpage.newwebsite_enter);
        await td.waitpage(3000);
    }

    //选择不同的模板创建网站
    async selectTemplates(type,tmp,sitename){
        try {
            let driver = this.driver;
            await td.clickBylocator(type);
            await td.waitpage(1000);
            await td.clickBylocator(tmp);
            await td.waitpage(500);
            await td.clickBylocator(page_config.tmppage.domain.next);
            await td.waitpage(1000);
            await td.inputData(page_config.tmppage.domain.sitename, sitename);
            await td.waitpage(1000);
            await td.clickBylocator(page_config.tmppage.domain.nextstep);
            await td.waitpage(2000);
            await td.clickBylocator(page_config.tmppage.domain.nextstep);           
            await td.waitpage(20000); 
        } catch (error) {
            throw new Error(error);
        }        
    }

    //对模板进行预览操作
    async tmppreview(type, tmp,preview) {
        try {
            let driver = this.driver;
            await td.clickBylocator(type);
            await td.waitpage(1000);
            await td.clickBylocator(tmp);
            await td.waitpage(500);
            await td.clickBylocator(preview);
            await td.waitpage(1000);
            
        } catch (error) {
            throw new Error(error);
        }

    }
    //对预览的模板进行验证
    async checkPreviewResult(loc,expected){
        return td.getElementText(loc).then(function(val) {
           console.log('page value is ' + val);
           td.checkResult('equal',val,expected);           
       }); 
    }

    //获取私有网站的数量和名称(根据指定数量进行获取，一般获取全部数据)
    async getPrivateWebsite(siteNum){
        let i = 0;
        let privatesite = 0;
        let sitearr = [];
        try {
            while (i < siteNum) {                
                let loc = "div.flex-table > div:nth-child(" + (i + 3) + ") > div:nth-child(1) > span[class=\\'iconfont icon-lock\\']";
                let script = "var els=document.querySelectorAll('" + loc + "');"
                            + "return els;";               
                let content = await this.driver.executeScript(script);                
                let name = await td.getElementText({ "css": "div.flex-table > div:nth-child(" + (i + 3) + ") > div:nth-child(1)" });                
                if (content.length > 0) {
                    privatesite = privatesite + 1;
                    sitearr.push(name);                    
                }
                i = i + 1;
            }
            let info = { "num": privatesite, "details": sitearr };
            return info;
        } catch (error) {
            throw new Error(error);
        }
        
    }
    //给新建网站添加内容
    async AddSiteContent(content){
        try {
            let loc = page_config.mysite.editArea.splitTableft;  
            await td.clickBylocator(page_config.mysite.editArea.loc);
            await td.appendData(loc,content);
            await td.clickBylocator(page_config.mysite.editArea.saveBtn);
        } catch (error) {
            throw new Error(error);
        }               
    }
    //获取当前网站总数
    async getCurrentWebsiteNum(){
        let sitenum = 0;
        await td.getElementText(page_config.mysite.siteNum).then(function(val) {
            console.log("site num is "+ val);
            sitenum = val;
        });
        return sitenum;
    }

    //获取数量获取对应站点信息(默认取前5条数据)
    async getWebsiteInfo(siteNum=5){        
        let i = 0;
        let sitearr = []; 
        while (i < siteNum) {
            let name = await td.getElementText({ "css": "div.flex-table > div:nth-child(" + (i + 3) + ") > div:nth-child(1)" });
            let address = await td.getElementText({ "css": "div.flex-table > div:nth-child(" + (i + 3) + ") > div:nth-child(2)" });
            let dates = await td.getElementText({ "css": "div.flex-table > div:nth-child(" + (i + 3) + ") > div:nth-child(3)" });
            i = i + 1;  
            let info = {"name":name,"address":address,"date":dates};                
            sitearr.push(info);
        }
        return sitearr;
    }
        
    //网站管理页面网站删除操作(options:confirm/cancel)
    async delWebsite(sitelocator,options='confirm'){
        await td.clickBylocator(sitelocator);
        await td.waitpage(2000);
        await td.getElement({ "css": "h4#deleteWebsiteConfirmModalLabel" });
        await td.clickBylocator({ "css": "input[ng-model^='delete']" });
        await td.waitpage(1000);
        if(options == 'confirm'){           
            await td.clickBylocator({ "css": "button[ng-click^='confirm']" });
            await td.waitpage(10000);
        }else{
            await td.clickBylocator({ "css": "button.btn.btn-default.ng-binding[data-dismiss^='mod']"});
            await td.waitpage(1000);
        }
    }
    //获取网站的设置信息
    async getsiteSetting(){
        let loc = [page_config.mysite.operation.setup.common.siteAddress,page_config.mysite.operation.setup.common.sitelabels.summary];
        let script = "var t = document.getElementById('webName');" +
                "return t.value;"
        let name = await td.execScript(script);        

        script = "var t = document.getElementById('intro');" +
                    "return t.value;"
        let introdata = await td.execScript(script);
        
        let siteinfo = await td.getElementsText(loc);
        siteinfo.push(name);
        siteinfo.push(introdata);
        return siteinfo;
    }
    //上传文件(针对本地测试的情况,eg:server:localhost)
    async uploadFile(loc,file){
        console.log('file path is ' + file);
        await td.inputData(loc, file);
    }
    //上传文件(针对远端的情况,eg:server:10.127.x.x)
    async uploadRemoteFile(loc,file){
        console.log('file path is ' + file);
        let els = await td.getElement(loc);
        await this.driver.setFileDetector(new remote.FileDetector());
        await els.sendKeys(file);
        await td.waitpage(1000);
    }
    //设置网站名称
    async setsiteName(loc,data){
        await td.inputData(loc,data);
    }
    //设置网站名称
    async setsiteIntro(loc, data){
        await td.inputData(loc, data);
    }
    //设置网站名称
    async setsiteLabels(loc, data){
        await td.inputData(loc[0],data);
        await td.clickBylocator(loc[1]);
    }

	sendReport(){

		// if(text =='0'){
		// 	subject ="failed";
		// }
		send(config.emailconfigInfo.from,config.emailconfigInfo.to,
			subject, config.emailconfigInfo.context);
	}

};

module.exports = extend_method;