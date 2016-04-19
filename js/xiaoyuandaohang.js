//设置cookie
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays);
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

//获取cookie
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}

//检查cookie
function checkCookie(c_name){
	var name=getCookie(c_name)
	if (name!=null && name!=""){
		return true;
	}
	else {
  		return false;
  	}
}

//设置皮肤颜色
function setBackgroundColor(){
	var bColor = "bColor";
	
	if(checkCookie(bColor)){
		//获取背景颜色
		bColor = getCookie(bColor);
		//获取元素对象
		var header = document.getElementById('header');
		var submitBtn = document.getElementById('submitBtn');
		var commonSite = document.getElementById('commonSite');
		var weibo = document.getElementById('weibo');
		var weixin = document.getElementById('weixin');
		
		//设置对象的背景颜色为指定颜色
		header.style.backgroundColor = bColor;
		submitBtn.style.backgroundColor = bColor;
		commonSite.style.backgroundColor = bColor;
		weibo.style.backgroundColor = bColor;
		weixin.style.backgroundColor = bColor;
		
		//获取元素对象
		var searchBox = document.getElementById('searchBox');
		var common = document.getElementById('common');
		var otherLeft = document.getElementById('otherLeft');
		var otherRight = document.getElementById('otherRight');
		
		//设置对象边框颜色为指定颜色
		searchBox.style.borderColor = bColor;
		common.style.borderColor = bColor;
		otherLeft.style.borderColor = bColor;
		otherRight.style.borderColor = bColor;
  
  		//获得表头元素对象
		var ul = document.getElementsByTagName('ul');	
		//设置表头对象为指定颜色
		for(var i = 0; i < ul.length; i++){
			ul[i].style.color = bColor;
		}	
	}else{
		
	}
}

//改变背景颜色, 实现换肤功能
function changeBackgroundColor(color_index){
	//定义保存4种颜色的数组
	var color = new Array(6);
  
	//获取传递过来颜色下标
	var index = color_index;
  
	color[0] = "mediumseagreen"; //间海蓝
	color[1] = "darkcyan";		//暗青色
	color[2] = "lightseagreen";	//亮海蓝色
	color[3] = "turquoise"; 	//青绿色
	color[4] = "lightgreen";	//亮绿色
	color[5] = "darkgoldenrod";	//暗金黄色

	//将当前颜色保存在cookie中
	var c_name = "bColor";
	var value = color[index];
	//设置过期时间(天数)
	var expiredays = 1;
	setCookie(c_name,value,expiredays);
  
	//设置皮肤颜色
	setBackgroundColor();
	
	//设置鼠标划过颜色
	var bColor = "bColor";
	if(checkCookie(bColor)){
		//获取背景颜色
		bColor = getCookie(bColor);
		
		var commonLink = document.getElementById('common').getElementsByTagName('a');
	
		for(var i = 0; i < commonLink.length; i++){
			commonLink[i].onmouseover = function(){	
				this.style.color = bColor;
			}
		
			commonLink[i].onmouseout = function(){	
				this.style.color = "#000";
			}
		}
	
		var otherLink = document.getElementById('otherRight').getElementsByTagName('a');
	
		for(var i = 0; i < otherLink.length; i++){
			otherLink[i].onmouseover = function(){
				this.style.color = bColor;	
			}	
		
			otherLink[i].onmouseout = function(){
				this.style.color = "#000";	
			}	
		}
	}
	
}

//初始化函数
function initPage(){
	//初始化皮肤颜色
	setBackgroundColor();
}


//页面加载时执行的函数
window.onload = function(){
	//alert("初始化背景颜色函数执行");	
	initPage();
}

