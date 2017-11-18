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
			<li v-for="(v,i) in data">
			<img :src="v.image"/>
			 <div>
				<div>
				   <p>{{v.title}}</p>
				   <span>已有{{v.number}}人参加</span>
				</div>
			 </div>
			</li>
		</ul>
	</main>
</template>

<script>
	 export default{
	 	data(){
	 		return{
	 			data:[
	 					{
                "title": "沸点：你认为普通开发者是否有必要学习 AI 相关的知识？前三名送📚",
                "image": "https://user-gold-cdn.xitu.io/2017/7/20/3388e97f305809ad2099ed83ca2cdfa5?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "365"
            },
            {
                "title": "沸点：你是怎么打发睡前时间的？",
                "image": "https://user-gold-cdn.xitu.io/2017/6/25/c1ed0adc8d75c6aa6bae701bc947b808?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "298"
            },
            {
                "title": "沸点：你是如何整理笔记的？",
                "image": "https://user-gold-cdn.xitu.io/2017/7/12/caab357c14efd7be30f060fc84cb0ca1?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "127"
            },
            {
                "title": "沸点：程序员最常说的谎言有哪些？",
                "image": "https://user-gold-cdn.xitu.io/2017/7/5/6d36d47cce7a430e0b6a3e5ec304f02e?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "574"
            },
            {
                "title": "沸点：2017年已经过去一半了,用一句话总结一下上半年",
                "image": "https://user-gold-cdn.xitu.io/2017/7/2/19d042cf70a03faf85feb71dfae3301f?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "347"
            },
            {
                "title": "沸点：你在学习开发的过程中走过哪些弯路？前三名送📚",
                "image": "https://user-gold-cdn.xitu.io/2017/6/29/5b5677dc54b7b466af324eebd415b653?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "119"
            },
            {
                "title": "程序员应该如何兼顾业务开发和个人能力提升？前三名送书📚",
                "image": "https://user-gold-cdn.xitu.io/2017/6/15/eb1c877818b5c1a7f952363714accd4e?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "470"
            },
            {
                "title": "沸点：你想在掘金看到更多哪些品类的内容？ (掘金招聘编辑，推荐入职送🔨锤子手机)",
                "image": "https://user-gold-cdn.xitu.io/2017/6/18/b6f1f74a9ccc13de03082f0b8b828635?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "61"
            },
            {
                "title": "沸点：推荐你最喜欢的一首歌或者一部电影",
                "image": "https://user-gold-cdn.xitu.io/2017/5/28/40198781ddbf2b7f0f1b70bbbb4662df?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "143"
            },
            {
                "title": "沸点：你小时候有哪些愿望？",
                "image": "https://user-gold-cdn.xitu.io/2017/6/1/9351bb78c302b3243e1239c4f6150cbf?imageView2/1/w/960/h/200/q/85/format/jpg/interlace/1",
                "number": "160"
            }
	 		]
	 		}
	 	},
	 	methods:{
	 		cle(){
	 			this.$router.go(-1);
	 		}
	 	}
	 }
</script>

<style scoped>
	main{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	main>div:nth-of-type(1){
		position: fixed;
		top: 0;
		left: 0;
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
		margin-top: 101px;
	}
	main>ul>li{
		width: 100%;
		position: relative;
	}
	main>ul>li>img{
		width: 100%;
		height: 450px;
	}
	main>ul>li>div{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		
	}
	main>ul>li>div>div{
		width: 80%;
		height: 60%;
		margin: 8% auto;
		text-align: center;
		position: relative;
		color: #fff;
	}
	main>ul>li>div>div>p{
		font-size: 38px;
		line-height: 60px;
	}
	main>ul>li>div>div>span{
		position: absolute;
		left: 30%;
		bottom: 12%;
		width: 40%;
		height: 30%;
		line-height: 70px;
		text-align: center;
		border: 2px solid #fff;
		font-size: 38px;
	}
</style>