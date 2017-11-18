<template>
	<main>
		<div>
			<div>
				<svg class="icon" aria-hidden="true" @click="cle">
					<use xlink:href="#icon-skip"></use>
				</svg>
			</div>
			<span>搜索</span>
		</div>
		<div><input type="text" name="" id="" value="" placeholder="搜索"/></div>
		
	</main>
</template>

<script>
</script>

<style scoped>
	main{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		z-index: 11;
	}
	main>div:nth-of-type(1){
		width: 100%;
		background: #f5f5f7;
		height: 100px;
		border: 1px solid #ddd;
		text-align: center;
		font-size: 40px;
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
		width: 90%;
		height: 70px;
		background: #e0e1e5;
		margin: 20px auto;
		border-radius: 15px;
		overflow: hidden;
	}
	main>div:nth-of-type(2)>input{
		display: inline-block;
		width: 100%;
		border-radius: 15px;
		background: #e0e1e5;
		height:100%;
		font-size: 40px;
		color: #666;
		padding-left: 30px;
		cursor: pointer;
	}
</style>
<script>
	 export default{
	 	methods:{
	 		cle(){
	 			this.$router.go(-1);
	 		}
	 	}
	 }
</script>


