<template>
	<main>
		<div>
			<div>
				<svg class="icon" aria-hidden="true" @click="cle">
					<use xlink:href="#icon-skip"></use>
				</svg>
				<img src="../../image/yuan5.png"/>
				<span>{{this.$route.params.author}}</span>
			</div>
			<div>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-share"></use>
				</svg>
			</div>
		</div>
		<img src="../../assets/image/find/4.jpg"/>
		<div>
			<h1>{{this.$route.params.title}}</h1>
			<p>{{this.$route.params.read}}</p>
	     </div>
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
		z-index: 11;
		width: 100%;
		height: 100%;
		background: #fff;
	}
	main>div:nth-of-type(1){
		width: 100%;
		height: 100px;
		background: #f5f5f7;
	}
	main>div:nth-of-type(1)>div:nth-of-type(1){
		width: 500px;
		height: 100px;
		float: left;
		margin-left: 30px;
		line-height: 100px;
	}
	main>div:nth-of-type(1)>div:nth-of-type(1)>svg{
		color: #007fff;
		font-size: 60px;
		transform: rotateY(180deg);
		margin-right: 20px;
		margin-top: 20px;
		float: left;
	}
	main>div:nth-of-type(1)>div:nth-of-type(1)>img{
		width: 80px;
		border-radius: 50%;
		margin: 10px 30px;
		float: left;
	}main>div:nth-of-type(1)>div:nth-of-type(1)>span{
		height: 100%;
		display: inline-block;
		font-size: 38px;
		font-family: "微软雅黑";
		float: left;
	}
	main>div:nth-of-type(1)>div:nth-of-type(2){
		float: right;
		margin-right: 30px;
		margin-top: 8px;
		font-size: 60px;
		color: #007fff;
	}
	main>img{
		width: 100%;
	}
	main>div:nth-of-type(2){
		width: 94%;
		margin: 0 auto;
		overflow: hidden;
	}
	main>div:nth-of-type(2)>h1{
		font-size: 40px;
		font-weight: bold;
		margin-top: 40px;
		margin-bottom: 60px;
	}
	main>div:nth-of-type(2)>p{
		font-size: 34px;
		color: #222;
		line-height: 60px;
	}
</style>