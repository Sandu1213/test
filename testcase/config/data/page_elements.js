/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: elements config
 */
'use strict';
var homepage = {
	"username":{"name":"username"},
	"password": { "css": "input[ng-model='password']"},
	"login": { "css": "a[ng-click*='login()']"},
	"signinbtn": { "css": "a[ng-click*='goLoginPage()']" },
	"signupbtn": { "css":"a[ng-click*='goRegisterPage()']"},
	"avator": { "css": "a.dropdown-toggle.profile"},
	"exit": { "css": "a[ng-click*='logout()']"},
	"mainpage": { "css":"a.ng-scope[translate='我的主页']"},
	"siteManagement": { "css":"a[ng-click*='websiteManager']"},
	"pageEditor": { "css":"a[ng-click*='goWikiEditorPage()']"},	
	"setupCenter": { "css":"a[ng-click*='userProfile']"},
	"skyDriver": { "css": "a[ng-click*='qiniuPan']"},
	"vipenter": { "css": "a[ng-click*='myVIP']"},
	"checktext": { "id": "total-err" }
}

var personalpage = {
	"newwebsite_enter": { "css": "div[ng-click*='goNewWebsitePage()']"},
	"siteManagement_enter": { "css": "div[ng-click*='goWebsitePage()']"},
	"editer_enter": { "css": "div[ng-click*='goEditorPage()']"},
	"ownersite":{}
}

var realNamepage = {
	"title":{"css":"h4[translate='实名手机认证']"},
	"cellphone": { "css": "input[ng-model='realNameInfo.cellphone']"},
	"smscode": { "css": "input[ng-model='realNameInfo.SMSCode']"},
	"sendcode": { "css": "div[ng-click='sendRealNameCellPhoneSMSCode()']"},
	"submit_btn": {"css": "button[ng-click*='submitRealnameInfo()']"},
	"cancel_btn":{ "css": "button.btn.btn-md.ng-scope[ng-click='cancel()']"}
}

var tmppage = {
	"personal":{
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[1]/a"},
		"contains":{
			"blank":{
				"main": { "css":"img[ng-src$='wiki_blank_template.png']"},
				"preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]"},
				"select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]"},
				"Prepagecheck": { "css": "div#_mdwiki_content_container_mdwiki_0" }
			},
			"basic": {
				"main": {"css":"img[ng-src$='wiki_basic_template.png']"},
				"preview": { "xpath": "//*[@id='personal-web']/div[2]/div/div[1]" },
				"select": { "xpath": "//*[@id='personal-web']/div[2]/div/div[2]" },
				"Prepagecheck": { "css": "div.wiki_page_inner_link.ng-scope > h2"}
			},
			"resume": {
				"main": { "css": "img[ng-src$='wiki_resume_site_template.png']"},
				"preview": { "xpath": "//*[@id='personal-web']/div[3]/div/div[1]" },
				"select": { "xpath": "//*[@id='personal-web']/div[3]/div/div[2]" },
				"Prepagecheck": { "css": "div.kind > h3" }
			},
			"vip": {
				"main": { "css": "img[ng-src*='wiki_basic_template.png']"},
				"preview": { "xpath": "//*[@id='personal-web']/div[4]/div/div[1]" },
				"select": { "xpath": "//*[@id='personal-web']/div[4]/div/div[2]" },
				"Prepagecheck": { "css": "div#_mdwiki_content_container_mdwiki_0"}
			},
		}
	},
	"company":{
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[2]/a" },
		"contains": {
			"company1": {
				"main": { "css": "img[ng-src$='wiki_company1_template.jpg']" },
				"preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]" },
				"select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]" },
				"Prepagecheck": { "css": " div > div.sidebar.pull-left > p" }
			},
			"company2": {
				"main": { "css": "img[ng-src$='wiki_company2_template.png']" },
				"preview": { "xpath": "//*[@id='personal-web']/div[2]/div/div[1]" },
				"select": { "xpath": "//*[@id='personal-web']/div[2]/div/div[2]" },
				"Prepagecheck": { "css": "#wikiblock_mdwiki_0_0_2 > div > div > div:nth-child(1) > h2 > span" }
			}
		}
	},
	"group": {
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[3]/a" },
		"contains": {
			"group": {
				"main": { "css": "img[ng-src$='wiki_organization_template.png']" },
				"preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]" },
				"select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]" },
				"Prepagecheck": { "css": "div.user-msg > h1" }
			}
		}
	},
	"game": {
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[4]/a" },
		"contains": {
			"game": {
				"main": { "css": "img[ng-src$='wiki_game_template.jpg']" },
				"preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]" },
				"select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]" },
				"Prepagecheck": { "css": "div.gameHeader> div.banner-info > h1" }
			}
		}
	},
	"course": {
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[5]/a" },
		"contains": {
			"course": {
				"main": { "css": "img[ng-src$='img_1509532234890.png']"},
				"preview": { "xpath": "//*[@id='personal-web']/div[1]/div/div[1]" },
				"select": { "xpath": "//*[@id='personal-web']/div[1]/div/div[2]" },
				"iframe":{"css":"iframe#addcourse"},
				"login": { "css":"body > div > div.login-box > a"},
				"agree_btn":{"css":"div[ng-click*='agree']"},
				"close_btn": { "css":"span.rightform_head_close"}
			}
		},
		"checksuccess":{"css":"a.logo[href*='lecture']"},
		"checksuccess1": { "css":"body > md-toolbar > div > a:nth-child(4) > span"}
	},
	"domain":{
		"next": { "css":"div.panel-body > div.step-footer > button:nth-child(2)"},
		"sitename": { "css":"input#websiteName"},
		"prestep": { "css":"div.panel-body > div.step-footer > button:nth-child(1)"},
		"nextstep": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[2]/button[2]" },
		"checksuccess": { "css": "img[ng-src*='wiki_success.png']"},
		"gotoEditor1": { "css": "div.panel-body > div.step-footer > button[ng-click='goEditerPage()']"},
		"gotoConfig1": { "css": "div.panel-body > div.step-footer > button[ng-click='goEditWebsitePage()']"}
	}
}

