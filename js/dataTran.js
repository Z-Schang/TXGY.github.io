
//模拟数据传入
var data = [{
	'image' : './images/itemBox/child1.jpg',
	'titile' : '百万读书计划',
	'people' : '12312',
	'moneny' : '12312',
	'moneny2': '213123',
	'monenyFor' : 'XXX公益基金',
	'message' : '百万读书计划，让更多贫困儿童得到读书的机会，您的每一分钱，都会成为儿童成长的阶梯。',
	'ewm' : './images/itemBox/ewm-forchild.png'
},{
	'image' : './images/itemBox/child2.jpg',
	'titile' : '免费午餐计划',
	'people' : '12312',
	'moneny' : '12312',
	'moneny2': '213123',
	'monenyFor' : 'XXX公益基金',
	'message' : '您捐献的每一分钱，都会成为儿童们桌子上的美味健康午餐，让饥饿和疾病远离我们祖国的花朵。',
	'ewm' : './images/itemBox/ewm-forchild.png'
},{
	'image' : './images/itemBox/child3.jpg',
	'titile' : '天然水运输计划',
	'people' : '12312',
	'moneny' : '12312',
	'moneny2': '213123',
	'monenyFor' : 'XXX公益基金',
	'message' : '缺水的花儿会枯萎，缺水地区的孩子们还在坚强地活着，只要我们每个人捐出一瓶矿泉水的钱，就足以拯救一个处于困难的生命。',
	'ewm' : './images/itemBox/ewm-forchild.png'
},{
	'image' : './images/itemBox/child4.jpg',
	'titile' : '农村支教计划',
	'people' : '12312',
	'moneny' : '12312',
	'moneny2': '213123',
	'monenyFor' : 'XXX公益基金',
	'message' : '把您所知道的外面世界的精彩，分享给孩子们吧，把您所会的技能，也教教孩子吧。只要每个人拯救一个孩子，只要一个，那么世界就会更美好。',
	'ewm' : './images/itemBox/ewm-forchild.png'
},{
	'image' : './images/itemBox/child5.jpg',
	'titile' : '孤儿关爱计划',
	'people' : '12312',
	'moneny' : '12312',
	'moneny2': '213123',
	'monenyFor' : 'XXX公益基金',
	'message' : '没有父母的孩子们，就像失去了蜗壳的蜗牛，脆弱而敏感，让我们牵着孩子的手，告诉他们，有我们在。',
	'ewm' : './images/itemBox/ewm-forchild.png'
},{
	'image' : './images/itemBox/child6.jpg',
	'titile' : '学校搭建计划',
	'people' : '12312',
	'moneny' : '12312',
	'moneny2': '213123',
	'monenyFor' : 'XXX公益基金',
	'message' : '每一座小学，就像是贫困孩子们的庇护所，他们可以学到知识，获得掌控自己命运的机会，每所学校的创建，就是希望的播种。',
	'ewm' : './images/itemBox/ewm-forchild.png'
}];
// 数据传入函数
function appendBox(data, ele){
	for(i in data){
		var innerEle = '<div class="lBinner">\
			<div class="imgBox">\
				<img src="'+ data[i].image + '" alt="爱心捐赠">\
			</div>\
			<div class="PBItem">\
				<h3>'+ data[i].titile + '</h3>\
				<p>已有 <span>'+ data[i].people + '</span> 人捐助</p>\
				<p>已筹 <span>'+ data[i].moneny + '</span> 元</p>\
				<p>腾讯基金会匹配捐赠 <span>'+ data[i].moneny2 + '</span> 元</p>\
				<p>善款接受：<span>'+ data[i].monenyFor + '</span></p>\
				<div class="hoverBox">\
					<p class="msg">'+ data[i].message + '\
					</p>\
					<img src="'+ data[i].ewm + '" alt="">\
					<p class="scan">扫码捐助此项目</p>\
				</div>\
			</div>\
		</div>';
		if(i < 3){
			$('.itemView .part1').append(innerEle);
		}else{
			$('.itemView .part2').append(innerEle);
		}
	}
};
