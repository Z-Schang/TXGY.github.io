
(function(){
	$.fn.extend({
		sliderImg: function(options){
			options.father = this || $('body');
			new Swiper(options);
		}
	})
	function Swiper(opt){
		var opts = $.extend({'image':[],'interVal':2000},opt);
		this.img = opts.image;
		this.wrap = opts.father;
		this.interVal = opts.interVal;
		this.init();
	}
	Swiper.prototype.init = function(){
		this.nowindex = 0;
		this.timer = undefined;
		this.picwidth = this.wrap.width();
		this.flag = true;
		this.len = this.img.length;
		this.creatDom();
		this.bindEvent();
		this.sliderAuto();
	}
	Swiper.prototype.creatDom = function(){
		var len = this.len;
		var str = '';
		var listStr = '';
		var w = this.wrap.width();
		var h = this.wrap.height();
		var ulW = w * (len + 1);
		var imgBox = $('<ul class="imgbox"></ul>');
		var order = $('<div class="order"></div>');
		var list = $('<ul></ul>');
		// var btn = '<div class="btn">\
		// 	<span class="lr prev">&lt;</span>\
		// 	<span class="lr next">&gt;</span>\
		// </div>';
		imgBox.css({
			'width': ulW + 'px',
			'height': h + 'px'
		})
		for(var i = 0; i < len; i ++){
			str += '<li><img src="' + this.img[i] + '" alt=""></li>';
			listStr += '<li></li>';
		}
		str += '<li><img src="' + this.img[0] + '" alt=""></li>';
		$(listStr).appendTo(list);//!插入写法！
		this.wrap.append(imgBox.html(str))
				 // .append(btn)
				 .append(order.append(list));
		imgBox.find('li').css({
			'width': w + 'px',
			'height': h + 'px'
		});
		$('.order li').eq(0).addClass('active');
	}
	Swiper.prototype.bindEvent = function(){
		var self = this;
		$('.order li').on('click',function(){
			var index = $(this).index();
			self.move(index);
			self.changeStyle();
		});
	}
	Swiper.prototype.move = function(dir){
		var self = this;
		var len = self.len;
		if(self.flag){
			self.flag = false;
			if(dir == 'prev' || dir == 'next'){
				if(dir == 'prev'){
					if(self.nowindex == 0){
						$('.imgbox').css({left: - (len * self.picwidth)});
						self.nowindex = len - 1;
					}else{
						self.nowindex -= 1;
					}
				}else{//next
					if(self.nowindex == len - 1){
						$('.imgbox').animate({left: -(self.picwidth * len)}, function(){
							$(this).css({left:0});
							self.sliderAuto();
							self.flag = true;
						})
						self.nowindex = 0;
					}else{
						self.nowindex += 1;
					}
				}
			}else{
				self.nowindex = dir;
			}

			self.slider();
			}
	}
	Swiper.prototype.changeStyle = function(){
		$('.active').removeClass('active');
		$('.order li').eq(this.nowindex).addClass('active');
	}
	Swiper.prototype.slider = function (){
		var self = this;
		$('.imgbox').animate({left: -(self.picwidth * self.nowindex)}, function(){
			self.sliderAuto();
			self.flag = true;
		});
	}
	Swiper.prototype.sliderAuto = function(){
		var self = this;
		clearTimeout(self.timer);
		self.timer = setTimeout(function(){
			self.move('next');
			self.changeStyle();
		},self.interVal);
	}
	
})();

