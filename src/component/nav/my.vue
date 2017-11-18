<template>
	<main>
		<div>
			我的主页
		</div>
		<div>
			<div><img src="../../image/yuan5.png" /><span><p>零下一度</p>前端工程师</span></div>
			<div><router-link to="/my1"><img src="../../assets/image/find/right3.png" /></router-link></div>
		</div>
		<ul>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-favorites"></use>
				</svg>
				<span>我喜欢的</span>
			</li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-all"></use>
				</svg>
				<span>收藏集</span></li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-good"></use>
				</svg>
				<span>阅读过的文章</span></li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-category"></use>
				</svg>
				<span>标签管理</span></li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-comments"></use>
				</svg>
				<span>意见反馈</span></li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-iconfontjixieqimo"></use>
				</svg>
				<span>设置</span>
			</li>
		</ul>
	</main>
</template>

<script>
</script>

<style scoped>
	main {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
		background: #f5f5f7;
	}
	main>div:nth-of-type(1) {
		width: 100%;
		height: 90px;
		line-height: 90px;
		text-align: center;
		font-size: 40px;
		border: 1px solid #ccc;
	}
	
	main>div:nth-of-type(2) {
		margin-top: 50px;
		width: 100%;
		height: 230px;
		background: #fff;
		border: 1px solid #aaa;
	}
	
	main>div:nth-of-type(2)>div:nth-of-type(1) {
		width: 50%;
		height: 100%;
		float: left;
		margin-left: 40px;
		font-size: 34px;
	}
	
	main>div:nth-of-type(2)>div:nth-of-type(1)>img {
		display: inline-block;
		border-radius: 50%;
		width: 30%;
		float: left;
		margin-top: 33px;
	}
	
	main>div:nth-of-type(2)>div:nth-of-type(1)>span {
		width: 60%;
		float: right;
		margin-top: 50px;
		line-height: 60px;
		text-align: left;
		color: #777;
	}
	
	main>div:nth-of-type(2)>div:nth-of-type(1)>span>p {
		font-family: "微软雅黑";
		font-size: 38px;
		color: #000;
	}
	
	main>div:nth-of-type(2)>div:nth-of-type(2){
		float: right;
		margin-right: 20px;
		width: 14%;
		height: 100%;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2)>a{
		display: inline-block;
		width: 60%;
		margin-top: 65px;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2)>a>img {
		width: 100%;
		height: 100%;
	}
	
	ul {
		width: 100%;
		margin-top: 50px;
	}
	
	ul>li{
		width: 100%;
		height: 110px;
		background: #fff;
		margin-bottom: 6px;
		padding-left: 40px;
		font-size: 40px;
		line-height: 110px;
	}
	ul>li>svg{
		margin-right: 40px;
	}
	ul>li:nth-of-type(1){
		margin-bottom: 15px;
	}
	ul>li:nth-of-type(4){
		margin-bottom: 25px;
	}
</style>