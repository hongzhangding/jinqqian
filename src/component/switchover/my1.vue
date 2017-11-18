<template>
	<main>
		<div>
			<div>
				<svg class="icon" aria-hidden="true" @click="cle">
					<use xlink:href="#icon-skip"></use>
				</svg>
			</div>
			<span>个人主页</span>
		</div>
		<div>
			<div>
				<img src="../../image/yuan5.png"/>
				<span>
					<h3>零下一度</h3>
					<h4>前端工程师</h4>
					<h5>待业程序员!</h5>
				</span>
			</div>
			<div>
				<ul>
					<li><h3>34</h3><p>关注</p></li>
					<li><h3>2</h3><p>关注者</p></li>
				</ul>
				<span><router-link to="/my2">编辑</router-link></span>
			</div>
		</div>
		<ul>
			<li>
				<span>动态</span>
				<img src="../../assets/image/find/right3.png"/>
			</li>
			<li>
				<span>喜欢的文章</span>
				<img src="../../assets/image/find/right3.png"/>
			</li>
			<li>
				<span>关注的标签</span>
				<img src="../../assets/image/find/right3.png"/>
			</li>
			<li>
				<span>www.upyuan.com</span>
				<img src="../../assets/image/find/right3.png"/>
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
		height: 100%;
		z-index: 13;
		width: 100%;
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
		border: 1px solid #ccc;
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
	main>div:nth-of-type(2){
		width: 100%;
		height: 390px;
		background: #fff;
		overflow: hidden;
	}
	main>div:nth-of-type(2)>div:nth-of-type(1){
		width: 70%;
		height: 160px;
		margin-left: 40px;
		margin-top: 40px;
	}
	main>div:nth-of-type(2)>div:nth-of-type(1)>img{
		float: left;
		width: 150px;
		border-radius: 50%;
		margin-right: 50px;
	}
	main>div:nth-of-type(2)>div:nth-of-type(1)>span{
		float: left;
	}
	main>div:nth-of-type(2)>div:nth-of-type(1)>span>h3{
		font-size: 40px;
		font-family: "微软雅黑";
		font-weight: bold;
		margin-bottom: 5px;
	}
	main>div:nth-of-type(2)>div:nth-of-type(1)>span>h4{
		font-size: 36px;
		color: #000;
		margin-bottom: 5px;
	}
	main>div:nth-of-type(2)>div:nth-of-type(1)>span>h5{
		font-size: 34px;
		color: #666;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2){
		width: 92%;
		height: 120px;
		margin: 50px auto;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2)>ul{
		float: left;
		width: 400px;
		height: 100%;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2)>ul>li{
		float: left;
		width: 150px;
		height: 100%;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2)>ul>li>h3{
		font-size: 40px;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2)>ul>li>p{
		font-size: 36px;
		color: #666;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2)>ul>li:nth-of-type(2){
		margin-left: 80px;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2)>span{
		display: inline-block;
		float: right;
		margin-top: 25px;
		width: 150px;
		height: 60px;
		text-align: center;
		border-radius: 15px;
	}
	main>div:nth-of-type(2)>div:nth-of-type(2)>span>a{
		display: inline-block;
		width: 100%;
		height: 100%;
		border: 2px solid #007fff;
		text-decoration: none;
		line-height: 60px;
		color: #007fff;
		font-size: 38px;
		border-radius: 15px;
	}
	main>ul{
		width: 100%;
		margin-top: 40px;
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
		margin-bottom: 10px;
	}
	main>ul>li>span{
		float: left;
		margin-left: 40px;
		font-size: 38px;
		line-height: 100px;
	}
	main>ul>li>img{
		float: right;
		width: 70px;
		margin-top: 15px;
		margin-right: 40px;
	}
	main>ul>li:nth-of-type(2),main>ul>li:nth-of-type(4){
		margin-top: 40px;
	}
</style>