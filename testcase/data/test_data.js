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
			username:'test001',
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
	}
}

module.exports  = Info;