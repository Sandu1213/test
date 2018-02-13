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
			username:'test1',
			password:'123456'
		},
		bindaccount:{
			mobile:'15219498528',
			email:'dslhmily@gmail.com'
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
			siteicon:"\\testcase\\config\\img\\sitelogo1.jpg",			
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
			siteicon: "\\testcase\\config\\sitelogo2.jpg",			
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
			sitetype:{
				public:'公有项目',
				private:'私有项目'
			},
			Right:{
				browser:'浏览',
				edit:'编辑',
				rejust:'拒绝'
			},
			group:{
				name:"123",
				member:["test1","testvip"],
				modify:"test3"
			}
		}
	},
	setupcenter:{
		profile:{
			avatar: "\\testcase\\config\\img\\userlogo1.jpg",
			nickname:{
				invalid:"AV110",
				valid:"hello"				
			},
			position:{
				invalid:"AV01",
				overlimit: "广东省深圳市南山区科技园德赛科技23楼2303~2306广东省深圳市南山区科技园德赛科技23楼2303~2306 \
				    广东省深圳市南山区科技园德赛科技23楼2303~2306广东省深圳市南山区科技园德赛科技23楼2303~2306 \
					广东省深圳市南山区科技园德赛科技23楼2303~2306广东省深圳市南山区科技园德赛科技23楼2303~2306",
				valid: "广东省深圳市南山区科技园德赛科技23楼2303~2306"
			},
			intro:{
				invalid:"习近平",
				overlimit: "水泥基渗透结晶活性母料是专业用于生产水泥基渗透结晶型防水涂料(简称：CCCW)的核心添加剂。其主要防水原理是：\
				材料中含有的活性化合物与水作用后，以水为载体向混凝土内部结构的空隙进行渗透，渗透到砼内部的孔隙中的活性化合物与混凝土中的游离氧化钙交互反应生成不溶于水的枝蔓状纤维结晶物\
				(硅酮钙结晶 硫铝酸钙等)。结晶物在结构孔缝中吸水膨胀，由疏至密，使混凝土结构表层向纵深逐渐形成一个致密的抗渗区域，大大提高了结构整体的抗渗能力。用C型防水涂料施工的防水涂层中由于水化空间和C-S-H凝胶的束缚，形成大量的凝胶状结晶，在土层中起到密实抗渗作用，随着时间(一般为14-28天)的发展，\
				结晶量也在提增。防水涂层中的凝胶状结晶和深入混凝土结构内部的渗透结晶都提高了混凝土结构的密实度，即增强了混凝土结构的抗渗能力。由于水泥的水化反应是一个不完全的反应过程，在不失水的状态下，多年以后反应仍有进行，而在后期的水化反应过程中，同样能继续催化活性化合物而生成结晶，\
				因此，混凝土结构即使被水再次穿透或局部受损开裂(裂缝小于0.4mm)，在结晶的作用下能自行修补愈合，具有多次抗渗的能力，从本质上改善了普通混凝土结构体积的不稳定带来的再次裂渗。",
				valid:"社会主义好！"
			},
			checkRes:{
				savesuccess: "修改成功",
				warning: "对不起，您的输入内容有不符合互联网相关安全规范内容，暂不能保存",
				overPosition: "位置字数超过限制。",
				overIntro: "个人简介字数超过限制。"
			}
			
		}
	}
}

module.exports  = Info;