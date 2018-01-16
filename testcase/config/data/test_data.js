/**
 * Create on 2017/11/06
 * Author : Duke
 * Description: elements config
 */

'use strict';

const Info = {
	signup:{
		emptyaccount:{
			username:'',
			password:''
		},
		invalidaccount:{
			username: 'AV009',
			password: '123'
		},
		numberaccount:{
			username: 1111
		},
		zhaccount:{
			username: '名字规则'
		},
		account:{
			username:'test001',
			password:'123456'
		},
		expectMsg:{
			emptyusername:'*账户名为必填项',
			emptypassword:'*密码最少6位',
			zhusername:'*账户名只能包含小写字母、数字',
			invalidusername:'*账户名为必填项',
			invalidpassword:'*密码最少6位',
			numberaccount:'*账户名不可为纯数字',
			filteraccount:'您输入的内容不符合互联网安全规范，请修改',
			repeataccount:'用户名已存在',
			overaccount: '*账户名需小于30位'
		}
	},
	signIn:{
		emptyaccount:{
			username:'',
			password:''
		},
		invalidaccount:{
			username:'11',
			password:'123'
		},
		numberaccount: {
			username: 110111,
			password: '110111'
		},
		account:{
			username:'testvip',
			password:'123456'
		},
		expectMsg:{
			emptyaccount:'*用户名或密码错误',
			emptypassword:'*用户名或密码错误',
			invalidaccount:'*用户不存在',
			invalidpassword:'*密码错误'			
		}
	},
	realName:{
		cellphone:"15219498528"
	},
	tmppage:{
		personal:{
			blankpage:"",
			basicpage: "基本模板",
			resumepage:"工作经历",
			vippage:""
		},
		company:{
			prepage1:"新闻资讯",
			prepage2:"SPECIAL LINK"
		},
		group:{
			prepage:"ParaCraft小组"
		},
		game:{
			prepage:"全国3D创作大赛"
		}
	},
	sites:{
		sitename:"11",
		siteAddress:"keepwork.com/test001/11",
		check:{
			pageval:'',
			pagevalagain:'This is test page!'
		},
		content: 'This is test page!',
		saveResult:{
			success:"文件保存成功",
			failed:"文件保存失败"
		},
		setup1:{
			windowicon_path:"\\testcase\\config\\img\\logo1.jpg",
			linuxicon_path:"/testcase/config/img/logo1.jpg",
			invalidsitename:"AV09",
			sitename:"中文网站",
			invalidsiteintro: "AV09",			
			siteintro:"this is a test website~ welcome here.",
			invalidsitelabels: ['','12345678901','AV09','123','123'],
			sitelabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'a', 'bb', 'ccc', 'd中文','1e', 'abc', 'keepwork','auto','knowledge'],
			checkRes:{
				savesuccess:"站点配置修改成功!!!",
				savefailed:"您输入的内容不符合互联网安全规范，请修改",
				savelabel: ["标签不能为空", "标签最长10个字", "您输入的内容不符合互联网安全规范，请修改", '', "该标签已添加"],
				labeloverload:"最多支持20个标签"
			}
		},
		setup2: {
			windowicon_path: "\\testcase\\config\\logo2.jpg",
			linuxicon_path: "/testcase/config/img/logo2.jpg",
			sitename: "mysite",
			siteintro: "This is website created by keepwork, welcome to here~",			
			sitelabels: ['news','keepwork','ADI']
		},
		datasource:{
			data:"官方git数据源"
		},
		DomainName:{
			noVip_notes:'* 您还不是VIP，不能设置cname 成为VIP'
		},
		permissions:{

		}
    }
}

module.exports  = Info;