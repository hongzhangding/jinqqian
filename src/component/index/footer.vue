<template>
	<main>
		<ul class="clic">
			<li @click="aa">
				<router-link tag="div" class="tab-item" to="/home" id="a">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-all"></use>
					</svg>
					<span>首页</span>
				</router-link>
			</li>
			<li @click="bb">
				<router-link tag="div" class="tab-item" to="/find">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-search"></use>
					</svg>
					<span>发现</span>
				</router-link>
			</li>
			<li @click="cc">
				<router-link tag="div" class="tab-item" to="/infor">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-search"></use>
					</svg>
					<span>消息</span>
				</router-link>
			</li>
			<li @click="dd">
				<router-link tag="div" class="tab-item" to="/my">
					<svg class="icon" aria-hidden="true">
					  <use xlink:href="#icon-search"></use>
					</svg>
					<span>我的</span>
				</router-link>
			</li>
		</ul>
	</main>
</template>
<script>
	
	export default{
		methods:{
			aa(){
				this.$router.push({path:'/homepage'});
				    $('.clic>li>div>svg,.clic>li>div>span').css({'color':'#666','font-size':'40px'});
					$('.clic>li:nth-of-type(1)>div>svg,.clic>li:nth-of-type(1)>div>span').css({'color':'#1c70e4','font-size':'46px'});
			},
			bb(){
				$('.clic>li>div>svg,.clic>li>div>span').css({'color':'#666','font-size':'40px'});
				$('.clic>li:nth-of-type(2)>div>svg,.clic>li:nth-of-type(2)>div>span').css({'color':'#1c70e4','font-size':'46px'});
			},
			cc(){
				$('.clic>li>div>svg,.clic>li>div>span').css({'color':'#666','font-size':'40px'});
				$('.clic>li:nth-of-type(3)>div>svg,.clic>li:nth-of-type(3)>div>span').css({'color':'#1c70e4','font-size':'46px'});
			},
			dd(){
				$('.clic>li>div>svg,.clic>li>div>span').css({'color':'#666','font-size':'40px'});
				$('.clic>li:nth-of-type(4)>div>svg,.clic>li:nth-of-type(4)>div>span').css({'color':'#1c70e4','font-size':'46px'});
			}
		}
	}
</script>
<style scoped>
		main {
		z-index: 10;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 130px;
		background-color: #F5F5F5;
		box-shadow: inset 0px 1px 1px -1px #A7A7AB;
		padding: 0 10px;
		box-sizing: border-box;
		border: 1px solid #999;
	}
	
	main>ul {
		width: 100%;
		height: 100%;
		background-color: #F5F5F5;
	}
	
	main>ul>li {
		float: left;
		height: 100%;
		width: 25%;
		box-sizing: border-box;
		text-align: center;
	}
	
	main>ul>li>div{
		height: 100%;
		overflow: hidden;
		padding-top: 10px;
		line-height: 130px;
		font-size: 40px;
	}
	/*main>ul>li>div:hover{
		color: #007fff;
	}*/
	main>ul>li>div:hover>span{
		display: inline-block;
		color: #1c70e4;
	}
	main>ul>li>div>span{
		display: inline-block;
		color: #666;
	}
</style>
