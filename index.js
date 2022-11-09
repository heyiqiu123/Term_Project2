// 乐购商城首页js
// 2022-10-21
$(function() {
    // 首页轮播
    $('#banner').tyslide({
        boxh: 460, //盒子的高度
        w: 1000, //盒子的宽度
        h: 390, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 20, //控制按钮高度
        radius: 10, //控制按钮圆角度数
        controlsColor: "#d7d7d7", //普通控制按钮的颜色
        controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
        isShowNum: true //是否显示数字
    });
	
	
	// //电子书tab切换
	$('.ebooks-list').eq(1).hide();
	$('.ebooks-list').eq(2).hide();
	$('ebooks-nav>li').mouseenter(function(){
	// 	//导航高亮颜色切换
	$(this).addClass('active').siblings('li').removeClass('active');
	// 	//获取索引
	var index=$(this).index();
	// 	//内容切换
	$('.ebooks-list').eq(index).show().siblings('.ebooks-list').hide();
	});
	
	// $(function(){
	// 	$(".ebooks-nav >li").click(function(){//选中tabbox中的li
	// 		$(this).addClass("active").siblings('li').removeClass("active");//被点击的div添加active，其他的div移除active
	// 		var index = $(this).index();//获取当前的li的索引值.index()方法
	// 		$('.ebooks-list').eq(index).show().siblings('ebooks-list').hide();
	// 		// $(this).parsent().siblings().children().eq(index).addClass("active")
	// 		// .siblings().removeClass("active")
	// // 		// $(".ebooks-title>div").eq(index).show().siblings().hide();//显示或者隐藏
	
	// 	})
	// })

    // 图书/电子书轮播
	$('#ebooks-banner').tyslide({
	    boxh: 223, //盒子的高度
	    w: 332, //盒子的宽度
	    h: 223, //图片的高度
	    isShow: true, //是否显示控制器
	    isShowBtn: true, //是否显示左右按钮
	    controltop: 40, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
	    controlsW: 20, //控制按钮宽度
	    controlsH: 2, //控制按钮高度
	    controlsColor: "#d7d7d7", //普通控制按钮的颜色
	    controlsCurrentColor: "#00ff00", //当前控制按钮的颜色
	    
	});
	// 新书列表手风琴效果
	$('.ebooks .right-box ul > li').mouseenter(function(){
		// 所有兄弟：隐藏详情 显示标题
		$(this).siblings().find('.desc').hide();
		$(this).siblings().find('.ebooks-title').show();
		$(this).find('.ebook-title').hide();
		$(this).find('.desc').show();
	})
	
})