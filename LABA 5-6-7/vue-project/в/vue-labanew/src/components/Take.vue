<template>
	<div class="take">
		<TakeHeader/>
		<TakeBodyVue/>
	</div>
</template>
<script>
import TakeHeader from './TakeHeader.vue';
import TakeBodyVue from './TakeBody.vue';
export default {
	name:'TakeBlock',
	components: {
		TakeHeader,
		TakeBodyVue,
	},
};
</script>
<style>
.take{
	background: #F2F2F2;
}
</style>