var mysite = {
	"create": { "css":"a[ng-click$='goNewWebsitePage()']"},
	"siteNum": { "css":"div.panel-body.website-flex > h3 > span > span"},
	"type": "span[class='iconfont icon-lock']",
	"siteName": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(1)"},
	"siteAddress": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(2)"},
	"createDate": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(3)"},
	"operation":{
		"see": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(1)"},
		"edit": { "css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(2)"},
		"setup": { 
			"key":{"css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(3)"},
			"common":{
				"icon_input": { "css":"input.change-btn"},
				"icon_edit_btn": {"css": "a.change-btn.ng-scope"},
				"icon_save_btn": { "css": "a#finish"},
				"sitename": { "css": "input#webName"},
				"siteAddress": { "css": "#common > div > div:nth-child(4) > div.col-sm-5 > p"},
				"siteintro": { "css": "#intro"},
				"sitelabels": { 
					"input": { "css": "div.col-sm-5 > div >input#tagInput"},
					"overinput": { "css":"#common > div > div:nth-child(6) > div:nth-child(2) > div.col-sm-8.add-label > input:nth-child(2)"},
					"addbtn": { "css":"div.col-sm-4.btn.btn-primary.ng-binding[ng-click*='addTag']"},
					"summary": { "css": "#common > div > div:nth-child(6) > div:nth-child(2) > div.col-sm-12.labels-box > div"},
					"remove": { "css":"span[ng-click*='removeTag(tag)']"},
					"check": { "css":"#common > div > div:nth-child(6) > div.col-sm-5.text-danger.control-label.ng-binding"}
				},
				"notice": { "css":"#common > div > div:nth-child(7) > div >p"},
				"savebtn": { "css": "#common > div > div:nth-child(7) > div > button[ng-click='modifyWebsite()']"},
				"saveResult": { "css":"div#messageTipConentId"}
			},
			"datasource": {				
				"key": { "css": "a[href *= '#datasource']"},
				"data": {"css": "select[ng-model^='dataSourceName']"}
			},
			"domainname": { 
				"key": { "css":"a[href^='#domain']"},
				"webAddress": { "css":"#domain > form > div:nth-child(2) > div > p"},
				"webdomain": { "css":"#domain > form > div:nth-child(3) > div > p"},
				"cname":{
					"summary": {},
					"add":{
						"input":{},
						"addbtn":{}
					},
					"notes": {"css":"div[ng-hide='user.vipInfo.isValid']"},
					"becomevip": { "css":"div[ng-hide='user.vipInfo.isValid'] > a"}
				}
			},
			"Permissions": { 
				"key": {"css": "a[href^='#permission']"},
				"description":{
					"address": { "css": "#permission > div.inner-info > h4"},
					"innerInfo": {
						"content1":{"css": "#permission > div.inner-info > p:nth-child(2)"},
					    "content2":{"css": "#permission > div.inner-info > p:nth-child(3)"},
						"content3":{"css": "#permission > div.inner-info > p:nth-child(4)"},
					}
				},
				"siteType":{
					"warnning": { "css":"#permission > div.change-type > div > p:nth-child(1)"},
					"becomevip": { "css":"#permission > div.change-type > div > p > a[href='/wiki/vip']"},
					"public": { 
						"select": { "css": "input#publicItem" },
						"name": {"css": "label[for^='publicItem']"},
						"des": { "css": "#permission > div.change-type > div > div:nth-child(2) > p"}
					},
					"private": {
						"select": { "css": "input#privateItem" },
						"name": { "css": "label[for^='privateItem']"},
						"des": { "css": "#permission > div.change-type > div > div:nth-child(3) > p"}
					}
				},				
				"Rights":{
					"key": { "css": "a[href^='#authorize']"},
					"selectGroup": { "css": "#authorize > form > div:nth-child(2) > div > select "},  //排序第一的分组
					"selectRight": { "css": "#authorize > form > div:nth-child(3) > div > select "},  //浏览的权限
					"addbtn": { "css": "#authorize > form > div.col-sm-12.save-setting > button"},
					"info": {
						"gname": { "css": "#authorize > table > tbody > tr:nth-child(2) > td:nth-child(1)" },
						"gpermission": { "css": "#authorize > table > tbody > tr:nth-child(2) > td:nth-child(2)" },
						"operation": {							
							"del": { "css": "#authorize > table > tbody > tr:nth-child(2) > td:nth-child(3)" }
						}
					}
				},
				"group":{
					"key": {"css": "a[href^='#grouping']" },
					"name": {"css": "input#groupName"},
					"createbtn": {"css": "div[ng-click='createGroup()']"},
					"inputmember": { "css":"input#groupUserName"},
					"addbtn": { "css":"div[ng-click='addUser()']"},
					"memberlist": { "css": "#grouping > form > div:nth-child(3) > div > div.col-sm-12.labels-box >div"},
					"backbtn": { "css": "div[ng-click*='editGroup']"},
					"info":{
						"gname": { "css": "#grouping > table > tbody > tr:nth-child(1) > td:nth-child(1)"},
						"gmember": { "css": "#grouping > table > tbody > tr:nth-child(1) > td:nth-child(2)"},
						"operation":{
							"edit": { "css": "#grouping > table > tbody > tr:nth-child(1) > td:nth-child(3)>a:nth-child(1)"},
							"del": { "css": "#grouping > table > tbody > tr:nth-child(1) > td:nth-child(3)>a:nth-child(2)"}
						}
					}
				}
			}
		},		
		"remove": { 
			"key":{"css": "div.flex-table > div:nth-child(3) > div:nth-child(4) > a:nth-child(4)"},
			"delWindowTitle": {"css":"h4#deleteWebsiteConfirmModalLabel"},
			"clearDataSource": { "css": "input[ng-model^='delete']" },
			"confirm_btn": {"css": "button[ng-click^='confirm']"},
			"cancel_btn": {"css": "button.btn.btn-default.ng-binding[data-dismiss^='mod']"}
		}
	},
	"editArea":{
		"loc": { "css":"div.CodeMirror-code > div:nth-child(1) > pre.CodeMirror-line"},
		"splitTableft": { "css":"div.CodeMirror-code > div:nth-child(1) > pre > span"},
		"saveBtn": { "css":"#codeToolbar > div:nth-child(2) > div:nth-child(1)"},
		"saveSuccess": { "css":"div#messageTipId.alert > div#messageTipConentId"},
		"backtoPersonalpage": { "css":"#codeToolbar > div.btn-group.brand-btn-group > a"}
	},
	"checkpage":{
		"first": { "css": "div#_mdwiki_content_container_mdwiki_0" },
		"second": {	"css": "div#_mdwiki_content_container_mdwiki_0 > div > p"}
	}
}

