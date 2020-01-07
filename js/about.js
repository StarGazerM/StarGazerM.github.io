var character = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">CharactEr:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p>Love study</p>\
						<p>prefer alone, but sometimes not</p>\
						<p>use to have lots of friend, now have lots of too</p>\
						<p>suddenly find myself have been to so many places in the world</p>\
                                                <p>want to be the next 700 PhD</p>\
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
							<li>Java</li>\
							<li>Racket</li>\
							<li>Coq</li>\
                                                        <li>Haskell</li>\
                                                        <li>Python3</li>\
						</ul>\
						<p>Bass Guitar</p>\
						<ul>\
							<li>Musicman Stingray4 2Band EQ</li>\
							<li>Yamaha RBX6JM Lime Green</li>\
						  	<li>Warmoth assembly bass</li>\
                                                        <li>Yamaha BB5000AF</li>
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
				    <div class="col-sm-12">\
						<iframe height=498 width=100% frameborder=0 src="https://www.qyer.com/u/user.php?action=sharemap&uid=5695963&isshare=1" allowfullscreen></iframe>\
					</div>\
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
