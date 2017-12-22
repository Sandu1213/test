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
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[1]"},
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
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[2]" },
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
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[3]" },
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
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[4]" },
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
		"key": { "xpath": "//*[@id='userCenterSubPage']/div/div[1]/div[2]/div[1]/div[1]/div/ul/li[5]" },
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
	"type": { "css":" div.panel-body.website-flex > div > div:nth-child(6) > div:nth-child(1) > span"},
	"siteName": {"css": "div.ftbody-item.ng-scope > div:nth-child(1)"},
	"siteAddress": { "css": "div.ftbody-item.ng-scope > div:nth-child(2) > a"},
	"createDate": { "css": "div.ftbody-item.ng-scope > div:nth-child(3)"},
	"operation":{
		"see": {"css": "div.ftbody-item.ng-scope > div:nth-child(4) > a:nth-child(1)"},
		"edit": { "css": "div.ftbody-item.ng-scope > div:nth-child(4) > a:nth-child(2)"},
		"setup": { "css": "div.ftbody-item.ng-scope > div:nth-child(4) > a:nth-child(3)"},
		"remove": { "css": "div.ftbody-item.ng-scope > div:nth-child(4) > a:nth-child(4)"},
		"delWindowTitle": { "css":"h4#deleteWebsiteConfirmModalLabel"},
		"confirm_btn": { "css":"button[ng-click*='confirm']"},
		"cancel_btn": {"css":"button.btn.btn-default.ng-binding[data-dismiss*='modal']"}

	}

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

module.exports = { signUp, signIn, personalpage, tmppage, homepage, realNamepage,mysite};

