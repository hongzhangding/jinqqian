<template>
	<main>
		<div>
			<router-link to="/search1">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-search"></use>
				</svg>
				<span>搜索</span>
			</router-link>
		</div>
		<div class="hover">
			<ul id="move">
				<li>
					<a target="_blank" href="https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=%E6%B5%81%E8%A1%8C">
						<img src="../../assets/image/find/1.jpg" />
					</a>
				</li>
				<li>
					<a  target="_blank" href="https://y.qq.com/n/yqq/song/001cP3t82HI31e.html">
						<img src="../../assets/image/find/2.jpg" />
					</a>
				</li>
				<li>
					<a  target="_blank" href="https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=%E7%AE%80%E5%8D%95%E7%9A%84%E6%AD%8C">
						<img src="../../assets/image/find/3.jpg" />
					</a>
				</li>
				<li>
					<a  target="_blank" href="https://y.qq.com/n/yqq/song/004W7YoB2ectlW.html">
						<img src="../../assets/image/find/4.jpg" />
					</a>
				</li>
				<li>
					<a  target="_blank" href="https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=%E6%B5%81%E8%A1%8C">
						<img src="../../assets/image/find/1.jpg" />
					</a>
				</li>
			</ul>
			<ol id="move-ol">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ol>
		</div>
		<ul>
			<li><img src="../../assets/image/find/hot_1.png" />
				<p>本周最热</p>
			</li>
			<li><img src="../../assets/image/find/hot_2.png" />
				<p>收藏集</p>
			</li>
			<li><img src="../../assets/image/find/hot_3.png" />
				<p>线下活动</p>
			</li>
			<li><img src="../../assets/image/find/hot_4.png" />
				<p>专栏</p>
			</li>
		</ul>

		<div class="center">
			<div>
				<img src="../../assets/image/find/boil_point.png" />
				<span>沸点</span>
			</div>
			<div>
				<router-link to="/boiling1">
					<img src="../../assets/image/find/right3.png" />
				</router-link>
			</div>
		</div>

		<div class="content">
			<ul class="content_ul">
				<li v-for="(v,i) in msg"><img :src="v.image" /><span><p>{{v.title}}</p></span></li>
			</ul>
		</div>

		<div class="bottom">
			<div>
				<img src="../../assets/image/find/hot_1.png" />
				<span>热门文章</span>
			</div>
			<div>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-iconfontjixieqimo"></use>
				</svg>
				<span>定制热门</span>
			</div>
		</div>

		<div class="footer">
			<ol>
				<li v-for="(v,i) in data">
					<router-link :to="'/content/'+v.title+'/'+v.author+'/'+v.read">
						<div>
							<p>{{v.title}}</p>
							<div>
								<span>{{v.like}}</span>喜欢 <span>{{v.author}}</span><span>{{v.time}}</span>前
							</div>
						</div>
						<div><img :src="v.image" /></div>
					</router-link>
				</li>
			</ol>
		</div>

	</main>
</template>

