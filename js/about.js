var character = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">CharactEr:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p>喜欢学习</p>\
						<p>有时候喜欢独处，有时候喜欢很多人</p>\
						<p>曾经有很多朋友现在有很多朋友</p>\
						<p>不喜欢被说暖.\
							<del>但是其实有点暖？反正没有女朋友</del>\
						</p>\
					</div>\
				</div></div>'
};


var hobby = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">HobbY:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p>Coding</p>\
						<ul>\
							<li>Python3</li>\
							<li>Java</li>\
						</ul>\
						<p>Bass Guitar</p>\
						<ul>\
							<li>Musicman Stingray4 2Band EQ Maple BP</li>\
							<li>Yamaha RBX6JM Lime Green</li>\
						</ul>\
						<p>Travel</p>\
					</div>\
				</div></div>'
}

var food = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">FooD:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p>Espresso</p>\
						<p>Interesting Local Food Every Where</p>\
						<p>Irish Stout</p>\
					</div>\
				</div></div>'
}

var footprint = {
	template: '<div><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">FootprintT:</p>\
					</div>\
				</div>\
				<div class="row">\
						<iframe height=498 width=680 frameborder=0 src="http://www.qyer.com/u/user.php?action=sharemap&uid=5695963&isshare=1" allowfullscreen></iframe>\
				</div></div>'
};

var routes = [
	{ path: '/', component: character },
	{ path: '/character', component: character },
	{ path: '/hobby', component: hobby },
	{ path: '/food', component: food },
	{ path: '/footprint', component:footprint},
]

var router = new VueRouter({
	routes
})

var app = new Vue({
	router
}).$mount('#app')


var isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
var mousewheel = isFirefox ? "DOMMouseScroll" : "mousewheel";

// var name = []
var count = 1;

var scrollFunc = function (e) {
	e = e || window.event;

	if (isFirefox) {
		if (e.detail == -3) {
			// 向上滚动  
			count = count - 1;
			if (count == 0) {
				count = 4;
			}
			router.push(routes[count]);
		} else {
			// 向下滚动  
			count = count + 1;
			if(count == 5){
				count = 1;
			}
			router.push(routes[count]);
		}
	} else {
		if (e.wheelDelta == 120) {
			// 向上滚动  
			count = count - 1;
			if (count == 0) {
				count = 4;
			}
			router.push(routes[count]);
		} else {
			// 向下滚动  
			count = count + 1;
			if(count == 5){
				count = 1;
			}
			router.push(routes[count]);
		}
	}
}


try {
	document.addEventListener(mousewheel, scrollFunc, false);
} catch (err) {
	window.onmousewheel = document.onmousewheel = scrollFunc;
}  