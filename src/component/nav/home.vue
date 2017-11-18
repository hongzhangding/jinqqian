	<template>
		<main>
			<div>
			<ul>
				<li><router-link to='/homepage'><span>首页</span></router-link></li>
				<li><router-link to='/frontend'><span>前端</span></router-link></li>
				<li><router-link to='/product'><span>产品</span></router-link></li>
				<li><router-link to='/design'><span>设计</span></router-link></li>
				<li><router-link to='/afterend'><span>后端</span></router-link></li>
			</ul>
			<span>
				<svg class="icon" aria-hidden="true">
				  <use xlink:href="#icon-qrcode"></use>
				</svg>
			</span>
			</div>
			
			<div>
				<transition enter-active-class="animated fadeIn" name="fade">
				<router-view></router-view>
				</transition>
			</div>
		</main>
	</template>
	

<style scoped>
	main{
		  width: 100%;
	}
	main>div:nth-of-type(1){
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100px;
		line-height:100px;
		box-shadow: inset 0px -1px 1px -1px #A7A7AB;
		background-color: #f5f5f7;
	}
	main>div:nth-of-type(1)>ul{
		width: 90%;
		height: 100%;
		float: left;
	}
	main>div:nth-of-type(1)>ul>li{
		float: left;
		box-sizing: border-box;
		width: 20%;
		text-align: center;
		height: 100%;
	}
	main>div:nth-of-type(1)>ul>li>a{
		text-decoration: none;
		color: #666;
		font-size: 36px;
	}
	main>div:nth-of-type(1)>ul>li:hover{
		border-bottom: 3px solid #5c98e0;
	}
	main>div:nth-of-type(1)>ul>li:hover>a{
		color:#5c98e0;
	}
	
	main>div:nth-of-type(1)>span{
		display: inline-block;
		font-size: 40px;
		float: right;
		margin-right: 15px;
		color: #666;
	}
</style>
<script>
	
</script>









