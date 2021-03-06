var do_Page=sm("do_Page");
var do_App=sm("do_App");
var root=ui("$");
var do_ALayout_root=ui("do_ALayout_root");
var do_ALayout_size = ui("do_ALayout_size")
var do_ALayout_model = ui("do_ALayout_model")
var do_Notification = sm("do_Notification");
var do_ImageView_size = ui("do_ImageView_size")
var do_ImageView_model = ui("do_ImageView_model")
var do_Global = sm("do_Global")
var do_Storage =sm("do_Storage")

var do_ALayout_back = ui("do_ALayout_back")

do_ALayout_back.on("touch", function(data) {
	do_Global.setMemory("reader_flg","")
	do_Global.setMemory("change","0")
	do_App.closePage();
});

var sizeflg = true
var modelflg = true

do_Page.on("show", function(data){
	do_ALayout_root.visible=true;
	var change_flg = do_Global.getMemory("change")
	if(change_flg == "0"){
		sizeflg =true
		modelflg =true
		do_ImageView_size.source = "source://image/font_size_add.png"
		do_ImageView_model.source = "source://image/night.png"
	}
	if(change_flg == "1"){
		sizeflg =true
		modelflg =false
		do_ImageView_size.source = "source://image/font_size_add.png"
		do_ImageView_model.source = "source://image/sun.png"
	}
	if(change_flg == "2"){
		sizeflg =true
		modelflg =true
		do_ImageView_size.source = "source://image/font_size_add.png"
		do_ImageView_model.source = "source://image/night.png"
	}
	if(change_flg == "3"){
		sizeflg =false
		modelflg =false
		do_ImageView_size.source = "source://image/font_size_del.png"
		do_ImageView_model.source = "source://image/sun.png"
	}
	if(change_flg == "4"){
		sizeflg =false
		modelflg =true
		do_ImageView_size.source = "source://image/font_size_del.png"
		do_ImageView_model.source = "source://image/night.png"
	}
	if(change_flg == "5"){
		sizeflg =false
		modelflg =true
		do_ImageView_size.source = "source://image/font_size_del.png"
		do_ImageView_model.source = "source://image/night.png"
	}
	if(change_flg == "6"){
		sizeflg =true
		modelflg =true
		do_ImageView_size.source = "source://image/font_size_add.png"
		do_ImageView_model.source = "source://image/night.png"
	}
	if(change_flg == "7"){
		sizeflg =false
		modelflg =false
		do_ImageView_size.source = "source://image/font_size_del.png"
		do_ImageView_model.source = "source://image/sun.png"
	}
	if(change_flg == "8"){
		sizeflg =true
		modelflg =false
		do_ImageView_size.source = "source://image/font_size_add.png"
		do_ImageView_model.source = "source://image/sun.png"
	}
});

do_Page.on("hide", function(data){
	do_ALayout_root.visible=false;
});

do_ALayout_root.on("touch",function(){
	do_ALayout_root.visible=false;
})

do_ALayout_size.on("touch",function(){
	do_Global.setMemory("reader_flg","0")
	if(sizeflg){
		do_ImageView_size.source = "source://image/font_size_del.png"
		sizeflg =false
		if(do_ImageView_model.source == "source://image/sun.png"){
			do_Global.setMemory("change", "7")
			do_Global.setMemory("change_model","7")
			do_Page.fire("change_size_add")//黑夜模式放大
		}
		if(do_ImageView_model.source == "source://image/night.png"){
			do_Global.setMemory("change", "5")
			do_Global.setMemory("change_model","5")
			do_Page.fire("change_size_add1")//白天模式放大
		}
	}else {
		do_ImageView_size.source = "source://image/font_size_add.png"
		sizeflg =true
		if(do_ImageView_model.source == "source://image/night.png"){
			do_Global.setMemory("change", "6")
			do_Global.setMemory("change_model","6")
			do_Page.fire("change_size_del")//白天模式缩小
		}
		if(do_ImageView_model.source == "source://image/sun.png"){
			do_Global.setMemory("change", "8")
			do_Global.setMemory("change_model","8")
			do_Page.fire("change_size_del1")//黑夜模式缩小
		}
	}
})


do_ALayout_model.on("touch",function(){
	do_Global.setMemory("reader_flg","0")
	if(modelflg){
		do_ImageView_model.source = "source://image/sun.png"
		modelflg =false
		if(do_ImageView_size.source == "source://image/font_size_del.png"){
			do_Global.setMemory("change", "3")
			do_Global.setMemory("change_model","3")
			do_Page.fire("change_model_sun")//放大模式下黑夜
		}
		if(do_ImageView_size.source == "source://image/font_size_add.png"){
			do_Global.setMemory("change", "1")
			do_Global.setMemory("change_model","1")
			do_Page.fire("change_model_sun1")//减小模式下黑夜
		}
	}else {
		do_ImageView_model.source = "source://image/night.png"
		modelflg =true
		if(do_ImageView_size.source == "source://image/font_size_del.png"){
			do_Global.setMemory("change", "4")
			do_Global.setMemory("change_model","4")
			do_Page.fire("change_model_night")//放大模式下白天
		}
		if(do_ImageView_size.source == "source://image/font_size_add.png"){
			do_Global.setMemory("change", "2")
			do_Global.setMemory("change_model","2")
			do_Page.fire("change_model_night1")//减小模式下白天
		}
	}
})