<script>
	
	export default {
		mounted(){
			/*元素移动轮播,不是无缝*/
			var content=document.getElementsByClassName('content')[0]
			var content_ul=document.getElementsByClassName('content_ul')[0]
			var time;
			content.onmouseenter=function(){
				clearInterval(time);
			}
			content.onmouseleave=function(){
				 time=setInterval(function(){
				content_ul.style.left=content_ul.offsetLeft-1+"px";
			},30)
			}
			 time=setInterval(function(){
				content_ul.style.left=content_ul.offsetLeft-1+"px";
				if(content_ul.style.left=='-1470px'){
					content_ul.style.left='0px';
				}
			},30)
			 
			 /*jq无缝轮播*/
			var m=this
			$(function(){
        		var num12=0;
        		function bbb(){
	        		m.timer5=setInterval(function(){
	        			num12++;
	        			if(num12==4){
	        				$('#move-ol>li').eq(0).css({'background':'orange'}).siblings().css({'background':'#fff'})
	        			}
	        			if(num12>4){
	        				num12=0;
	        				$('#move').css('left', '0');
	        				num12=1;
	        			}
	        			$('#move').animate({'left':-100*num12+'%'}, 500)
	        			$('#move-ol>li').eq(num12).css({'background':'orange'}).siblings().css({'background':'#fff'})
	        		},2000)
				}
				bbb()
				$('.hover').hover(function() {
					
					clearInterval(this.timer5);
				}, function() {
					bbb()
				});
			})
		},
		destroyed(){
			clearInterval(this.timer5)
		},
		data() {
			return {
				timer5:'',
				msg: [{
						"title": "沸点：说到夏天你的第一反应是什么？",
						"author": "彷梓",
						"author_img": "https://dn-mhke0kuv.qbox.me/f78f61d00ffd7bb1e2f4.jpeg?imageView2/1/w/100/h/100/q/85/interlace/1",
						"image": "https://user-gold-cdn.xitu.io/2017/7/23/b383f2f07d2fb7e8a85c7d3dee4fe7cf?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
						"number": "31",
						"content": "对于小编来说，说到夏天最直接的反应就是海边，那么对你来说又是什么呢？",
						"time": "14小时",
						"read": "493"
					},
					{
						"title": "沸点：你认为普通开发者是否有必要学习 AI 相关的知识？前三名送📚",
						"author": "幻觉2016",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/ca5e415082e9047663dc82e9e37abf23?imageView2/1/w/100/h/100/q/85/interlace/1",
						"image": "https://user-gold-cdn.xitu.io/2017/6/29/5b5677dc54b7b466af324eebd415b653?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
						"number": "118",
						"content": "目前 AI / 机器学习 / 深度学习等领域大热🔥，有很多之前从事其他方向的开发者也蠢蠢欲动，那么你认为一般开发者是否有必要学习相关的知识呢？本期活动点赞前三的用户，可以获得人邮异步社区的《深度学习》一本。活动时间截止到7月27日。本书是深度学习领域的经典教材，包括3个部分：1.介绍基本的数学工具和机器学习的概念；2.系统深入地讲解现今已成熟的深度学习方法和技术；3.讨论某些具有前瞻性的方向和想法。《深度学习》适合各类读者阅读。购买链接：https://item.jd.com/12128543.html",
						"time": "4天",
						"read": "2140"
					},
					{
						"title": "沸点：你是怎么打发睡前时间的？",
						"author": "彷梓",
						"author_img": "https://dn-mhke0kuv.qbox.me/f78f61d00ffd7bb1e2f4.jpeg?imageView2/1/w/100/h/100/q/85/interlace/1",
						"image": "https://user-gold-cdn.xitu.io/2017/6/25/c1ed0adc8d75c6aa6bae701bc947b808?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
						"number": "299",
						"content": "小编每天都在思考，今天到底是打王者荣耀，还是刷 Tumblr 呢？",
						"time": "28天",
						"read": "4615"
					},
					{
						"title": "沸点：你是如何整理笔记的？",
						"author": "彷梓",
						"author_img": "https://dn-mhke0kuv.qbox.me/f78f61d00ffd7bb1e2f4.jpeg?imageView2/1/w/100/h/100/q/85/interlace/1",
						"image": "https://user-gold-cdn.xitu.io/2017/7/12/caab357c14efd7be30f060fc84cb0ca1?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
						"number": "128",
						"content": "本期沸点，我们来讨论一下如何收集、整理笔记。笔记如果只是记录下来，是很难发挥作用的，只有经过整理，之后可以通过查询、搜索等方式二次利用，笔记才真的发挥了价值。那么你是如何整理笔记的？",
						"time": "11天",
						"read": "2638"
					},
					{
						"title": "沸点：2017 年已经过去一半了，用一句话总结一下上半年",
						"author": "彷梓",
						"author_img": "https://dn-mhke0kuv.qbox.me/f78f61d00ffd7bb1e2f4.jpeg?imageView2/1/w/100/h/100/q/85/interlace/1",
						"image": "https://user-gold-cdn.xitu.io/2017/7/2/19d042cf70a03faf85feb71dfae3301f?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
						"number": "348",
						"content": "2017 年已经过去一半了，你年初定的目标完成的如何？技术提高了吗？工资涨了吗？存款多了吗？男/女朋友找到了吗？来，一句话总结一下你的上半年。点赞数排名前三的用户，可以获得《疯狂Android讲义》一本。本书由博文视点出版，全面介绍了Android应用开发的相关知识，全书内容覆盖了Android用户界面编程、Android四大组件、Android资源访问、图形/图像处理、事件处理机制、Android输入/输出处理、音频/视频多媒体应用开发、OpenGL与3D应用开发、网络通信编程、Android平台的WebService、传感器应用开发、GPS应用开发、整合第三方Map服务等内容。 购书链接：https://item.m.jd.com/product/11689014.html，活动时间：7月2日 - 7月9日。",
						"time": "21天",
						"read": "4640"
					}
				],
				data: [{
						"title": "使用webpack3构建高性能应用程序",
						"author": "愚人码头",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/0765d71b7ab2154f49f0e4d8673d7f2c?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "10",
						"time": "40分钟",
						"image": "https://user-gold-cdn.xitu.io/2017/7/20/0eb425c02ae4775f098e7dd259871bbd?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/20/0eb425c02ae4775f098e7dd259871bbd?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
						"read": "几天前，我有幸升级了我们项目的webpack构建，因为我们要努力改进应用程序的性能。 最大限度的压缩 Webpack 构建包，无疑给我们带来了显著的改进。在这里，我将尝试分享一些参考指南，可以帮助你更好地了解 Webpack 配置，并为你正在进行的项目找到一种最佳设置。"
					},
					{
						"title": "为什么我选择 React 而不是 Vue",
						"author": "斌幺幺",
						"author_img": "https://user-gold-cdn.xitu.io/2017/6/23/e3505dc627d6ee41f730a2490b487dcf?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "39",
						"time": "22小时",
						"image": "https://user-gold-cdn.xitu.io/2017/7/19/204020709379283cbf97d4ef36783efc?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/19/204020709379283cbf97d4ef36783efc?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
						"read": "你们有注意到我过份官方的题目(可能指措辞 chose， 未使用 better than)了么？这是我企图就着个人的 “倾向性”（而不是信仰）来进行讨论，客观上要强于希望将本次讨论转化成框架派系的又一次 “火拼”。我认为后者没有任何作用。"
					},
					{
						"title": "React服务端渲染如此轻松 从零开始构建前后端应用",
						"author": "LucasHC",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "156",
						"time": "3天",
						"image": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b",
						"read": "参加或留意了最近举行的JSConf CN 2017的同学，想必对 Next.js 不再陌生， Next.js 的作者之一到场进行了精彩的演讲。其实在更早些时候，由 Facebook 举办的 React Conf 2017，他就到场并有近40分钟的分享。但两次分享带来的 demo 都是 hacker news。我观察 Next.js 时间较长，看着它从1.x 版本一直到了今天的 3.x，终于决定写一篇入门级的新手指导文章。而这篇文章试图通过一个全新的例子，来让大家了解 Next.js 到底是如何与 React 配合，达到服务端渲染的。"
					},
					{
						"title": "React服务端渲染如此轻松 从零开始构建前后端应用",
						"author": "LucasHC",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "156",
						"time": "3天",
						"image": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b",
						"read": "参加或留意了最近举行的JSConf CN 2017的同学，想必对 Next.js 不再陌生， Next.js 的作者之一到场进行了精彩的演讲。其实在更早些时候，由 Facebook 举办的 React Conf 2017，他就到场并有近40分钟的分享。但两次分享带来的 demo 都是 hacker news。我观察 Next.js 时间较长，看着它从1.x 版本一直到了今天的 3.x，终于决定写一篇入门级的新手指导文章。而这篇文章试图通过一个全新的例子，来让大家了解 Next.js 到底是如何与 React 配合，达到服务端渲染的。"
					},
					{
						"title": "React服务端渲染如此轻松 从零开始构建前后端应用",
						"author": "LucasHC",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "156",
						"time": "3天",
						"image": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b",
						"read": "参加或留意了最近举行的JSConf CN 2017的同学，想必对 Next.js 不再陌生， Next.js 的作者之一到场进行了精彩的演讲。其实在更早些时候，由 Facebook 举办的 React Conf 2017，他就到场并有近40分钟的分享。但两次分享带来的 demo 都是 hacker news。我观察 Next.js 时间较长，看着它从1.x 版本一直到了今天的 3.x，终于决定写一篇入门级的新手指导文章。而这篇文章试图通过一个全新的例子，来让大家了解 Next.js 到底是如何与 React 配合，达到服务端渲染的。"
					},
					{
						"title": "React服务端渲染如此轻松 从零开始构建前后端应用",
						"author": "LucasHC",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "156",
						"time": "3天",
						"image": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b",
						"read": "参加或留意了最近举行的JSConf CN 2017的同学，想必对 Next.js 不再陌生， Next.js 的作者之一到场进行了精彩的演讲。其实在更早些时候，由 Facebook 举办的 React Conf 2017，他就到场并有近40分钟的分享。但两次分享带来的 demo 都是 hacker news。我观察 Next.js 时间较长，看着它从1.x 版本一直到了今天的 3.x，终于决定写一篇入门级的新手指导文章。而这篇文章试图通过一个全新的例子，来让大家了解 Next.js 到底是如何与 React 配合，达到服务端渲染的。"
					},
					{
						"title": "React服务端渲染如此轻松 从零开始构建前后端应用",
						"author": "LucasHC",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "156",
						"time": "3天",
						"image": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b",
						"read": "参加或留意了最近举行的JSConf CN 2017的同学，想必对 Next.js 不再陌生， Next.js 的作者之一到场进行了精彩的演讲。其实在更早些时候，由 Facebook 举办的 React Conf 2017，他就到场并有近40分钟的分享。但两次分享带来的 demo 都是 hacker news。我观察 Next.js 时间较长，看着它从1.x 版本一直到了今天的 3.x，终于决定写一篇入门级的新手指导文章。而这篇文章试图通过一个全新的例子，来让大家了解 Next.js 到底是如何与 React 配合，达到服务端渲染的。"
					},
					{
						"title": "React服务端渲染如此轻松 从零开始构建前后端应用",
						"author": "LucasHC",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "156",
						"time": "3天",
						"image": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b",
						"read": "参加或留意了最近举行的JSConf CN 2017的同学，想必对 Next.js 不再陌生， Next.js 的作者之一到场进行了精彩的演讲。其实在更早些时候，由 Facebook 举办的 React Conf 2017，他就到场并有近40分钟的分享。但两次分享带来的 demo 都是 hacker news。我观察 Next.js 时间较长，看着它从1.x 版本一直到了今天的 3.x，终于决定写一篇入门级的新手指导文章。而这篇文章试图通过一个全新的例子，来让大家了解 Next.js 到底是如何与 React 配合，达到服务端渲染的。"
					},
					{
						"title": "React服务端渲染如此轻松 从零开始构建前后端应用",
						"author": "LucasHC",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "156",
						"time": "3天",
						"image": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b",
						"read": "参加或留意了最近举行的JSConf CN 2017的同学，想必对 Next.js 不再陌生， Next.js 的作者之一到场进行了精彩的演讲。其实在更早些时候，由 Facebook 举办的 React Conf 2017，他就到场并有近40分钟的分享。但两次分享带来的 demo 都是 hacker news。我观察 Next.js 时间较长，看着它从1.x 版本一直到了今天的 3.x，终于决定写一篇入门级的新手指导文章。而这篇文章试图通过一个全新的例子，来让大家了解 Next.js 到底是如何与 React 配合，达到服务端渲染的。"
					},
					{
						"title": "React服务端渲染如此轻松 从零开始构建前后端应用",
						"author": "LucasHC",
						"author_img": "https://user-gold-cdn.xitu.io/2016/11/29/efff8bb4ab905084ea86b268cf89784e?imageView2/1/w/100/h/100/q/85/interlace/1",
						"like": "156",
						"time": "3天",
						"image": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b?imageView2/1/w/120/h/120/q/85/interlace/1",
						"list_img": "https://user-gold-cdn.xitu.io/2017/7/19/544e7f0048edc0b21bc447e11ba1442b",
						"read": "参加或留意了最近举行的JSConf CN 2017的同学，想必对 Next.js 不再陌生， Next.js 的作者之一到场进行了精彩的演讲。其实在更早些时候，由 Facebook 举办的 React Conf 2017，他就到场并有近40分钟的分享。但两次分享带来的 demo 都是 hacker news。我观察 Next.js 时间较长，看着它从1.x 版本一直到了今天的 3.x，终于决定写一篇入门级的新手指导文章。而这篇文章试图通过一个全新的例子，来让大家了解 Next.js 到底是如何与 React 配合，达到服务端渲染的。"
					}
				]

			}
		}
	}
