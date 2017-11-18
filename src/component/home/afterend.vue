<template>
	<main>
		<div>
			<div>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-jewelry"></use>
				</svg>
				后端热门</div>
			<div>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-refresh"></use>
				</svg>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-close"></use>
				</svg>
			</div>
		</div>
		<ul>
			<li v-for="(v,i) in data">
				<router-link :to="'/content/'+v.title+'/'+v.author+'/'+v.read">
					<div>
						<p>{{v.title}}</p>
						<div>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-favorites"></use>
							</svg>{{v.like}}
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-account"></use>
							</svg>{{v.author}}
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-wxbdingwei"></use>
							</svg>{{v.time}}前
						</div>
					</div>
					<div><img :src="v.image" /></div>
				</router-link>
			</li>
		</ul>

		<ol>
			<li v-for="(v,i) in msg">
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
	</main>
</template>

<script>
	export default {
		data() {
			return {
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
					}
				],
				msg: [{
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
	main{
		height: 100%;
		width: 100%;
		margin-top: 120px;
		background: #efeef3;
	}
	main>div:nth-of-type(1) {
		width: 100%;
		background: #fff;
		zoom: *1;
	}
	
	main>div:nth-of-type(1):after {
		content: '';
		clear: both;
		display: block;
	}
	
	main>div:nth-of-type(1)>div:nth-of-type(1) {
		float: left;
		margin-left: 20px;
		color: #007fff;
		font-family: "微软雅黑";
		font-size: 32px;
	}
	
	main>div:nth-of-type(1)>div:nth-of-type(2) {
		cursor: pointer;
		float: right;
		margin-right: 15px;
		font-family: "微软雅黑";
		font-size: 54px;
		color: #999;
		font-weight: bold;
	}
	
	main>div:nth-of-type(1)>div:nth-of-type(2)>svg:nth-of-type(1) {
		margin-right: 20px;
	}
	
	main>ul {
		margin-top: 10px;
		width: 100%;
	}
	
	main>ul>li {
		width: 100%;
		background: #fff;
		margin-bottom: 10px;
		zoom: *1;
		overflow: hidden;
		font-family: "微软雅黑";
	}
	
	main>ul>li:after {
		content: '';
		clear: both;
		display: block;
	}
	
	main>ul>li>a>div:nth-of-type(1) {
		float: left;
		width: 70%;
		margin-top: 40px;
		margin-left: 20px;
		font-family: "微软雅黑";
	}
	
	main>ul>li>a>div:nth-of-type(1)>p {
		line-height: 62px;
		color: #000;
		font-size: 42px;
	}
	
	main>ul>li>a>div:nth-of-type(1)>div {
		display: inline-block;
		color: #999;
		margin-top: 15px;
		font-size: 30px;
	}
	
	main>ul>li>a>div:nth-of-type(1)>div>svg {
		font-size: 40px;
		margin-left: 20px;
		margin-right: 8px;
	}
	
	main>ul>li>a>div:nth-of-type(2) {
		float: right;
		width: 15%;
		height: 0;
		padding-bottom: 15%;
		margin: 38px 30px;
	}
	
	main>ul>li>a>div:nth-of-type(2)>img {
		width: 100%;
	}
	/*ol*/
	
	main>ol {
		margin-top: 30px;
		width: 100%;
	}
	
	main>ol>li {
		width: 100%;
		background: #fff;
		margin-bottom: 10px;
		zoom: *1;
		overflow: hidden;
		font-family: "微软雅黑";
	}
	
	main>ol>li:after {
		content: '';
		clear: both;
		display: block;
	}
	
	main>ol>li>a>div:nth-of-type(1) {
		float: left;
		width: 70%;
		margin-top: 40px;
		margin-left: 20px;
		font-family: "微软雅黑";
	}
	
	main>ol>li>a>div:nth-of-type(1)>p {
		line-height: 62px;
		color: #000;
		font-size: 42px;
	}
	
	main>ol>li>a>div:nth-of-type(1)>div {
		display: inline-block;
		color: #999;
		margin-top: 15px;
		font-size: 30px;
	}
	
	main>ol>li>a>div:nth-of-type(1)>div>span {
		margin-left: 20px;
	}
	
	main>ol>li>a>div:nth-of-type(2) {
		float: right;
		width: 15%;
		height: 0;
		padding-bottom: 15%;
		margin: 38px 30px;
	}
	
	main>ol>li>a>div:nth-of-type(2)>img {
		width: 100%;
	}
</style>