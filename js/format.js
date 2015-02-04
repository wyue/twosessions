var w;
$(function(){
	w=$(document).width();

	/*****************************
	页面1
	******************************/
	init_all();
	/*测试用*/
	$("#event_1").click(function(){
		event_1();
	})
	$("#event_2").click(function(){
		event_2();
	})
	
	/*初始化所有动画*/
	$("#init_act").click(function(){
		init_act();
	})
})


function jiao(){
        $("#jiao").addClass("jiao");
        console.log('显示翻页动画');
}
function noJiao(){
        $("#jiao").removeClass("jiao");
        $("#jiao").addClass("noJiao");
        console.log('取消翻页动画');
}

function init_all(){
	//计算各种大小
	var fs=w/100;	//标准字号
	$("body").css("font-size",fs+"px");
	
	//耳机大小 
	var ear_w=w/8; 
	$(".img_ear").width(ear_w);

	//耳机距离左侧距离
	var ear_left=w-ear_w*2;  
	$(".earbox").css("left",ear_left+"px");
	
}

/*初始化所有动画*/
function init_act(){
	$(".actbox").addClass("act_init");
}

/*动画0*/
function event_0(){
	$("#date0").removeClass("act_init");	
	$("#date0").addClass("act_zoom_out");
	
	$("#indexbox0").removeClass("act_init");	
	$("#indexbox0").addClass("act_zoom_out");
}

/*动画1*/
function event_1(){
	$("#box1").removeClass("act_init");	
	$("#box1").addClass("act_left");
}

/*动画2*/
function event_2(){
	$("#box2").removeClass("act_init");	
	$("#box2").addClass("act_zoom_out");
}






