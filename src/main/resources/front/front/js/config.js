
var projectName = '医院信息管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '医生信息',
	url: './pages/yishengxinxi/list.html'
}, 

{
	name: '医院概况',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springbooty2577/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["新增","查看","修改","删除","医生信息"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除"],"menu":"科室","menuJump":"列表","tableName":"keshi"}],"menu":"科室管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除","查看评论","挂号"],"menu":"医生信息","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除","支付","取消","添加病例"],"menu":"挂号信息","menuJump":"列表","tableName":"guahaoxinxi"}],"menu":"挂号信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除","审核","支付","查看评论"],"menu":"取消挂号","menuJump":"列表","tableName":"quxiaoguahao"}],"menu":"取消挂号管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["新增","查看","修改","删除","打印"],"menu":"问诊记录","menuJump":"列表","tableName":"wenzhenjilu"}],"menu":"问诊记录管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","修改","删除"],"menu":"病房","menuJump":"列表","tableName":"bingfang"}],"menu":"病房管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除","报表"],"menu":"药房","menuJump":"列表","tableName":"yaofang"}],"menu":"药房管理"},{"child":[{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"管理员","tableName":"users"}],"menu":"管理员管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"医院概况","tableName":"news"},{"appFrontIcon":"cuIcon-service","buttons":["新增","查看","修改","删除"],"menu":"在线客服","tableName":"chat"},{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","查看评论","挂号"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","支付","取消"],"menu":"挂号信息","menuJump":"列表","tableName":"guahaoxinxi"}],"menu":"挂号信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看"],"menu":"取消挂号","menuJump":"列表","tableName":"quxiaoguahao"}],"menu":"取消挂号管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看"],"menu":"问诊记录","menuJump":"列表","tableName":"wenzhenjilu"}],"menu":"问诊记录管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","查看评论","挂号"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","添加病例"],"menu":"挂号信息","menuJump":"列表","tableName":"guahaoxinxi"}],"menu":"挂号信息管理"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","审核"],"menu":"取消挂号","menuJump":"列表","tableName":"quxiaoguahao"}],"menu":"取消挂号管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","打印","删除"],"menu":"问诊记录","menuJump":"列表","tableName":"wenzhenjilu"}],"menu":"问诊记录管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["查看"],"menu":"病房","menuJump":"列表","tableName":"bingfang"}],"menu":"病房管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看"],"menu":"药房","menuJump":"列表","tableName":"yaofang"}],"menu":"药房管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","查看评论","挂号"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"医生","tableName":"yisheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
