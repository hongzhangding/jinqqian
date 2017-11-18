<template>
	<main>
		<div>
			<div>
				<svg class="icon" aria-hidden="true" @click="cle">
					<use xlink:href="#icon-skip"></use>
				</svg>
			</div>
			<span>沸点</span>
		</div>
		<ul>
			<li>
				<span>头像</span>
				<img src="../../image/yuan5.png"/>
			</li>
			<li>
				<span>姓名</span>
				<div>零下一度</div>
			</li>
			<li>
				<span>职位</span>
				<div>前端工程师</div>
			</li>
			<li>
				<span>公司</span>
				<div>求实习工作</div>
			</li>
			<li>
				<span>简介</span>
				<div>双向绑定</div>
			</li>
			<li>
				<span>个人网址</span>
				<div>https://hongzhangding.github.io/Personal-website/html/index.html 2017/10</div>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		methods:{
	 		cle(){
	 			this.$router.go(-1);
	 		}
	 	}
	 }
</script>

<style scoped>
	main{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 11;
		background: #f0eff4;
	}
	main>div:nth-of-type(1){
		width: 100%;
		background: #f5f5f7;
		height: 100px;
		border: 1px solid #ddd;
		text-align: center;
		font-size: 40px;
		z-index: 12;
	}
	main>div:nth-of-type(1)>div:nth-of-type(1){
		position: absolute;
		top: 10px;
		left: 30px;
		font-size: 60px;
		transform: rotateY(180deg);
		color: #007fff;
	}
	main>div:nth-of-type(1)>span{
		display: inline-block;
		height: 100%;
		line-height: 100px;
		margin: 0 auto;
		font-family: "微软雅黑";
	}
	main>ul{
		width: 100%;
	}
	main>ul:after{
		content: "";
		clear: both;
		display: block;
	}
	main>ul>li{
		width: 100%;
		background: #fff;
		height: 100px;
		margin-bottom: 5px;
	}
	main>ul>li>span{
		float: left;
		margin-left: 40px;
		font-size: 38px;
		line-height: 100px;
	}
	main>ul>li>div{
		float: right;
		line-height: 100px;
		margin-right: 40px;
		font-size: 38px;
		color: #666;
	}
	main>ul>li:nth-of-type(1){
		height: 200px;
	}
	main>ul>li:nth-of-type(1)>span{
		line-height: 200px;
	}
	main>ul>li:nth-of-type(1)>img{
		float: right;
		width: 130px;
		border-radius: 50%;
		margin-top: 35px;
		margin-right: 40px;
	}
	main>ul>li:nth-of-type(6){
		height: 250px;
	}
	main>ul>li:nth-of-type(6)>span{
		line-height: 250px;	
	}
	main>ul>li:nth-of-type(6)>div{
		margin-top: 20px;
		font-size: 36px;
		width: 380px;
		height: 100%;
		line-height: 50px;
		word-wrap:break-word ;
	}
	
</style>