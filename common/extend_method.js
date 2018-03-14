/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: 
 */
const send = require('./sendEmail');
const dev = require('../common/dev');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
const page_config = require('../testcase/config/data/page_elements');
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
            await console.log('current url is ' + url);            
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
    async SignUp(username,password,cellphone){
       try {
            let locarr = [page_config.signUp.username, page_config.signUp.password, page_config.signUp.cellphone, page_config.signUp.signupbtn];
            let dataarr = [username, password, cellphone];
            await td.submitData(locarr, dataarr, 1000);
            await td.waitpage(2000);                                   
       } catch (error) {
           console.error(error);
       }
       
    }
    //注册页面获取手机验证码
    async getSMScode(username, password, cellphone){
        let locarr = [page_config.signUp.username, page_config.signUp.password, page_config.signUp.cellphone, page_config.signUp.sendSMScode];
        let dataarr = [username, password, cellphone];
        await td.submitData(locarr, dataarr, 1000);
    }
    
    //退出登陆
    async logout(){
        await td.clickBylocator(page_config.homepage.avator);
        await td.waitpage(2000);
        await td.clickBylocator(page_config.homepage.exit);
        await td.waitpage(2000);
    }
    //手机验证码页面(只针对涉及绑定，解绑页面)
    async bindpage(smscode){
        let locs = [page_config.setupCenter.security.bindTab.mobile.piccodetext, page_config.setupCenter.security.bindTab.mobile.sendSMSbtn];
        let codeStr = await td.getAttValue(page_config.setupCenter.security.bindTab.mobile.imageCode, 'Src');
        let piccode = new String(codeStr).substr('-4');
        console.log("piccode is " + piccode);        
        await td.submitData(locs, piccode);   //获取SMScode
        await td.waitpage(1000);
        locs = [page_config.setupCenter.security.bindTab.mobile.smscode, page_config.setupCenter.security.bindTab.mobile.Confirmbtn];        
        await td.submitData(locs,smscode);    //进行提交操作
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
                await td.clickBylocator(page_config.homepage.avator);
                await td.waitpage(2000);
                await td.clickBylocator(page_config.homepage.skyDriver);
                break;
            case 'setupCenter':
                await td.clickBylocator(page_config.homepage.avator);
                await td.waitpage(2000);
                await td.clickBylocator(page_config.homepage.setupCenter)
                break;
            case 'VIP':
                await td.clickBylocator(page_config.homepage.avator);
                await td.waitpage(2000);
                await td.clickBylocator(page_config.homepage.vipenter);
                break;
            default:
                console.log('the model is not found~')
                break;
        }
    }

    //切换到不同的tab页(通用的)
    async switchTabpage(tabpage) {
        await td.clickBylocator(tabpage);
        await td.waitpage(1000); 
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
        await td.getElement(page_config.mysite.operation.remove.delWindowTitle);
        await td.clickBylocator(page_config.mysite.operation.remove.clearDataSource);
        await td.waitpage(1000);
        if(options == 'confirm'){           
            await td.clickBylocator(page_config.mysite.operation.remove.confirm_btn);
            await td.waitpage(10000);
        }else{
            await td.clickBylocator(page_config.mysite.operation.remove.cancel_btn);
            await td.waitpage(1000);
        }
    }
    //获取网站的设置信息
    async getsiteSetting(){        
        let name = await td.getAttValue(page_config.mysite.operation.setup.common.sitename, 'value'); 
        let address = await td.getElementText(page_config.mysite.operation.setup.common.siteAddress);     
        let introdata = await td.getAttValue(page_config.mysite.operation.setup.common.siteintro, 'value');        
        let siteinfo = [];
        siteinfo.push(name);
        siteinfo.push(address);
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
    //设置头像(用户图像或者网站头像)
    async setAvatar(loc, content) {
        await console.log("------------")
        let path = await td.getSyspath();
        let Bool = await td.isWindows();
        let file = content;
        let pic = (Bool) ? file : (file.replace(/\\/gi, '/'));
        let imgsrc = path + pic;
        console.log('img' + imgsrc);
        await this.uploadRemoteFile(loc, imgsrc);
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
    //购买VIP(按照默认一个月进行购买)
    async buyVip(enter,channel){
        await td.clickBylocator(enter);
        await td.waitpage(2000);
        //await this.selectVip()   //目前按照默认等级进行购买的       
        let url= await this.driver.getCurrentUrl().then(async function (val) {
            return val;              
        });
        console.log('url' + url);
        let curwindow = await this.driver.getWindowHandle();        
        if(!url.includes('vip')){
            await td.switchToNewWindow(curwindow);
            await td.clickBylocator(page_config.purchaseVip.purchasebtn);
            await td.clickBylocator(page_config.purchaseVip.rechargebtn);
            await td.waitpage(2000);
            await td.closeNewwindow();            
            await td.switchToDefaultWindow(curwindow);
        }else{
            await td.clickBylocator(page_config.purchaseVip.purchasebtn);
            await td.clickBylocator(page_config.purchaseVip.rechargebtn);
            await td.waitpage(2000);
        }
        
    }
    //选择不同等级的VIP
    async selectVip(level){
        await td.clickBylocator(level);
    }
    // //获取网站已有标签信息  --功能已经去掉，可以移除
    // async getsiteLabels(){
    //     let script = "var t = document.querySelectorAll('#common > div > div:nth-child(6) > div:nth-child(2) > div.col-sm-12.labels-box > div');"
    //         + "var res = [];"
    //         + "for(let item of t){"
    //         + "   res.push(item.innerText);"
    //         + "};" + " return res;"
    //     let summary = await td.execScript(script);  
    //     return summary; 
    // }
    //给网站添加分组
    async addsiteGroup(groupname){
        await this.switchTabpage(page_config.mysite.operation.setup.Permissions.group.key);
        await td.submitData([page_config.mysite.operation.setup.Permissions.group.name, page_config.mysite.operation.setup.Permissions.group.createbtn], groupname);
        await td.waitpage(1000);
    }
    //向分组里添加用户
    async addGroupMember(member){
        await td.clickBylocator(page_config.mysite.operation.setup.Permissions.group.info.operation.edit);
        if(Array.isArray(member)&& (member.length >1)){
            for(let n of member){
                console.log('n ' + n);
                await td.submitData([page_config.mysite.operation.setup.Permissions.group.inputmember, page_config.mysite.operation.setup.Permissions.group.addbtn], n);
            }            
        }else{
            await td.submitData([page_config.mysite.operation.setup.Permissions.group.inputmember, page_config.mysite.operation.setup.Permissions.group.addbtn], member);
        }    
        await td.clickBylocator(page_config.mysite.operation.setup.Permissions.group.backbtn);
    }
    //获取已有的分组
    async getGroupInfo(){
        let script = "var a = document.querySelectorAll('#authorize > form > div:nth-child(2) > div > select > option');"
            + "return a;"
        let info = await td.execScript(script);
        return info;
    }
    //给分组添加不同的权限
    async modifyPermission(){
        let groupinfo = await this.getGroupInfo();
        if(groupinfo != null && groupinfo != undefined){
            for(let i in groupinfo){
                console.log('groupinfo' + groupinfo[i]);
            }           
            await this.selectOption(page_config.mysite.operation.setup.Permissions.Rights.selectGroup.css, (groupinfo.length - 1));
            await this.selectOption(page_config.mysite.operation.setup.Permissions.Rights.selectRight.css,2);           
            await console.log('kkkk');
            await td.clickBylocator(page_config.mysite.operation.setup.Permissions.Rights.addbtn);
        }        
    }
    //选择options的数据
    async selectOption(loc,index){
        let script = "var a = document.querySelectorAll('" + loc + "');"
            + "a[0].children[" + index + "].selected = 'true';"
            + "a[0].dispatchEvent(new Event('change'));"
        console.log(script);
        await td.execScript(script);
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