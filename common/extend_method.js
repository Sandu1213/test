/**
 *Create on 2017/11/06
 * Author : Duke
 * Description: 
 */
const send = require('./sendEmail');
const dev = require('../common/dev');
const driver_method = require('../common/driver_method');
let td = new driver_method(dev.driver);
const page_config = require('../testcase/page_elements');
const subjet = "success";
const TYPE_SCCESS = 1;
const TYPE_FAILED = 0;


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
    async login(type,username, password){
        this.driver.getCurrentUrl().then(async function (url) {
            console.log('current url is ' + url);
            
            try {
                if (String(url).includes('home')) {
                    let locarr = [page_config.homepage.username, page_config.homepage.password, page_config.homepage.login];
                    let dataarr = [username, password];
                    if (type == TYPE_SCCESS) {
                        await td.submitData(locarr, dataarr, 1000);
                        await td.waitpage(2000);
                    } else if (type == TYPE_FAILED) {
                        if (username == '' && password == ''){
                            console.log('**1**')
                            await td.clickBylocator(page_config.homepage.login, 2000);
                            
                        } else if (username != '' && password == ''){
                            console.log('**2**')
                            await td.submitData(locarr, dataarr, 1000);
                            await td.waitpage(2000);
                        } else if (username != '' && (String(password).length < 6)){
                            console.log('**3**')
                            await td.submitData(locarr, dataarr, 1000);
                            await td.waitpage(2000);
                        } else{
                            console.log('**4**')
                            await td.submitData(locarr, dataarr, 1000);
                            await td.waitpage(2000);
                        }
                    }
                } else {
                    let locarr = [page_config.signIn.username, page_config.signIn.password, page_config.signIn.login];
                    let dataarr = [username, password];

                    if (type == TYPE_SCCESS) {
                        console.log('&&&&&&&&here');
                        await td.submitData(locarr, dataarr, 1000);
                        await td.waitpage(2000);
                    } else if (type == TYPE_FAILED) {
                        if (username == '' && password == '') {
                            await td.clickBylocator(page_config.signIn.login, 2000);
                        } else if (username != '' && password == '') {
                            await td.submitData(locarr, dataarr, 1000);
                            await td.waitpage(3000);
                        } else if (username != '' && (String(password).length < 6)) {
                            await td.submitData(locarr, dataarr, 1000);
                            await td.waitpage(3000);
                        } else {
                            await td.submitData(locarr, dataarr, 1000);
                            await td.waitpage(3000);
                        }
                    }
                }
            } catch (error) {
                console.error(error);
            }
        });

    }

    //进行注册
    async SignUp(type,username,password){
       try {
            //操作的元素及数据
            let locarr = [page_config.signUp.username, page_config.signUp.password, page_config.signUp.signupbtn];
            let dataarr = [username, password];

            if (type == TYPE_SCCESS) {
               if (username != null && password != null) {
                   await td.submitData(locarr, dataarr, 1000);
                   await td.waitpage(3000);
               }
            }else if (type == TYPE_FAILED) { 
              console.log("-----------------------")
                if (username == '' && password == '') {                  
                    await td.clickBylocator(page_config.signUp.signupbtn, 1000);
                    //await td.waitpage(1000);
                }else if (username =='' && password != ''){
                    await td.clickBylocator(page_config.signUp.password, 1000);
                    await td.inputData(page_config.signUp.password, password, 1000);
                    await td.clickBylocator(page_config.signUp.signupbtn, 1000);
                    await td.waitpage(2000);
                }else if (username != '' && password == ''){                    
                    await td.clickBylocator(page_config.signUp.username, 1000);
                    await td.inputData(page_config.signUp.username, username, 1000);
                    await td.clearText(td.getElement(page_config.signUp.password));
                    await td.clickBylocator(page_config.signUp.signupbtn, 1000); 
                    await td.waitpage(2000);                   
                } else if (username != '' && password != ''){
                    await td.submitData(locarr, dataarr, 1000);
                    await td.waitpage(2000);
                }
            }else{
                if (typeof(username) === 'number'){
                    await td.submitData(locarr, dataarr, 1000);
                    await td.waitpage(3000);
                }
                if (String(password).length < 6){
                    await td.submitData(locarr, dataarr, 1000);
                    await td.waitpage(3000);
                }
                if (String(username).includes('AV')){
                    await td.submitData(locarr, dataarr, 1000);
                    await td.waitpage(3000);
                }
                if(String(username).length > 30){
                    await td.submitData(locarr, dataarr, 1000);
                    await td.waitpage(3000);
                }
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

    //根据不同的模板进行选择
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
            await td.clickNum(page_config.tmppage.domain.nextstep,2);
            await td.waitpage(15000); 
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
    checkPreviewResult(loc,expected){

        return td.getElementText(loc).then(function(val) {
           console.log('val is ' + val);
           td.checkResult('equal',val,expected);           
       });     
       

    }
    createWebsite(){

    }

    editWebsite(){

    }

    createDiagram(){

    }

    uploadBigfile(){

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