</script>

<style scoped>
	main {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: #efeef3;
	}
	
	main>div:nth-of-type(1) {
		position: fixed;
		width: 100%;
		height: 100px;
		background: #fff;
		z-index: 20;
	}
	
	main>div:nth-of-type(1)>a{
		display: block;
		width: 92%;
		height: 74%;
		margin: 13px auto;
		border-radius: 15px;
		background: #e0e1e5;
		text-align: center;
		font-size: 40px;
		text-decoration: none;
		line-height: 75px;
		color: #999;
		cursor: pointer;
	}
	
	main>div:nth-of-type(2) {
		margin-top: 102px;
		width: 100%;
		position: relative;
	}
	
	main>div:nth-of-type(2)>ul {
		width: 500%;
		position: relative;
		top: 0;
		left: 0;
	}
	
	main>div:nth-of-type(2)>ul:after {
		content: "";
		clear: both;
		display: block;
	}
	
	main>div:nth-of-type(2)>ul>li {
		float: left;
		width: 20%;
	}
	
	main>div:nth-of-type(2)>ul>li>a {
		display: inline-block;
		width: 100%;
	}
	
	main>div:nth-of-type(2)>ul>li>a>img {
		width: 100%;
	}
	
	main>div:nth-of-type(2)>ol {
		width: 40%;
		position: absolute;
		bottom: 8%;
		left: 35%;
	}
	
	main>div:nth-of-type(2)>ol>li {
		float: left;
		width: 20px;
		height: 20px;
		background: #fff;
		border-radius: 50%;
		margin-left: 10%;
	}
	
	main>div:nth-of-type(2)>ol>li:nth-of-type(1) {
		background: orange;
	}
	
	main>ul {
		width: 100%;
		margin-top: 20px;
		background: #fff;
		height: 240px;
	}
	
	main>ul:after {
		content: "";
		clear: both;
		display: block;
	}
	
	main>ul>li {
		width: 25%;
		height: 100%;
		box-sizing: border-box;
		float: left;
		text-align: center;
	}
	
	main>ul>li>img {
		margin-top: 26px;
		width: 45%;
		height: 45%;
	}
	
	main>ul>li>p {
		font-size: 38px;
		margin-top: 30px;
		color: #333;
	}
	
	.center {
		margin-top: 20px;
		width: 100%;
		background: #fff;
	}
	
	.center:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.center>div:nth-of-type(1) {
		float: left;
		margin: 30px 30px;
		height: 100%;
		width: 140px;
	}
	
	.center>div:nth-of-type(1)>img {
		display: inline-block;
		width: 40px;
		float: left;
		margin-right: 20px;
	}
	
	.center>div:nth-of-type(1)>span {
		display: inline-block;
		float: right;
		font-size: 34px;
	}
	
	.center>div:nth-of-type(2) {
		width: 60px;
		float: right;
		margin-right: 30px;
		margin-top: 24px;
	}
	
	.center>div:nth-of-type(2)>a {
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	
	.center>div:nth-of-type(2)>a>img {
		width: 100%;
	}
	
	.content {
		width: 100%;
		margin-top: 3px;
		background: #fff;
		padding: 30px 0;
	}
	
	.content>ul {
		position: relative;
		width: 250%;
	}
	
	.content>ul:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.content>ul>li {
		float: left;
		width: 18%;
		border-radius: 20px;
		margin-left: 1%;
		margin-right: 1%;
		margin-top: 20px;
		overflow: hidden;
		box-sizing: border-box;
		border: 1px solid #000;
		position: relative;
	}
	
	.content>ul>li>img {
		width: 100%;
		height: 200px;
	}
	
	.content>ul>li>span {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
	}
	
	.content>ul>li>span>p {
		font-size: 36px;
		width: 80%;
		height: 50%;
		margin-top: 10%;
		margin-left: 10%;
		line-height: 50px;
		color: #fff;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	
	.bottom {
		margin-top: 20px;
		width: 100%;
		background: #fff;
	}
	
	.bottom:after {
		content: "";
		display: block;
		clear: both;
	}
	
	.bottom>div:nth-of-type(1) {
		float: left;
		margin: 30px 30px;
		height: 100%;
		width: 210px;
		overflow: hidden;
	}
	
	.bottom>div:nth-of-type(1)>img {
		display: inline-block;
		width: 40px;
		float: left;
		margin-right: 20px;
	}
	
	.bottom>div:nth-of-type(1)>span {
		display: inline-block;
		float: right;
		font-size: 34px;
		margin-top: 4px;
	}
	
	.bottom>div:nth-of-type(2) {
		width: 250px;
		font-size: 36px;
		float: right;
		margin-right: 30px;
		color: #333;
		margin-top: 24px;
	}
	
	.bottom>div:nth-of-type(2)>svg {
		font-size: 38px;
	}
	
	.bottom>div:nth-of-type(2)>span {
		display: inline-block;
		margin-left: 15px;
	}
	
	.footer{
		width: 100%;
		margin-top: 7px;
	}
	.footer>ol {
		width: 100%;
	}
	
	.footer>ol>li {
		width: 100%;
		background: #fff;
		margin-bottom: 10px;
		zoom: *1;
		overflow: hidden;
		font-family: "微软雅黑";
	}
	
	.footer>ol>li:after {
		content: '';
		clear: both;
		display: block;
	}
	
	.footer>ol>li>a>div:nth-of-type(1) {
		float: left;
		width: 70%;
		margin-top: 40px;
		margin-left: 20px;
		font-family: "微软雅黑";
	}
	
	.footer>ol>li>a>div:nth-of-type(1)>p {
		line-height: 62px;
		color: #000;
		font-size: 42px;
	}
	
	.footer>ol>li>a>div:nth-of-type(1)>div {
		display: inline-block;
		color: #999;
		margin-top: 15px;
		font-size: 30px;
	}
	
	.footer>ol>li>a>div:nth-of-type(1)>div>span {
		margin-left: 20px;
	}
	
	.footer>ol>li>a>div:nth-of-type(2) {
		float: right;
		width: 15%;
		height: 0;
		padding-bottom: 15%;
		margin: 38px 30px;
	}
	
	.footer>ol>li>a>div:nth-of-type(2)>img {
		width: 100%;
	}
</style>