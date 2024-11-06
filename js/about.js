
var edu = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">EduCation:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p>Ph.D., CS, Syracuse University (Advised by Kristopher Micinski)</p>\
						<p>M.S., CS, Syracuse University</p>\
						<p>B.S. in EE, Hangzhou Dianzi University</p>\
					</div>\
				</div> \
				<div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">ResearcH:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p>PL/HPC/DB/Security</p>\
						<p>GPU base logic programming/datalog</p>\
						<p>Logic programming on Supercomputer(like ANLF\'s Polaris/Aurora)</p>\
						<p>Scalable program analysis (especially AAM based!)</p>\
						<p>Declarative decompilation via datalog</p>\
					</div>\
				</div> \
				</div>'
}

var reading = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">My Yearly Reading List:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p><a href="https://slog-wiki.notion.site/Lands-Between-GPU-Database-RDF-Logic-Programming-Paper-Lists-d51558f10460409ead8b0f4c86dcd8d8?pvs=74">“Lands Between”— GPU/Database/RDF/Logic Programming  Paper Lists</a></p>\
						<p><a href="https://www.amazon.com/Topology-Cambridge-Theoretical-Computer-Science/dp/0521576512">Topology Via Logic</p>\
						<p><a href="https://www.amazon.com/Programming-Massively-Parallel-Processors-Hands/dp/0124159923">Programming Massively Parallel Processors: A Hands-on Approach</p>\
						<p><a href="https://www.cis.upenn.edu/~bcpierce/attapl/">Advanced Topics in Types and Programming Languages</p>\
					</div>\
				</div></div>'
}

var skill = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">SkilL:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p>Proficient in programming languages, including C++/CUDA, Python, Racket, and Datalog/ASP</p><br>\
						<p>Experienced in MPI development on high-performance clusters and supercomputers.  \
						   Successfully extended a CPU-based deductive knowledge database and developed \
						   new GPU-based engine to  scale across over thousands nodes on the Theta and Polaris \
						   supercomputers.</p><br> \
						<p>Skilled in large-scale graph query, with a focus on distributed and parallel environment.</p><br>\
						<p>Experienced in malware analysis leveraging machine learning techniques.</p><br>\
						<p>Knowledgeable in static program analysis, particularly in CFA and abstract interpretation.</p><br>\
						<p>Other language I have used: Rust, Haskell, Coq, Agda, OCaml/SML, Java, Javascript.</p><br>\
					</div>\
				</div></div>'
}

var paper = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">PapeR:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p><a href="https://arxiv.org/abs/2311.02206">Optimizing Datalog for the GPU</a>: <em>nternational Conference on Architectural Support for Programming Languages and Operating Systems(ASPLOS), 2025.</em></p>\
						<p><a href="https://ieeexplore.ieee.org/abstract/document/10319975">Communication-Avoiding Recursive Aggregation</a>: <em> Y. Sun, K. Sidharth, G. Thomas, and K. Micinski IEEE International Conference on Cluster Computing (CLUSTER), 2023</em></p>\
						<p><a href="https://arxiv.org/abs/2101.04718">Declarative demand-driven reverse engineering</a>: <em> Y. Sun, J. Ching, and K. Micinski, NDSS Workshop on Binary Analysis Research (BAR), 2021</em></p>\
						<p><a href="https://arxiv.org/pdf/2405.03991">Assemblage: Automatic Binary Dataset Construction for Machine Learning,</a>: <em> C. Liu, R. Saul, Y. Sun, et al,NeurIPS 2024 Datasets and Benchmarks Track, 2024.,</em></p>\
						<p><a href="https://arxiv.org/abs/2107.12909">o You Want To Analyze Scheme Programs With Datalog?</a>: <em>Y. Sun, K. Sidharth, G. Thomas, and K. Micinski,, In International Conference on Functional Programming(ICFP) Scheme Workshop, , 2021</em></p>\
					</div>\
				</div></div>'
}

var project = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">ProJect:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p><a href="https://github.com/harp-lab/slog-lang1">Slog</a>: <em> Want use store relation as s-expression?</em></p>\
						<p><a href="https://github.com/harp-lab/gdlog">GDlog</a>: <em> The first GPU Datalog(see VFlog now)</em></p>\
						<p><a href="https://github.com/harp-lab/vflog">VFlog</a>: <em> Column Oriented GPU Datalog</em></p>\
						<p><a href="https://huggingface.co/datasets/changliu8541/Assemblage_PE/tree/main">Assemblage</a>: <em> Assemblage is a dataset for PE malware classification</em></p>\
						<p><a href="https://github.com/StarGazerM/ascent-plusplus">Ascent++</a>: <em> Most powerful datalog engine, built by Rust procedure macro</em></p>\
					</div>\
				</div></div>'
}


var hobby = {
	template: '<div class="content"><div class="row">\
					<div class="col-md-10">\
						<p style="color: grey">HobbY:</p>\
					</div>\
				</div>\
				<div class="row">\
					<div class="col-sm-10 col-sm-offset-2 info">\
						<p>Bass Guitar</p>\
						<ul>\
							<li>Musicman Stingray4 2Band EQ</li>\
							<li>Yamaha RBX6JM Lime Green</li>\
						  	<li>Warmoth assembly bass</li>\
                            <li>Yamaha BB5000AF</li>\
							<li>Ibanez EHB1000 Pearl white</li>\
						</ul>\
						<p>A cat lover, love all tabby cats!</p>\
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
						<p>Coffee</p>\
						<p>Interesting Local Food Every Where</p>\
						<p>Exoitic Lambic</p>\
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
	{ path: '/', component: edu },
	{ path: '/edu', component: edu },
	{ path: '/skill', component: skill },
	{ path: '/project', component: project },
	{ path: '/paper', component: paper },
	{ path: '/reading', component: reading },
	{ path: '/hobby', component: hobby },
	{ path: '/food', component: food },
	{ path: '/footprint', component: footprint},
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
var item_size = 8;

var scrollFunc = function (e) {
	e = e || window.event;

	if (isFirefox) {
		if (e.detail == -3) {
			// 向上滚动  
			count = count - 1;
			if (count == 0) {
				count = item_size;
			}
			router.push(routes[count]);
		} else {
			// 向下滚动  
			count = count + 1;
			if(count == item_size + 1){
				count = 1;
			}
			router.push(routes[count]);
		}
	} else {
		if (e.wheelDelta == 120) {
			// 向上滚动  
			count = count - 1;
			if (count == 0) {
				count = item_size;
			}
			router.push(routes[count]);
		} else {
			// 向下滚动  
			count = count + 1;
			if(count == item_size + 1){
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
