<template>
	<main>
		<div>
			消息
		</div>
		<ul>
			<li v-for="(v,i) in msg">
				<div><img src="../../image/me.jpg"/><span>{{v.name}}&nbsp;关注了你<br />{{v.ags}}</span></div>
				<div><img src="../../assets/image/find/right3.png"/></div>
			</li>
		</ul>
	</main>
</template>

<script>
	export default {
		data(){
			return{
				msg:[
					{'name':'李炜婷','ags':'超明星'},
					{'name':'杨幂','ags':'明星'},
					{'name':'范冰冰','ags':'明星'}
				]
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
		background: #f0eff4;
	}
	main>div{
		width: 100%;
		height: 90px;
		line-height: 90px;
		text-align: center;
		font-size: 40px;
		background: #f5f5f7;
	}
	main>ul{
		width: 100%;
	}
	main>ul>li{
		width: 100%;
		height: 130px;
		background: #fff;
		border: 1px solid #aaa;
	}
	main>ul>li>div:nth-of-type(1){
		width: 40%;
		height: 100%;
		float: left;
		margin-left: 40px;
		color: #aaa;
		font-size: 34px;
	}
	main>ul>li>div:nth-of-type(1)>img{
		display: inline-block;
		width: 25%;
		float: left;
		margin-top: 13px;
	}
	main>ul>li>div:nth-of-type(1)>span{
		width: 68%;
		float: right;
		line-height: 60px;
		font-family: "微软雅黑";
		text-align: left;
	}
	main>ul>li>div:nth-of-type(2){
		float: right;
		margin-right: 20px;
		width: 14%;
		height: 100%;
	}
	main>ul>li>div:nth-of-type(2)>img{
		width: 60%;
		margin-top: 20px;
	}
	
</style>