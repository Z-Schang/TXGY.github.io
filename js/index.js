$(function(){

	// 登录框
	$('.signIn .tx').on('click',function(){
		$(this).css({opacity:0})
		$('.signIn .signInBox .wait').show();
		setTimeout(function(){
			$('.signIn').fadeOut(500);
		}, 1700);
	});
	$('.signIn .brBox span').on('click',function(){
		$('.signIn .signInBox .error').show();
		setTimeout(function(){
			$('.signIn .signInBox .error').fadeOut(500);
		}, 1000);
	});

	// 热门项目数据读取
	appendBox(data);

	// 地球按钮
	$('.videoPlay img').on('click', function(){
		$(this).toggleClass('active2');
		$('.mask').toggleClass('univer');
		var p = $('.playMusic')[0];
		if(p.paused){
			p.play();
		}else{
			p.pause();
		}
		var timer;
		timer = setInterval(function(){
			clearInterval(timer);
			$('.mask .active3').fadeOut(1)
							   .removeClass('active3')
							   .siblings('.messBox')
							   .fadeIn(500)
							   .addClass('active3')
		},1000);
		starShow();
	});
	// 背景图切换，触发星星特效判断
	function starShow(){
		var u = $('.mask').hasClass('univer');
		var w = $('.mask').width();
		var h = $('.mask').height();
		if(u){
			appendStar(w, h);
			$('nav').slideUp();
		}else{
			$('.mask').find('.littleStar').remove();
			$('nav').slideDown();
		}
	};
	// 置入星星
	function appendStar(w, h){
		for(var i = 0; i < 99; i ++){
			var star = $('<span class="littleStar"></span>')[0];
	        $('.mask')[0].appendChild(star);
	        //位置随机
	        var x = parseInt(Math.random() * w);
	        var y = parseInt(Math.random() * h);
	        star.style.left = x + 'px';
	        star.style.top = y + 'px';
	        star.style.zIndex = "0";
	        //大小随机
	        var scale = Math.random() * 1.5;
	        star.style.transform = 'scale('+ scale + ', ' + scale + ')';
	        //闪烁频率随机
	        var rate = Math.random() * 1.5;
	        star.style.animationDelay = rate + 's';
	    }
	};

	// 轮播图设置
	$('#swiper').sliderImg({
		image: ["./images/EnterInit/lbt.jpg","./images/EnterInit/lbt.jpg","./images/EnterInit/lbt.jpg","./images/EnterInit/lbt.jpg"],
		interVal: 2300,
	});

	// 热门项目
	// 1.鼠标移入移出变化
	$('.lBinner').on('mouseenter',function(e){
		$(this).css({'boxShadow':'0 0px 15px rgba(0,0,0,0.3)'})
			   .find('.imgBox').css({'opacity':1})
			   .end()
			   .find('.imgBox img').css({'transform':'scale(1.1, 1.1)'});
	}).on('mouseleave',function(e){
		$(this).css({'box-shadow':'none'})
			   .find('.imgBox').css({'opacity':0.8})
			   .end()
			   .find('.imgBox img').css({'transform':'scale(1.0, 1.0)'});
	});

	// 2.点击标题显示捐款页
	$('.PBItem h3').on('click',function(e){
		$(this).parent().find('.hoverBox').fadeIn(300);
	});

	// 3.移出盒子隐藏捐款页
	$('.hoverBox').on('mouseleave',function(e){
		$(this).fadeOut(300);
	});

	// 4.热门项目页面切换，通过盒子交替显示
	$('.itemView .toPrev').add('.itemView .toNext').on('click',function(e){
		$('.part1').fadeToggle(800);
	});

	// 荣耀明星
	// 1.鼠标移入头像触发特效
	$('.starPic').on('mouseenter',function(e){
		$(this).css({'transformOrigin':'center','transform':'scale(1.1, 1.1)','boxShadow':'0 0px 20px rgba(255,0,0,0.3)'});
	}).on('mouseleave',function(e){
		$(this).css({'transformOrigin':'center','transform':'scale(1, 1)','boxShadow':'none'});
	});
	
	// 2.点击明星名字显示捐款二维码
	$('.starBox h3').on('click',function(e){
		$(this).parent().find('.hover-star').fadeIn(500);
	}).parent().on('mouseleave',function(e){
		$(this).parent().find('.hover-star').fadeOut(500);
	});

	// 特别鸣谢
	// 左右切换企业列表
	$('.toPrev').on('click',function(){
		var ul = $(this).parent().find('ul');
		ul.removeClass();
		ul.addClass('partA');
	});
	$('.toNext').on('click',function(){
		var ul = $(this).parent().find('ul');
		ul.removeClass();
		ul.addClass('partB');
	});

	// 右下浮栏
	$('.floatBoard .ewm').on('mouseenter', function(){
		console.log(1);
		$('.floatBoard .ewmBox').fadeIn(200);
	}).on('mouseleave', function(){
		$('.floatBoard .ewmBox').fadeOut(200);
	});

	// 滚动条变化监听
	$(document).on('scroll', function(){
		if($(document).scrollTop() >= 780){
			$('.floatBoard').fadeIn(500);
			$('nav').slideDown();
		}else{
			$('.floatBoard').fadeOut(500);
		}
	});


	
})