var purchaseVip = {
	"description":{
		"freeAccount":{},
		"vipAccount":{}
	},
	"level":{
		"oneMonth":{},
		"halfYear": {},
		"oneYear": {}
	},	
	"channel":{
		"wechat": {"css": "ul > li[ng-click*='wechat']"},
		"alipay": { "css": "ul > li[ng-click*='alipay']"}
	},
	"rechargeAccount": { "css": "div.pay-main-field > div:nth-child(1) > input"},
	"rechargeAmount": { "css": "div.pay-main-field > div:nth-child(2) > div > input"},
	"rechargeInfo": { "css":"div.pay-main-field > div.field-item.ng-scope > div"},
	"purchasebtn": { "css":"div[ng-click*='selectedVip']"},
	"rechargebtn": { "css":"div.field-item > input[ng-click*='recharge()']"}
}


var signIn = {
	"username": { "name":"email"},
	"password": { "css": "input[ng-model='password']"},
	"login": { "css":"a[ng-click*='login()']"},
	"checktext": { "id":"total-err"},
	"signsuccess": { "css": "ul[ng-show*='isLogin']"}
}

var signUp = {
	"username":{"name":"username"},
	"password": { "css": "input[ng-model='password']"},
	"policyinfo":{"linkText":""},
	"signupbtn": { "css":"a[ng-click*='register()']"},
	"checktext": "div.form-group.text-danger.ng-binding",
	"repeattext":"div.text-danger.ng-binding",
	"success": { "css": "img[ng-src*='wiki_success.png']" },
	"backbtn": { "css":"div[ng-click='goBack()']"},
	"gotohome":{"css":"div[ng-click='goUserHome()']"}
}

module.exports = { signUp, signIn, personalpage, tmppage, homepage, realNamepage, mysite, purchaseVip};

