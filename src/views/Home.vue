<template>
	<div>
		<input type="name" v-model="nameValue" />
		<input type="button" @click="setNameValue" value="click" />
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'
	export default {
		data(){
			return {
				nameValue: this.$store.getters.name
			}
		},
		computed:{
		},
		methods: {
			message(){
				this.$message.error('test')
			},
			setNameValue(){
				this.setName(this.nameValue)
			},
			...mapMutations(['setName'])
		}
	}
</script>

<style>
</style>
