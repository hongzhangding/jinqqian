<template>
	<main>
			<transition enter-active-class="animated fadeIn" name="fade">
			    <router-view></router-view>
			</transition>
		<v-footer></v-footer>
	</main>
</template>

<script>
	import vfooter from './component/index/footer.vue'

	export default {
		components: {
			'v-footer': vfooter
		}
	}
</script>

<style scoped>
</style>